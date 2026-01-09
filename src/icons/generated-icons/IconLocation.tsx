/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconLocation: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-location pressed' : 'icon-location'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 11h-1.07A8 8 0 0 0 13 4.07V3c0-.55-.45-1-1-1s-1 .45-1 1v1.07A8 8 0 0 0 4.07 11H3c-.55 0-1 .45-1 1s.45 1 1 1h1.07A8 8 0 0 0 11 19.93V21c0 .55.45 1 1 1s1-.45 1-1v-1.07A8 8 0 0 0 19.93 13H21c.55 0 1-.45 1-1s-.45-1-1-1m-8 6.91V17c0-.55-.45-1-1-1s-1 .45-1 1v.91A6.015 6.015 0 0 1 6.09 13H7c.55 0 1-.45 1-1s-.45-1-1-1h-.91c.43-2.51 2.4-4.48 4.91-4.91V7c0 .55.45 1 1 1s1-.45 1-1v-.91c2.51.43 4.48 2.4 4.91 4.91H17c-.55 0-1 .45-1 1s.45 1 1 1h.91A6.015 6.015 0 0 1 13 17.91"></path>
  </svg>
);
