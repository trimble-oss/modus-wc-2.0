/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconWifi: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-wifi pressed' : 'icon-wifi'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M17.79 12.18c-3.45-2.49-8.13-2.48-11.58.01-.69.49-.74 1.51-.13 2.11.5.5 1.28.53 1.86.12 2.43-1.7 5.69-1.7 8.12 0 .58.41 1.36.38 1.86-.12.6-.6.56-1.62-.13-2.12m-7.33 3.43a2.179 2.179 0 0 0 3.08 3.08 2.179 2.179 0 0 0-3.08-3.08m11.38-7.42c-5.71-4.67-13.97-4.68-19.69 0-.65.52-.69 1.51-.11 2.1a1.4 1.4 0 0 0 1.89.09c4.67-3.83 11.43-3.83 16.11 0 .57.47 1.38.43 1.9-.08.59-.59.54-1.58-.1-2.11"></path>
  </svg>
);
