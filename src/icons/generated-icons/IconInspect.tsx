/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconInspect: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-inspect pressed' : 'icon-inspect'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M11.29 2.02C6 2.39 2 7.01 2 12.31V20c0 1.1.9 2 2 2h7.69c5.3 0 9.92-4 10.28-9.29.42-6.08-4.6-11.11-10.69-10.69Zm.64 4.31c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M15 17.86H8.94c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1.99v-6.23h-.79c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.79v7.23H15c.28 0 .5.22.5.5s-.22.5-.5.5"></path>
  </svg>
);
