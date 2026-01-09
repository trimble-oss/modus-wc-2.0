/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCheckHeavy: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-check-heavy pressed' : 'icon-check-heavy'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M9 19c-.51 0-1.02-.2-1.41-.59l-3.5-3.5c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l2.09 2.09 8.09-8.09c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83l-9.5 9.5c-.39.39-.9.59-1.41.59Z"></path>
  </svg>
);
