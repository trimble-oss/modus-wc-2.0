/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconAlarmAdd: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-alarm-add pressed' : 'icon-alarm-add'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M15.25 12.17h-2.5v-2.5a.749.749 0 1 0-1.5 0v2.5h-2.5a.749.749 0 1 0 0 1.5h2.5v2.5c0 .41.34.75.75.75s.75-.34.75-.75v-2.5h2.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-3.31-7.43c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6M7.08 4.96a.996.996 0 1 0-1.41-1.41L2.84 6.38a.996.996 0 1 0 1.41 1.41zm14.08 1.41-2.83-2.83a.996.996 0 1 0-1.41 1.41l2.83 2.83a.996.996 0 1 0 1.41-1.41"></path>
  </svg>
);
