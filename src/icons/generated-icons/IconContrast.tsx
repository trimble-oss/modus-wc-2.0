/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconContrast: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-contrast pressed' : 'icon-contrast'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m20.71 19.29-3.11-3.11c.87-1.17 1.4-2.61 1.4-4.19a6.995 6.995 0 0 0-11.19-5.6L4.7 3.28a.996.996 0 1 0-1.41 1.41L6.4 7.8A7 7 0 0 0 5 11.99a6.995 6.995 0 0 0 11.19 5.6l3.11 3.11c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41Zm-4.54-4.54L9.25 7.83C10.04 7.31 10.99 7 12 7c2.76 0 5 2.24 5 5 0 1.02-.31 1.96-.83 2.75"></path>
  </svg>
);
