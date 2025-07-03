import { LitElement, html, css } from 'lit';

class EspeTaskModal extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: rgba(16, 35, 28, 0.9);
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      animation: fadeIn 0.3s;
    }
    .modal-content {
      position: relative;
      background-color: #17352b;
      margin: auto;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  static open = false; // Propiedad estática para controlar si el modal está abierto
  static task = null;  // Propiedad estática para la tarea seleccionada

  render() {
    return html`
      ${EspeTaskModal.open ? html`
        <div class="modal-content">
          <h2>${EspeTaskModal.task ? EspeTaskModal.task.name : ''}</h2>
          <p>${EspeTaskModal.task ? EspeTaskModal.task.notes : ''}</p>
          <button @click="${this._closeModal}">Cerrar</button>
        </div>
      ` : ''}
    `;
  }

  _closeModal() {
    EspeTaskModal.open = false;
    this.dispatchEvent(new CustomEvent('modal-closed'));
  }

  openModal(task) {
    EspeTaskModal.task = task;
    EspeTaskModal.open = true;
  }
}

customElements.define('espe-task-modal', EspeTaskModal);
