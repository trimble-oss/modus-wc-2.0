/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSortArrowUp: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-sort-arrow-up pressed' : 'icon-sort-arrow-up'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16.29 7.88 12.7 4.29a.996.996 0 0 0-1.41 0L7.7 7.88a1 1 0 0 0 1.41 1.41l1.88-1.88H11V19c0 .55.45 1 1 1s1-.45 1-1V7.41l1.88 1.88a1 1 0 0 0 1.41-1.41"></path>
  </svg>
);
