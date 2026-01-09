/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconArrowUp: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-arrow-up pressed' : 'icon-arrow-up'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M14 20h-4c-.55 0-1-.45-1-1v-7H5.21c-.45 0-.67-.54-.35-.85l6.44-6.44a.996.996 0 0 1 1.41 0l6.44 6.44a.5.5 0 0 1-.35.85h-3.79v7c0 .55-.45 1-1 1Z"></path>
  </svg>
);
