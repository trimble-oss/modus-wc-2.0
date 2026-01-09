/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconItemEndsWith: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-item-ends-with pressed' : 'icon-item-ends-with'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 7.93h-6.15c-.55 0-1 .45-1 1V11H3c-.55 0-1 .45-1 1s.45 1 1 1h10.85v2.07c0 .55.45 1 1 1H21c.55 0 1-.45 1-1V8.92c0-.55-.45-1-1-1Z"></path>
  </svg>
);
