/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconGroupItems: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-group-items pressed' : 'icon-group-items'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M14 9.5c0-.83-.67-1.5-1.5-1.5h-4C7.67 8 7 8.67 7 9.5S7.67 11 8.5 11h4c.83 0 1.5-.67 1.5-1.5m1.5 3.5h-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5M22 5V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1H6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1v12c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1h12c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1V6c.55 0 1-.45 1-1m-3 13c-.55 0-1 .45-1 1H6c0-.55-.45-1-1-1V6c.55 0 1-.45 1-1h12c0 .55.45 1 1 1z"></path>
  </svg>
);
