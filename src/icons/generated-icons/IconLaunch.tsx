/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconLaunch: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-launch pressed' : 'icon-launch'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19.78 19.78H4.22V4.22h6.67c.61 0 1.11-.5 1.11-1.11S11.5 2 10.89 2H3c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-7.89c0-.61-.5-1.11-1.11-1.11s-1.11.5-1.11 1.11zM14.22 3.11c0 .61.5 1.11 1.11 1.11h2.88L8.07 14.36c-.43.43-.43 1.13 0 1.57.43.43 1.13.43 1.57 0L19.78 5.79v2.88c0 .61.5 1.11 1.11 1.11S22 9.28 22 8.67V3c0-.55-.45-1-1-1h-5.67c-.61 0-1.11.5-1.11 1.11"></path>
  </svg>
);
