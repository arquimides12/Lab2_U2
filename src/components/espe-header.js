import { LitElement, html, css } from 'lit';

class EspeHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #10231c;
      padding: 1rem;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: bold;
    }
  `;

  render() {
    return html`
      <header class="header-content">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor">
            <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 ..."></path>
          </svg>
        </div>
        <h2>ESPE Tasks</h2>
        <button id="menu-toggle" class="md:hidden text-white ml-auto mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>
      </header>
    `;
  }
}

// Comprobación para evitar registrar el componente más de una vez
if (!customElements.get('espe-header')) {
  customElements.define('espe-header', EspeHeader);
}
