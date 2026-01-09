/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTrafficCone: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-traffic-cone pressed' : 'icon-traffic-cone'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20 20h-1.24l-4.8-17.27A.996.996 0 0 0 13 2h-2c-.45 0-.84.3-.96.73L5.24 20H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1M10.66 7.94l2.94 1.25s.05 0 .08.02l.94 3.39-4.71-2 .74-2.66ZM7.31 20l1.04-3.76 8.25 3.51.07.25H7.32Z"></path>
  </svg>
);
