/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconRowRemove: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-row-remove pressed' : 'icon-row-remove'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 6v12c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1H5v4h14V7h-1c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1M5 12v2h14v-2zm14 5v-2H5v2zM13.59 3.35 12 4.94l-1.59-1.59c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06L10.94 6 9.35 7.59c-.29.29-.29.77 0 1.06s.77.29 1.06 0L12 7.06l1.59 1.59c.29.29.77.29 1.06 0s.29-.77 0-1.06L13.06 6l1.59-1.59c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0"></path>
  </svg>
);
