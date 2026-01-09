/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconItemContains: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-item-contains pressed' : 'icon-item-contains'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 11h-5V9c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h5v2c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2h5c.55 0 1-.45 1-1s-.45-1-1-1"></path>
  </svg>
);
