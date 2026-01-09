/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCaretUpBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-caret-up-bold pressed' : 'icon-caret-up-bold'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m17.19 13.5-4.22-4.58c-.49-.53-1.45-.53-1.94 0L6.81 13.5c-.32.35-.4.83-.22 1.25.2.45.67.75 1.19.75h8.43c.52 0 .99-.29 1.19-.75.19-.42.1-.91-.22-1.25Z"></path>
  </svg>
);
