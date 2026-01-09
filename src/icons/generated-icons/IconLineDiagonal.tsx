/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconLineDiagonal: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-line-diagonal pressed' : 'icon-line-diagonal'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M2.81 22.19c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L20.49 2.1a.996.996 0 1 1 1.41 1.41L3.51 21.9c-.2.2-.45.29-.71.29Z"></path>
  </svg>
);
