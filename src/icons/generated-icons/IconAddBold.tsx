/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconAddBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-add-bold pressed' : 'icon-add-bold'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M18.5 10.5h-5v-5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5h-5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5"></path>
  </svg>
);
