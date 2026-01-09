/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCopyContent: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-copy-content pressed' : 'icon-copy-content'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M15 2H5c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4h10c.55 0 1-.45 1-1s-.45-1-1-1M7 8v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2"></path>
  </svg>
);
