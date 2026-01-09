/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconStarNorthern: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-star-northern pressed' : 'icon-star-northern'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21.75 12c0 .41-.34.75-.75.75h-7.19l5.08 5.08c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-5.08-5.08V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7.19l-5.08 5.08c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.08-5.08H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.19L5.11 6.17c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l5.08 5.08V3c0-.41.34-.75.75-.75s.75.34.75.75v7.19l5.08-5.08c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.08 5.08H21c.41 0 .75.34.75.75"></path>
  </svg>
);
