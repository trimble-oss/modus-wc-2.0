/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconBarGraphLine: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-bar-graph-line pressed' : 'icon-bar-graph-line'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M6 19c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 1.1.9 2 2 2m10-9v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2m-4 9c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2"></path>
    <rect width="20" height="2" x="2" y="20" rx="1" ry="1"></rect>
  </svg>
);
