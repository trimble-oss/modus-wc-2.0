/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconArrowRightCircle: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-arrow-right-circle pressed'
        : 'icon-arrow-right-circle'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-10.13 5a.996.996 0 0 1 0-1.41L14.46 13H7.01c-.55 0-1-.45-1-1s.45-1 1-1h7.45l-2.59-2.59A.996.996 0 1 1 13.28 7l4.29 4.29c.39.39.39 1.02 0 1.41l-4.29 4.29a.996.996 0 0 1-1.41 0Z"></path>
  </svg>
);
