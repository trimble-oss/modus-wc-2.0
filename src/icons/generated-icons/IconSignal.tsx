/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSignal: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-signal pressed' : 'icon-signal'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 7c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V9c0-1.1-.9-2-2-2m6-4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2M6 11c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2"></path>
  </svg>
);
