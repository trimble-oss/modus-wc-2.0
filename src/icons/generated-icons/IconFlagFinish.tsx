/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFlagFinish: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-flag-finish pressed' : 'icon-flag-finish'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20 4h-5l-.93-1.52a1 1 0 0 0-.85-.48H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1v-7h9l.72 1.45a1 1 0 0 0 .89.55h4.38c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1ZM8.97 6H7v2h1.97v2H7v2H5v-2h2V8H5V6h2V4h1.97zm1.97 6H9v-2h1.94zm0-4H9V6h1.94zm6 6h-.7l-.45-.89-.55-1.11h1.7zM19 12h-2.06v-2h-2v2h-2v-2h2V8h2v2H19zm0-4h-2.06V6h-2v2h-2v2h-1.97V8h1.97V6h-1.97V4h1.69l.29.48V6H19z"></path>
  </svg>
);
