/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFrame: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-frame pressed' : 'icon-frame'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M6 14H4v4c0 1.1.9 2 2 2h4v-2H6zm-2-4h2V6h4V4H6c-1.1 0-2 .9-2 2zm14 8h-4v2h4c1.1 0 2-.9 2-2v-4h-2zM14 4v2h4v4h2V6c0-1.1-.9-2-2-2z"></path>
  </svg>
);
