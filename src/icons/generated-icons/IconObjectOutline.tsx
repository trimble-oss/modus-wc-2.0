/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconObjectOutline: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-object-outline pressed' : 'icon-object-outline'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m16.63 8.17-1.21-2.1H13v-2h3.58l1.79 3.1-1.73 1Zm-8.06-2.1h2.42v-2H7.41l-1.79 3.1 1.73 1 1.21-2.1ZM6.36 14.1 5.15 12l1.21-2.1-1.73-1L2.84 12l1.79 3.1zm4.63 3.83H8.57l-1.21-2.1-1.73 1 1.79 3.1H11v-2Zm7.37-1.1-1.73-1-1.21 2.1H13v2h3.58l1.79-3.1ZM21.15 12l-1.79-3.1-1.73 1 1.21 2.1-1.21 2.1 1.73 1z"></path>
  </svg>
);
