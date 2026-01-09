/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconToggleOff: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-toggle-off pressed' : 'icon-toggle-off'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M7 7h10c2.76 0 5 2.24 5 5s-2.24 5-5 5H7c-2.76 0-5-2.24-5-5s2.24-5 5-5m0 8c1.66 0 3-1.34 3-3S8.66 9 7 9s-3 1.34-3 3 1.34 3 3 3"></path>
  </svg>
);
