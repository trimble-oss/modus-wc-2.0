/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconLock: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-lock pressed' : 'icon-lock'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16.96 8.92V7.21c0-2.61-1.91-4.94-4.51-5.19A5.003 5.003 0 0 0 6.96 7v1.92h-1c-1.1 0-2 .9-2 2v9.07c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9.07c0-1.1-.9-2-2-2zM11.97 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m2.98-8.08h-6v-1.8c0-1.45.98-2.78 2.4-3.06 1.92-.37 3.6 1.09 3.6 2.94z"></path>
  </svg>
);
