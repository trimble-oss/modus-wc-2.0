/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSearch: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-search pressed' : 'icon-search'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m16.38 14.92-.66.05-.41-.41c2.44-2.81 2.28-7.1-.5-9.7S7.8 2.4 5.17 4.94a6.99 6.99 0 0 0-.08 9.98c2.61 2.61 6.77 2.72 9.52.34l.41.41-.05.65 3.89 3.89a.996.996 0 1 0 1.41-1.41l-3.88-3.88Zm-2.81-1.41a5.016 5.016 0 0 1-7.08 0c-1.95-1.95-1.95-5.13 0-7.08s5.13-1.95 7.08 0 1.95 5.13 0 7.08"></path>
  </svg>
);
