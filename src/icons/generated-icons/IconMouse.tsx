/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconMouse: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-mouse pressed' : 'icon-mouse'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9v6c0 3.87 3.13 7 7 7s7-3.13 7-7V9c0-3.87-3.13-7-7-7M7 12V9c0-2.59 1.98-4.69 4.5-4.95v1.04c-.58.21-1 .76-1 1.41v2c0 .65.42 1.2 1 1.41V12zm10 0h-4.5V9.91c.58-.21 1-.76 1-1.41v-2c0-.65-.42-1.2-1-1.41V4.05C15.02 4.31 17 6.41 17 9z"></path>
  </svg>
);
