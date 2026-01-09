/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCancelSquare: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-cancel-square pressed' : 'icon-cancel-square'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19 2H5C3.35 2 2 3.35 2 5v14c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3V5c0-1.65-1.35-3-3-3m-2.29 13.29a.996.996 0 0 1-.71 1.7c-.26 0-.51-.1-.71-.29l-3.32-3.32-3.32 3.32c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l3.32-3.32-3.32-3.32a.996.996 0 1 1 1.41-1.41l3.32 3.32 3.32-3.32a.996.996 0 1 1 1.41 1.41l-3.32 3.32 3.32 3.32Z"></path>
  </svg>
);
