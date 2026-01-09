/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPersonClock: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-person-clock pressed' : 'icon-person-clock'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M10.2 10.74h.03c1.84 0 3.4-1.15 4.04-2.76.02-.05.03-.1.05-.15.07-.2.14-.4.18-.61.46-2.36-1.09-4.64-3.45-5.1-.27-.05-.55-.08-.82-.08h-.03c-2.39.01-4.32 1.95-4.32 4.35s1.93 4.33 4.32 4.35m.03 1.38c-3.31 0-5.93.93-7.34 1.58s-1.81 1.16-1.81 2.08c0 .49.27 1.5.5 2.34.23.78.94 1.32 1.76 1.32h6.8c-1.11-2.35-.97-5.1.38-7.32zm6.86-1.8c-3.2 0-5.82 2.62-5.82 5.82s2.62 5.82 5.82 5.82 5.82-2.62 5.82-5.82-2.62-5.82-5.82-5.82m2.5 8.44c-.23.23-.64.23-.87 0l-2.1-2.1a.75.75 0 0 1-.23-.58v-2.91c0-.35.29-.64.64-.64s.64.29.64.64v2.74l1.92 1.92c.29.29.29.64 0 .93"></path>
  </svg>
);
