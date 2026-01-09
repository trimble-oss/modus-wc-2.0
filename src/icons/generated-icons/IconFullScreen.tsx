/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFullScreen: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-full-screen pressed' : 'icon-full-screen'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M4 3h4c.55 0 1 .45 1 1s-.45 1-1 1H5v3c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1m11 1c0 .55.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1M4 15c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H5v-3c0-.55-.45-1-1-1m15 1v3h-3c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1"></path>
  </svg>
);
