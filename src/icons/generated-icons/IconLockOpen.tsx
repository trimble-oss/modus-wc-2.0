/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconLockOpen: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-lock-open pressed' : 'icon-lock-open'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M23.89 5.65a4.99 4.99 0 0 0-5.32-3.62c-2.59.26-4.49 2.59-4.49 5.19v1.71H6c-1.1 0-2 .9-2 2V20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9.07c0-1.1-.9-2-2-2h-1.92V7.12c0-1.44.97-2.77 2.38-3.05 1.53-.32 3.05.59 3.49 2.09.13.45.51.77.97.77.67 0 1.15-.64.97-1.28M12.02 17.01c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"></path>
  </svg>
);
