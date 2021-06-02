import { LitElement, html, css } from 'lit-element';

class ProductCard extends LitElement {
  static get properties() { return {
    brand: { type: String },
    name: { type: String },
    yeast: { type: String },
    malts: { type: String },
    alcohol: { type: String },
    }
  }

  static get styles() {
    return css`
      .wrapper {
        width: var(--card-width, 250px);
        height: var(--card-height, 400px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
      }

      .highlight {
        font-weight: bold;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const {
      brand,
      name,
      yeast,
      malts,
      alcohol,
    } = this;

    return html`
      <div class='wrapper'>
        <h2>${brand}</h2>
        <p>${name}</p>
        <p>${yeast}</p>
        <p>${malts}</p>
        <p class='highlight'>${alcohol}</p>
      </div>
    `;
  }
}

export default ProductCard;