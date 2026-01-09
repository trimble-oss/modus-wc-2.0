/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconEraser: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-eraser pressed' : 'icon-eraser'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m19.6 8.11-4.24-4.24c-.68-.68-1.79-.68-2.48 0L4.4 12.35a1.75 1.75 0 0 0 0 2.47l2.83 2.83c.71.71 1.65 1.1 2.65 1.1s1.94-.39 2.65-1.1l7.07-7.07c.68-.68.68-1.79 0-2.47m-8.13 8.48c-.85.85-2.33.85-3.18 0l-2.83-2.83c-.1-.1-.1-.26 0-.35L11 7.87l4.6 4.6-4.12 4.12ZM20 18c0 .41-.34.75-.75.75h-6.49c.16-.13.33-.24.48-.39l1.11-1.11h4.9c.41 0 .75.34.75.75"></path>
  </svg>
);
