/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCheckBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-check-bold pressed' : 'icon-check-bold'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M9 18.5c-.38 0-.77-.15-1.06-.44l-3.5-3.5a1.49 1.49 0 0 1 0-2.12 1.49 1.49 0 0 1 2.12 0L9 14.88l8.44-8.44a1.49 1.49 0 0 1 2.12 0c.59.59.59 1.54 0 2.12l-9.5 9.5c-.29.29-.68.44-1.06.44"></path>
  </svg>
);
