/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPulse: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-pulse pressed' : 'icon-pulse'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m14 20.37-2.71-8.13-1.24-4.34-1.81 7.25-2.33-4.66-1.36 2.04c-.09.14-.25.22-.42.22H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.85l2.49-3.74 1.67 3.34L9.95 2.1l2.77 9.69L14 15.62l4-11.99 2.54 7.62h.71c.41 0 .75.34.75.75s-.34.75-.75.75h-1.43c-.22 0-.41-.14-.47-.34L18 8.37z"></path>
  </svg>
);
