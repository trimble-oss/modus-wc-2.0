/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTextInputShort: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-text-input-short pressed' : 'icon-text-input-short'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M5 14v-1h4v1zm6-8h1V5H9v1h1v12H9v1h3v-1h-1zm-2 9H4V9h5V7H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5zm3-8v2h8v6h-8v2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"></path>
  </svg>
);
