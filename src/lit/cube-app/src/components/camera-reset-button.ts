import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('camera-reset-button')
export class CameraResetButton extends LitElement {
  render() {
    return html`
      <button
        @click="${() => {
          const camera = document.querySelector('a-camera')! as any;
          camera.setAttribute('position', '0 0 0');
          camera.components['look-controls'].yawObject.rotation.y = 0;
          camera.components['look-controls'].pitchObject.rotation.x = 0;
          camera.components['look-controls'].pitchObject.rotation.z = 0;
        }}"
      >camera reset</button>
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
    'camera-reset-button': CameraResetButton
  }
}
