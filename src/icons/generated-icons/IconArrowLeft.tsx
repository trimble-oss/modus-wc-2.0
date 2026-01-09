/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconArrowLeft: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-arrow-left pressed' : 'icon-arrow-left'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20 10v4c0 .55-.45 1-1 1h-7v3.79c0 .45-.54.67-.85.35L4.71 12.7a.996.996 0 0 1 0-1.41l6.44-6.44a.5.5 0 0 1 .85.35v3.79h7c.55 0 1 .45 1 1Z"></path>
  </svg>
);
