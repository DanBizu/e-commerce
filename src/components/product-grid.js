import { html, LitElement, css } from 'lit-element';

class ProductGrid extends LitElement {
  static get styles() {
    return css`
      #product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--card-width, 200px), 1fr));
        grid-gap: 1rem;
        justify-items: center;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div id='product-grid'>
        <slot name='products'></slot>
      </div>
    `;
  }
}

export default ProductGrid;