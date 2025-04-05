import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { busy, set_ax } from '../lib/funcs'

@customElement('greek-id-button')
export class GreekIdButton extends LitElement {
  @property({ type: Number })
  duration!: number;

  render() {
    return html`
      <button
        @click="${() => {
          busy(true);

          set_ax({x: 1, y: 2, z: 3});
          const cubeControler = document.querySelector('cube-controler')?.shadowRoot!;
          const out = cubeControler.querySelector<HTMLTextAreaElement>('textarea#out')!;
          out.value = '';

          const cube = document.getElementById('cube') as any;
          const rotation = '0 0 0';
          cube.setAttribute('animation', ['property: rotation; to: ', rotation, '; dur: ', this.duration, ';'].join(''));

          setTimeout(() => {
            cube.removeAttribute('animation');
            cube.setAttribute('rotation', rotation);
            busy(false);
          }, this.duration);
        }}"
      >e</button>
    `
  }

  static styles = css`
    :host {
      display: contents;
    }

    button {
      font-size: inherit;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'greek-id-button': GreekIdButton
  }
}
