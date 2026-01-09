/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconAlarmOn: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-alarm-on pressed' : 'icon-alarm-on'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m14.805 10.08-4.11 4.11-1.54-1.54a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.07 2.07c.15.15.34.22.53.22s.38-.07.53-.22l4.64-4.64c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0m-7.69-5.11a.997.997 0 0 0-1.41-1.41l-2.83 2.83a.997.997 0 0 0 1.41 1.41zm4.86-.22c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m9.22-12.37-2.83-2.83a.998.998 0 0 0-1.41 1.41l2.83 2.83a.997.997 0 0 0 1.41-1.41"></path>
  </svg>
);
