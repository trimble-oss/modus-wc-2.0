/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTextInput: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-text-input pressed' : 'icon-text-input'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M7 18h1v1H5v-1h1V6H5V5h3v1H7zm-2-3H4V9h1V7H3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2zm3-8v2h12v6H8v2h13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1z"></path>
  </svg>
);
