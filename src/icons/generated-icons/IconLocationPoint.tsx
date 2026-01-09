/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconLocationPoint: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-location-point pressed' : 'icon-location-point'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 11h-1.07A8 8 0 0 0 13 4.07V3c0-.55-.45-1-1-1s-1 .45-1 1v1.07A8 8 0 0 0 4.07 11H3c-.55 0-1 .45-1 1s.45 1 1 1h1.07A8 8 0 0 0 11 19.93V21c0 .55.45 1 1 1s1-.45 1-1v-1.07A8 8 0 0 0 19.93 13H21c.55 0 1-.45 1-1s-.45-1-1-1m-9 7c-3.74 0-6.67-3.41-5.87-7.29.47-2.27 2.31-4.1 4.57-4.57a6.005 6.005 0 1 1 1.29 11.87Zm3-6c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3"></path>
  </svg>
);
