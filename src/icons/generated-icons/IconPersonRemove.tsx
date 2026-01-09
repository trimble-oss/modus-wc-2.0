/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPersonRemove: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-person-remove pressed' : 'icon-person-remove'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M14.5 11.94c2.23 0 4.04-1.81 4.04-4.04s-1.81-4.04-4.04-4.04-4.04 1.81-4.04 4.04 1.81 4.04 4.04 4.04M9 11c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1m12.32 3.68c-1.31-.6-3.72-1.48-6.82-1.47-3.08 0-5.51.87-6.82 1.47S6 15.76 6 16.61c0 .46.25 1.39.47 2.18.21.72.88 1.22 1.63 1.22h12.8c.76 0 1.42-.5 1.63-1.22.23-.77.47-1.72.47-2.18 0-.85-.37-1.33-1.68-1.93"></path>
  </svg>
);
