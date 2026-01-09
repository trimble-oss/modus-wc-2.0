/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconStar: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-star pressed' : 'icon-star'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m12 18.09 5.52 3.33c.43.26.96-.13.85-.62l-1.46-6.27 4.87-4.22c.38-.33.18-.95-.32-1l-6.42-.54-2.51-5.92a.572.572 0 0 0-1.05 0L8.97 8.77l-6.42.54c-.5.04-.7.67-.32 1l4.87 4.22-1.46 6.27c-.11.49.42.87.85.62l5.52-3.33Z"></path>
  </svg>
);
