/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSatellite: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-satellite pressed' : 'icon-satellite'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20.55 3.47a1.54 1.54 0 0 0-2.19 0l-6.11 6.06.79.79-.4.3-1.68-1.69c-.58-.39-1.36-.26-1.78.3a1.32 1.32 0 0 0-.3 1.79l1.68 1.69-.4.4-.79-.79-5.94 6.05c-.59.6-.59 1.57 0 2.17.6.61 1.59.61 2.19 0l6.01-6.05-.79-.79.4-.4.79.79c.13.13.31.2.49.2-.99 1.59-1.09 3.37-.1 4.37.49.5 1.97-.3 3.36-1.59l1.28.3c-.09.31-.01.65.2.89.34.3.85.3 1.18 0a.9.9 0 0 0 0-1.19.93.93 0 0 0-.89-.2l-.4-1.09c1.18-1.39 2.07-2.78 1.58-3.37-.99-.99-2.86-.89-4.35.2a.8.8 0 0 0-.2-.5l-.79-.79.4-.4.79.79 5.94-6.06c.59-.61.59-1.58 0-2.18Z"></path>
  </svg>
);
