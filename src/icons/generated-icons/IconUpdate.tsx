/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconUpdate: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-update pressed' : 'icon-update'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M4 11.99H2.21c-.45 0-.67-.54-.35-.85l2.79-2.8c.2-.2.51-.2.71 0l2.79 2.79c.31.32.09.86-.36.86H6c0 3.31 2.69 6 6 6 .79 0 1.56-.15 2.25-.44.36-.15.77-.04 1.04.23.51.51.33 1.37-.34 1.64-.91.37-1.91.57-2.95.57-4.42 0-8-3.58-8-8m14 0c0-3.31-2.69-6-6-6-.79 0-1.56.15-2.25.44-.36.15-.77.04-1.04-.23-.51-.51-.33-1.37.34-1.64.91-.37 1.91-.57 2.95-.57 4.42 0 8 3.58 8 8h1.79c.45 0 .67.54.35.85l-2.79 2.79c-.2.2-.51.2-.71 0l-2.79-2.79a.5.5 0 0 1 .36-.85z"></path>
  </svg>
);
