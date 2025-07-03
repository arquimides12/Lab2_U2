import { LitElement, html } from 'lit';

class EspeTaskList extends LitElement {
  static get properties() {
    return {
      tasks: { type: Array },
    };
  }

  render() {
    return html`
      <div id="tasks-container">
        ${this.tasks && Array.isArray(this.tasks) ? this.tasks.map(task => html`
          <div class="task-item" @click="${() => this._openTaskDetails(task)}">
            ${task.name}
          </div>
        `) : 'No tasks available'}
      </div>
    `;
  }

  _openTaskDetails(task) {
    this.dispatchEvent(new CustomEvent('task-selected', { detail: task }));
  }
}

// Comprobación para evitar registrar el componente más de una vez
if (!customElements.get('espe-task-list')) {
  customElements.define('espe-task-list', EspeTaskList);
}
