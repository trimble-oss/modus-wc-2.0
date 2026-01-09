/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconUnsortedArrows: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-unsorted-arrows pressed' : 'icon-unsorted-arrows'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M11.79 7.88 8.2 4.29a.996.996 0 0 0-1.41 0L3.2 7.88a1 1 0 0 0 1.41 1.41l1.88-1.88h.01V19c0 .55.45 1 1 1s1-.45 1-1V7.41l1.88 1.88a1 1 0 0 0 1.41-1.41m9 6.94a1 1 0 0 0-1.41-.11l-1.88 1.88h-.01V5c0-.55-.45-1-1-1s-1 .45-1 1v11.59l-1.88-1.88a1 1 0 0 0-1.41 1.41l3.59 3.59c.39.39 1.02.39 1.41 0l3.59-3.59a1 1 0 0 0 0-1.3"></path>
  </svg>
);
