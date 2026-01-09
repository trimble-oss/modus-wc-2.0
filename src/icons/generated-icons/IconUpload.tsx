/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconUpload: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-upload pressed' : 'icon-upload'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19 13v6H5v-6c0-.55-.45-1-1-1s-1 .45-1 1v7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1s-1 .45-1 1m-8-6.17L9.12 8.71A.996.996 0 1 1 7.71 7.3l3.59-3.59a.996.996 0 0 1 1.41 0L16.3 7.3a.996.996 0 1 1-1.41 1.41l-1.88-1.88v8.67c0 .55-.45 1-1 1s-1-.45-1-1V6.83Z"></path>
  </svg>
);
