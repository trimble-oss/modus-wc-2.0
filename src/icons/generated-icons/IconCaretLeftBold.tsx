/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCaretLeftBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-caret-left-bold pressed' : 'icon-caret-left-bold'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M14.75 6.6c-.43-.19-.91-.11-1.25.22l-4.58 4.22c-.26.24-.42.6-.42.97s.15.73.42.97l4.58 4.21c.22.21.51.32.79.32.16 0 .31-.03.46-.1.45-.2.75-.67.75-1.19V7.79c0-.52-.29-.99-.75-1.19"></path>
  </svg>
);
