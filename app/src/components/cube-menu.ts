import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('cube-menu')
export class CubeMenu extends LitElement {
  @property({ type: Number, reflect: true })
  duration!: number;

  @property({ type: Boolean, reflect: true, attribute: 'axis-color' })
  axisColor!: boolean;

  render() {
    return html`
      <details>
        <summary>menu</summary>
        <div>
          <label>
            <input
              id="arrow"
              type="checkbox"
              checked
              @change="${(e: Event) => {
                const checked = (e.target as HTMLInputElement).checked;
                const arrow = document.querySelector('a-entity#arrow')!;
                arrow.setAttribute('visible', checked as any);
              }}"
            />
            arrow
          </label>

          <label>
            <input
              id="axes"
              type="checkbox"
              checked
              @change="${(e: Event) => {
                const checked = (e.target as HTMLInputElement).checked;
                const axes = document.querySelector('a-entity#axes')!;
                axes.setAttribute('visible', checked as any);
              }}"
            />
            axes
          </label>

          <label>
            <input
              id="axis-color"
              type="checkbox"
              ?checked="${this.axisColor}"
              @change="${(e: Event) => {
                const checked = (e.target as HTMLInputElement).checked;
                this.dispatchEvent(new CustomEvent('change-axis-color', {
                  detail: { axisColor: checked },
                  bubbles: true,
                  composed: true
                }));
              }}"
            />
            axis-color
          </label>

          <label>
            <input
              id="cursor"
              type="checkbox"
              @change="${(e: Event) => {
                const checked = (e.target as HTMLInputElement).checked;
                const cursor = document.querySelector('a-cursor')!;
                cursor.setAttribute('visible', checked as any);
              }}"
            />
            cursor
          </label>

          <label>
            <input
              id="depth-test"
              type="checkbox"
              checked
              @change="${(e: Event) => {
                const checked = (e.target as HTMLInputElement).checked;
                const cube = document.querySelector('a-entity#cube')!;
                const planes = cube.querySelectorAll('a-plane');
                planes.forEach(plane => {
                  plane.setAttribute('depth-test', checked as any);
                });
              }}"
            />
            depth-test
          </label>

          <label>
            <input
              id="depth-write"
              type="checkbox"
              checked
              @change="${(e: Event) => {
                const checked = (e.target as HTMLInputElement).checked;
                const cube = document.querySelector('a-entity#cube')!;
                const planes = cube.querySelectorAll('a-plane');
                planes.forEach(plane => {
                  plane.setAttribute('depth-write', checked as any);
                });
              }}"
            />
            depth-write
          </label>

          <label>
            <input
              id="wireframe"
              type="checkbox"
              @change="${(e: Event) => {
                const checked = (e.target as HTMLInputElement).checked;
                const cube = document.querySelector('a-entity#cube')!;
                const planes = cube.querySelectorAll('a-plane');
                planes.forEach(plane => {
                  plane.setAttribute('wireframe-linewidth', 5 as any);
                  plane.setAttribute('wireframe', checked as any);
                });
              }}"
            />
            wireframe
          </label>

          <label>
            duration:
            <input
              id="duration"
              type="number"
              min="0"
              step="100"
              .value="${String(this.duration)}"
              style="width: 5rem;"
              list="durations-list"
              @change="${(e: Event) => {
                const value = (e.target as HTMLInputElement).value;
                this.dispatchEvent(new CustomEvent('input-duration', {
                  detail: { duration: Number(value) },
                  bubbles: true,
                  composed: true
                }));
              }}"
            />

            <datalist id="durations-list">
              <option value="100"></option>
              <option value="500"></option>
              <option value="1000"></option>
              <option value="1500"></option>
              <option value="2000"></option>
            </datalist>
          </label>

          <label>
            sky-color:
            <input
              id="sky-color"
              type="color"
              value="#808080"
              @change="${(e: Event) => {
                const value = (e.target as HTMLInputElement).value;
                const sky = document.querySelector('a-sky')!;
                sky.setAttribute('color', value);
              }}"
            />
          </label>
        </div>
      </details>
    `
  }

  static styles = css`
    :host {
      display: contents;
    }

    details {
      display: flex;
      flex-direction: column;
      align-items: end;

      div {
        display: flex;
        flex-direction: column;
        align-items: start;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'cube-menu': CubeMenu
  }
}
