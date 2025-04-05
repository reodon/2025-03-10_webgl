import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ff } from '../lib/funcs'
// import type {ComplexAttributeConverter} from 'lit';

// type Axis = [number, number, number];

// const axisConverter = (): ComplexAttributeConverter<Axis> => {
//   return {
//     toAttribute: (array: Axis) => {
//       return JSON.stringify(array)
//     },
//     fromAttribute: (value: string) => {
//       const a = Array.from(JSON.parse(value)).map(Number);
//       return [
//         a[0],
//         a[1],
//         a[2],
//       ] as const;
//     }
//   }
// };

@customElement('greek-button')
export class GreekButton extends LitElement {
  @property({ type: String })
  elm = "α";

  @property({ type: String })
  color = "blue";

  @property({ type: String, attribute: 'text-color' })
  textColor = "white";

  // @property({ type: Array, converter: axisConverter, reflect: true })
  @property({ type: Array })
  axis = [0, 0, 1] as [number, number, number];

  @property({ type: Number })
  to = Math.PI;

  @property({ type: Object })
  ax = {x: '-x', y: '-y', z: '+z'};

  @property({ type: Number })
  duration!: number;

  @property({ type: Boolean, attribute: 'axis-color' })
  axisColor!: boolean;

  render() {
    return html`
      <button
        style="background: ${this.color}; color: ${this.textColor};"
        @click="${() => {
          ff({
            elm: this.elm,
            axisColor: this.axisColor ? this.color : undefined,
            axis: this.axis,
            to: this.to,
            ax: this.ax,
            duration: this.duration,
          });
        }}"
      >
        ${this.elm}
      </button>
    `
  }

  static styles = css`
    :host {
      display: contents;
    }

    button {
      font-size: inherit;
      font-weight: bold;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'greek-button': GreekButton
  }
}
