/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconColumnDelete: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-column-delete pressed' : 'icon-column-delete'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20 9c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v1h-4V7h4v1c0 .55.45 1 1 1M9 17H5V7h4zm5 0h-4V7h4zm8.65-7.65c.29.29.29.77 0 1.06L21.06 12l1.59 1.59c.29.29.29.77 0 1.06s-.77.29-1.06 0L20 13.06l-1.59 1.59c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06L18.94 12l-1.59-1.59c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L20 10.94l1.59-1.59c.29-.29.77-.29 1.06 0"></path>
  </svg>
);
