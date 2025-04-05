import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

var _ax: {
  x: number; y:number; z: number;
} = {
  x: 1, y: 2, z: 3,
};

const _duration = 1000;

export function set_ax(ax: {x: number; y: number; z: number;}) {
  _ax = ax;
}

function getAxis(axis: [number, number, number]) {
  return (Array.from("xyz") as (keyof typeof _ax)[]).map((a) => {
    const index = Math.abs(_ax[a]) - 1;
    const sign = Math.sign(_ax[a]);
    return sign * axis[index];
  });
}

function setAxis(ax: {x: string; y: string; z: string;}) {
  const pax = {..._ax};
  const paxe = Object.entries(pax).sort(
    (a, b) => Math.abs(a[1]) < Math.abs(b[1]) ? -1 : 1
  ) as ["x" | "y" | "z", number][];
  (Array.from("xyz") as (keyof typeof ax)[]).forEach((a, i) => {
    const sign = Math.sign(Number(`${ax[a][0]}1`));
    const nan = ({x: 1, y: 2, z: 3})[ax[a][1]];
    // _ax[a] = sign * pax[na];
    const ca = paxe[i][0];
    const cans = Math.sign(paxe[i][1]);
    _ax[ca] = sign * cans * (nan ?? -1);
  });
  console.log(_ax)
}

function f({
  axis,
  to,
  duration,
  selector,
  from,
  conjugation = false,
}: {
  axis: [number, number, number];
  to: number;
  duration: number;
  selector: string;
  from: number;
  conjugation?: boolean;
}) {
  const _axis = getAxis(axis);
  const elems = document.querySelectorAll(selector);
  const oqs = Array.from(elems).map(elem => (elem as any).object3D.quaternion.clone());
  const angle = {a: from};
  const tween = new TWEEN.Tween(angle)
    .to({a: to}, duration)
    .onUpdate(() => {
      elems.forEach((elem, i) => {
        const quaternion = (elem as any).object3D.quaternion;
        const target = new THREE.Quaternion();
        const _a = new THREE.Vector3(..._axis).normalize();
        target.setFromAxisAngle(_a, angle.a);
        quaternion.multiplyQuaternions(oqs[i], conjugation ? target.conjugate() : target);
      })
    })
    .start();

  const animate = (time: number) => {
    tween.update(time);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

export function busy(flag: boolean, axisColor?: string) {
  if (flag) {
    document.body.style.pointerEvents = 'none';
    document.body.style.cursor = 'wait';
    const cubeControler = document.querySelector<HTMLElement>('cube-controler')?.shadowRoot!;
    cubeControler.querySelector<HTMLElement>('.buttons-loading')!.style.display = 'block';
      console.log('axisColor')
    if (axisColor) {
      const axis = document.querySelector(`a-entity#axes a-cylinder[color='${axisColor}']`)!;
      axis.setAttribute('depth-test', true as any);
      axis.setAttribute('opacity', '1');
    }
  } else {
    document.body.style.pointerEvents = 'auto';
    document.body.style.cursor = 'auto';
    const cubeControler = document.querySelector<HTMLElement>('cube-controler')?.shadowRoot!;
    cubeControler.querySelector<HTMLElement>('.buttons-loading')!.style.display = 'none';
    // document.querySelector<HTMLElement>('.buttons-loading')!.style.display = 'none';
    if (axisColor) {
      const axis = document.querySelector(`a-entity#axes a-cylinder[color='${axisColor}']`)!;
      axis.setAttribute('depth-test', false as any);
      axis.setAttribute('opacity', '0.5');
    }
  }
}

export function ff({
  axis,
  to,
  ax = {x: '+x', y: '+y', z: '+z'},
  elm,
  selector = 'a-entity#cube',
  from = 0,
  duration = undefined,
  axisColor = undefined,
}: {
  axis: [number, number, number];
  to: number;
  ax?: {x: string; y: string; z: string;};
  elm: string;
  selector?: string;
  from?: number;
  duration?: number;
  axisColor?: string;
}) {
  busy(true, axisColor);

  if (elm) {
    const cubeControler = document.querySelector<HTMLElement>('cube-controler')?.shadowRoot!;
    const out = cubeControler.querySelector<HTMLTextAreaElement>('textarea#out');
    if (!out) return;
    const values = [...out.value];
    console.log(values);
    if (elm === values[0]) {
      if (values.length === 1) {
        out.value = elm + (2);
      } else {
        const index = values.slice(1).findIndex(c => {
          const charCode = c.charCodeAt(0);
          return charCode < 0x30 || 0x39 < charCode;
        });

        if (index === -1) {
          out.value = elm + (Number(values.slice(1).join('')) + 1);
        } else if (index === 0) {
          out.value = elm + (2) + values.slice(index + 1).join('');
        } else {
          out.value = elm + (Number(values.slice(1, index + 1).join('')) + 1) + values.slice(index + 1).join('');
        }
      }
    } else {
      out.value = elm + out.value;
    }
  }

  f({
    selector,
    axis,
    to,
    from,
    duration: duration ?? _duration,
  });

  setTimeout(() => {
    setAxis(ax);
    busy(false, axisColor);

    // f({
    //   selector: 'a-text',
    //   axis,
    //   to: -1 * to,
    //   // to,
    //   // conjugation: true,
    //   from,
    //   duration: duration / 3,
    // });

    // setTimeout(() => {
    //   setAxis(ax);
    //   document.body.style.pointerEvents = 'auto';
    // }, duration / 3);
  }, duration ?? _duration);
}
