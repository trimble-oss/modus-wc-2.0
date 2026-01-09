/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconScissors: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-scissors pressed' : 'icon-scissors'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19.97 5.86c.51-.51.51-1.35 0-1.86-.52-.52-1.36-.52-1.87 0-1.92 1.95-5.14 5.25-5.15 5.26l1.81 1.81zm.02 12.25L9.91 8.03c.24-.51.36-1.08.32-1.7-.1-1.64-1.35-3.07-2.96-3.35-2.5-.43-4.64 1.7-4.21 4.2.28 1.62 1.71 2.87 3.35 2.97.62.04 1.19-.08 1.7-.32l2.13 2.13-2.13 2.13c-.51-.24-1.08-.36-1.7-.32-1.64.1-3.07 1.35-3.35 2.97a3.618 3.618 0 0 0 4.21 4.2c1.62-.28 2.87-1.71 2.96-3.35.04-.61-.08-1.18-.32-1.7l2.13-2.13 6.14 6.14a1.28 1.28 0 1 0 1.81-1.81ZM6.62 8.36c-.99 0-1.81-.8-1.81-1.81s.81-1.81 1.81-1.81 1.81.8 1.81 1.81-.81 1.81-1.81 1.81m0 10.85c-.99 0-1.81-.8-1.81-1.81s.81-1.81 1.81-1.81 1.81.8 1.81 1.81-.81 1.81-1.81 1.81M12 12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5"></path>
  </svg>
);
