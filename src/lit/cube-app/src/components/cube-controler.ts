import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('cube-controler')
export class CubeControler extends LitElement {
  @property({ type: Number, reflect: true })
  duration!: number;

  @property({ type: Boolean, reflect: true, attribute: 'axis-color' })
  axisColor!: boolean;

  private onInputDuration(event: CustomEvent) {
    this.duration = event.detail.duration;
  }
  private onChangeAxisColor(event: CustomEvent) {
    this.axisColor = event.detail.axisColor;
  }

  render() {
    return html`
      <div>
        <camera-reset-button></camera-reset-button>

        <greek-id-button
          .duration="${this.duration}"
        ></greek-id-button>
      </div>

      <div>
        <greek-button
          elm="α"
          color="blue"
          .axis="${[0, 0, 1] as const}"
          .ax="${{x: '-x', y: '-y', z: '+z'}}"
          .duration="${this.duration}"
          .axisColor="${this.axisColor}"
        ></greek-button>

        <greek-button
          elm="β"
          color="green"
          .axis="${[0, 1, 0] as const}"
          .ax="${{x: '-x', y: '+y', z: '-z'}}"
          .duration="${this.duration}"
          .axisColor="${this.axisColor}"
        ></greek-button>

        <greek-button
          elm="γ"
          color="red"
          .axis="${[1, 0, 0] as const}"
          .ax="${{x: '+x', y: '-y', z: '-z'}}"
          .duration="${this.duration}"
          .axisColor="${this.axisColor}"
        ></greek-button>
      </div>

      <div>
        <greek-button
          elm="σ"
          color="black"
          .axis="${[-1, 1, -1] as const}"
          .ax="${{x: '-y', y: '-z', z: '+x'}}"
          .to="${Math.PI * 2 / 3}"
          .duration="${this.duration}"
          .axisColor="${this.axisColor}"
        ></greek-button>

        <greek-button
          elm="τ"
          color="white"
          text-color="black"
          .axis="${[1, 1, 0] as const}"
          .ax="${{x: '+y', y: '+x', z: '-z'}}"
          .duration="${this.duration}"
          .axisColor="${this.axisColor}"
        ></greek-button>
      </div>

      <div>
        <textarea id="out" readonly></textarea>
      </div>

      <cube-menu
        .duration="${this.duration}"
        .axisColor="${this.axisColor}"
        @input-duration=${this.onInputDuration}
        @change-axis-color=${this.onChangeAxisColor}
      ></cube-menu>

      <div class="buttons-loading"></div>
    `
  }

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 1rem;
      padding: 1rem;
      background-color: rgb(256, 256, 256, 0.5);

      > div {
        display: flex;
        gap: 1rem;
        * {
          font-size: 1.5rem;
        }
      }

      .buttons-loading {
        display: none;
        /* pointer-events: none; */
        position: absolute;
        z-index: 10;
        inset: 0;
        width: 100%;
        height: 100%;
        /* background-color: rgb(0, 0, 0, 0.5); */
        /* background-color: rgb(256, 256, 256, 0.2); */
        background-color: rgb(0, 0, 0, 0.1);
        cursor: wait;
      }

      textarea#out {
        direction: rtl;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'cube-controler': CubeControler
  }
}
