/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSignIn: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-sign-in pressed' : 'icon-sign-in'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M8 18.17H5.25v-2.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3c0 .41.34.75.75.75H8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-3.5-9.5c.41 0 .75-.34.75-.75V5.67H8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4.5c-.41 0-.75.34-.75.75v3c0 .41.34.75.75.75m4.34.1c-.32-.31-.85-.09-.85.35v1.78H3c-.55 0-1 .45-1 1s.45 1 1 1h4.99v1.8c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71L8.84 8.76Zm12.53-3.9-5.95-2.38a1 1 0 0 0-1.37.93v17.15c0 .74.77 1.22 1.44.9l5.95-2.89c.34-.17.56-.52.56-.9V5.81a1 1 0 0 0-.63-.93Z"></path>
  </svg>
);
