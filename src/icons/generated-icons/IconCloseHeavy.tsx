/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCloseHeavy: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-close-heavy pressed' : 'icon-close-heavy'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m14.83 12 3.59-3.59c.78-.78.78-2.05 0-2.83s-2.05-.78-2.83 0L12 9.17 8.41 5.58c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83L9.17 12l-3.59 3.59a2.004 2.004 0 0 0 1.41 3.42c.51 0 1.02-.2 1.41-.59l3.59-3.59 3.59 3.59c.39.39.9.59 1.41.59s1.02-.2 1.41-.59c.78-.78.78-2.05 0-2.83L14.81 12Z"></path>
  </svg>
);
