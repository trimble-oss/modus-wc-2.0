/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconMoveLastDown: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-move-last-down pressed' : 'icon-move-last-down'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M11.4 12.74 7.18 8.16C6.75 7.7 7.12 7 7.78 7h8.44c.66 0 1.03.7.6 1.16l-4.22 4.58c-.31.34-.89.34-1.2 0M17 16c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1"></path>
  </svg>
);
