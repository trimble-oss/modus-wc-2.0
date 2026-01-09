/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconItemBeginsWith: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-item-begins-with pressed' : 'icon-item-begins-with'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 11H10.15V8.93c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v6.15c0 .55.45 1 1 1h6.15c.55 0 1-.45 1-1v-2.07H21c.55 0 1-.45 1-1s-.45-1-1-1Z"></path>
  </svg>
);
