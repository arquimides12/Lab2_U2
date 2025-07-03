import { LitElement, html, css } from 'lit-element';

class AppContainer extends LitElement {
    static get properties() {
        return {
            tasks: { type: Array },
            theme: { type: String }
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
                min-height: 100vh;
                font-family: Manrope, "Noto Sans", sans-serif;
                transition: all 0.3s ease;
            }

            .app-container {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                background-color: var(--bg-primary);
                color: var(--text-primary);
                transition: background-color 0.3s ease;
            }

            .app-container.dark {
                --bg-primary: #10231c;
                --bg-secondary: #17352b;
                --bg-tertiary: #214a3c;
                --text-primary: #ffffff;
                --text-secondary: #8ecdb7;
                --border-color: #2f6a55;
                --accent-color: #019863;
            }

            .app-container.light {
                --bg-primary: #f0f9ff;
                --bg-secondary: #ffffff;
                --bg-tertiary: #e0f2fe;
                --text-primary: #1e293b;
                --text-secondary: #64748b;
                --border-color: #cbd5e1;
                --accent-color: #0ea5e9;
            }

            .layout-container {
                display: flex;
                flex: 1;
                flex-direction: column;
                height: 100%;
            }

            .content-wrapper {
                display: flex;
                flex: 1;
                justify-content: center;
                padding: 20px 16px;
            }

            .layout-content-container {
                display: flex;
                flex-direction: column;
                max-width: 960px;
                flex: 1;
                width: 100%;
            }

            .title-section {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                padding: 0px 16px;
            }

            .page-title {
                color: var(--text-primary);
                font-size: 32px;
                font-weight: bold;
                min-width: 288px;
                letter-spacing: -0.015em;
            }

            .tabs-section {
                padding-bottom: 12px;
            }

            .tabs-container {
                display: flex;
                border-bottom: 1px solid var(--border-color);
                padding: 0 16px;
                gap: 32px;
            }

            .tab {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-bottom: 3px solid transparent;
                color: var(--text-secondary);
                text-decoration: none;
                transition: all 0.3s ease;
            }

            .tab.active {
                border-bottom-color: var(--accent-color);
                color: var(--text-primary);
            }

            .tab-text {
                font-size: 14px;
                font-weight: bold;
                line-height: normal;
                letter-spacing: 0.015em;
            }

            .add-task-section {
                display: flex;
                justify-content: end;
                overflow: hidden;
            }

            @media (max-width: 768px) {
                .content-wrapper {
                    padding: 20px 16px;
                }
                
                .page-title {
                    font-size: 24px;
                    min-width: auto;
                }
                
                .tabs-container {
                    gap: 16px;
                }
            }
        `;
    }

    constructor() {
        super();
        this.tasks = [
            {
                id: 1,
                name: 'Reunión de Proyecto',
                notes: 'Preparar presentación para la reunión con el equipo.',
                time: '10:00',
                priority: 'alta',
                date: 'hoy'
            },
            {
                id: 2,
                name: 'Almuerzo con el equipo',
                notes: 'Discutir avances del proyecto durante el almuerzo.',
                time: '13:00',
                priority: 'media',
                date: 'hoy'
            },
            {
                id: 3,
                name: 'Presentación de la propuesta',
                notes: 'Presentar la propuesta final al cliente.',
                time: '09:00',
                priority: 'alta',
                date: 'mañana'
            },
            {
                id: 4,
                name: 'Revisión de código',
                notes: 'Revisar el código de la implementación actual.',
                time: '14:00',
                priority: 'media',
                date: 'mañana'
            }
        ];
        this.theme = 'dark';
    }

    _handleTaskAdded(e) {
        const newTask = e.detail;
        this.tasks = [...this.tasks, newTask];
        this.dispatchEvent(new CustomEvent('task-added', {
            detail: newTask,
            bubbles: true
        }));
    }

    _handleTaskCompleted(e) {
        const taskId = e.detail.id;
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.dispatchEvent(new CustomEvent('task-completed', {
            detail: { id: taskId },
            bubbles: true
        }));
    }

    _handleTaskUpdated(e) {
        const updatedTask = e.detail;
        this.tasks = this.tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        );
        this.dispatchEvent(new CustomEvent('task-updated', {
            detail: updatedTask,
            bubbles: true
        }));
    }

    _handleTaskDeleted(e) {
        const taskId = e.detail.id;
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.dispatchEvent(new CustomEvent('task-deleted', {
            detail: { id: taskId },
            bubbles: true
        }));
    }

    _toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.dispatchEvent(new CustomEvent('theme-changed', {
            detail: { theme: this.theme },
            bubbles: true
        }));
    }

    render() {
        return html`
            <div class="app-container ${this.theme}">
                <div class="layout-container">
                    <espe-header 
                        theme="${this.theme}"
                        @theme-toggle="${this._toggleTheme}">
                    </espe-header>
                    
                    <div class="content-wrapper">
                        <div class="layout-content-container">
                        <div class="title-section">
                            <p class="page-title">Mis Tareas</p>
                        </div>
                        
                        <div class="tabs-section">
                            <div class="tabs-container">
                            <a class="tab active" href="#">
                                <p class="tab-text">Por Fecha</p>
                            </a>
                            <a class="tab" href="#">
                                <p class="tab-text">Por Prioridad</p>
                            </a>
                            </div>
                        </div>
                        
                        <espe-task-list 
                            .tasks="${this.tasks}"
                            theme="${this.theme}"
                            @task-completed="${this._handleTaskCompleted}"
                            @task-updated="${this._handleTaskUpdated}"
                            @task-deleted="${this._handleTaskDeleted}">
                        </espe-task-list>
                        
                        <div class="add-task-section">
                            <espe-add-task-button 
                            theme="${this.theme}"
                            @task-added="${this._handleTaskAdded}">
                            </espe-add-task-button>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        `;
    }
}

customElements.define('espe-app-container', AppContainer);