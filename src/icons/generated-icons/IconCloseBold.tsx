/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCloseBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-close-bold pressed' : 'icon-close-bold'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m14.15 12.03 4.44-4.44c.59-.59.59-1.54 0-2.12a1.49 1.49 0 0 0-2.12 0l-4.44 4.44-4.47-4.47a1.49 1.49 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l4.47 4.47-4.44 4.44a1.49 1.49 0 0 0 0 2.12c.29.29.68.44 1.06.44s.77-.15 1.06-.44l4.44-4.44 4.41 4.41c.29.29.68.44 1.06.44s.77-.15 1.06-.44c.59-.59.59-1.54 0-2.12z"></path>
  </svg>
);
