/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconExport: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-export pressed' : 'icon-export'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m14.92 16.79-1.88 1.88h-.01V13c0-.55-.45-1-1-1s-1 .45-1 1v5.67l-1.88-1.88a1 1 0 0 0-1.41 1.41l3.59 3.59c.39.39 1.02.39 1.41 0l3.59-3.59a1 1 0 0 0-1.41-1.41m4.79-9.09L14.3 2.29a1 1 0 0 0-.71-.29H6c-1.1 0-2 .9-2 2v11c0 .55.45 1 1 1s1-.45 1-1V4h6v5c0 .55.45 1 1 1h5v5c0 .55.45 1 1 1s1-.45 1-1V8.41c0-.27-.11-.52-.29-.71"></path>
  </svg>
);
