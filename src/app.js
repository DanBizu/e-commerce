import { LitElement, html, css } from "lit-element";
import { getData } from "./webapi/data.webapi";
import { repeat } from "lit-html/directives/repeat";

class MainApp extends LitElement {
  static get properties() {
    return {
      beers: { type: Array },
    };
  }

  static get styles() {
    return css`
      #app-root {
        padding: 0px 50px;
      }

      product-grid {
        --card-width: 300px;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  async firstUpdated() {
    this.beers = await getData();
  }

  render() {
    return html`
      <div id='app-root'>
        <product-grid>
          ${
          this.beers &&
          repeat(
            this.beers,
            (beer) => beer.uid,
            ({ brand, name, yeast, malts, alcohol }) => html`
              <product-card
                slot="products"
                .brand=${brand}
                .name=${name}
                .yeast=${yeast}
                .malts=${malts}
                .alcohol=${alcohol}
              ></product-card>
            `
          )}
        </product-grid>
      </div>
    `;
  }
}

export default MainApp;
