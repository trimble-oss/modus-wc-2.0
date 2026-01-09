/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSortArrowDown: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-sort-arrow-down pressed' : 'icon-sort-arrow-down'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16.3 14.82a1 1 0 0 0-1.41-.11l-1.88 1.88H13V5c0-.55-.45-1-1-1s-1 .45-1 1v11.59l-1.88-1.88a1 1 0 0 0-1.41 1.41l3.59 3.59c.39.39 1.02.39 1.41 0l3.59-3.59a1 1 0 0 0 0-1.3"></path>
  </svg>
);
