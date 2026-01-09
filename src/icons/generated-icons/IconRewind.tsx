/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconRewind: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-rewind pressed' : 'icon-rewind'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m11.42 13.346 4.58 4.22c.35.32.83.4 1.25.22.45-.2.75-.66.75-1.19v-8.43c0-.52-.29-.99-.75-1.19-.15-.07-.31-.1-.46-.1-.28 0-.56.11-.79.31l-4.58 4.22c-.26.24-.42.6-.42.97s.15.73.42.97M9 8.375v8c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5"></path>
  </svg>
);
