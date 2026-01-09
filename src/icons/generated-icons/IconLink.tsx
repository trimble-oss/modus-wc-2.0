/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconLink: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-link pressed' : 'icon-link'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M5.88 17.25c-.84-1.24-.58-2.93.48-3.99l2.07-2.07a.948.948 0 0 0-1.34-1.34l-2 2c-1.85 1.85-2.15 4.84-.49 6.86 1.91 2.31 5.34 2.43 7.4.37l2.16-2.16a.948.948 0 0 0-1.34-1.34l-2.16 2.16c-1.35 1.35-3.65 1.18-4.78-.49m4.71-2.42 4.24-4.24a.996.996 0 1 0-1.41-1.41l-4.24 4.24a.996.996 0 1 0 1.41 1.41m1.26-9.75-2 2a.948.948 0 0 0 1.34 1.34l2.07-2.07c1.06-1.06 2.75-1.32 3.99-.48a3.11 3.11 0 0 1 .48 4.78l-2.16 2.16a.948.948 0 0 0 1.34 1.34l2.16-2.16a4.997 4.997 0 0 0-.37-7.4c-2.01-1.66-5-1.36-6.85.49"></path>
  </svg>
);
