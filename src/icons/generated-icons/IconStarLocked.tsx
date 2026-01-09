/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconStarLocked: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-star-locked pressed' : 'icon-star-locked'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m21.45 9.31-6.42-.54-2.51-5.92a.572.572 0 0 0-1.05 0L8.96 8.77l-6.42.54c-.5.04-.7.67-.32.99l4.87 4.22-1.46 6.27c-.11.49.42.87.85.62l5.02-3.03v-1.43a2.5 2.5 0 0 1 1.53-2.3c.22-1.9 1.71-3.45 3.56-3.64.14-.01.27-.02.41-.02 1.05 0 2.01.41 2.73 1.08l2.04-1.77c.38-.33.18-.95-.32-.99M20 15.96h-.5V15a2.5 2.5 0 0 0-2.76-2.49c-1.3.13-2.24 1.32-2.24 2.63v.82H14c-.55 0-1 .45-1 1v4.54c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-4.54c0-.55-.45-1-1-1M17.01 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.49-4.04h-3V15c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path>
  </svg>
);
