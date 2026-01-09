/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconHardHat: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-hard-hat pressed' : 'icon-hard-hat'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M10.75 11.5 8.13 5.88C9.3 5.32 10.61 5 12 5s2.69.32 3.87.88l-2.62 5.62zM21 16c0-3.53-2.04-6.57-4.99-8.05l-2.12 4.55h-3.77L8 7.95C5.04 9.43 3.01 12.47 3.01 16h-1v2.67c2.74.83 6.2 1.33 10 1.33s7.26-.5 10-1.33V16z"></path>
  </svg>
);
