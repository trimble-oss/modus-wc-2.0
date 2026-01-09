/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconChevronRightBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-chevron-right-bold pressed'
        : 'icon-chevron-right-bold'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m15.64 10.94-4.59-4.59c-.58-.58-1.53-.58-2.12 0a1.5 1.5 0 0 0 0 2.12L12.46 12l-3.53 3.53a1.5 1.5 0 0 0 0 2.12c.28.28.68.44 1.06.44s.77-.15 1.06-.44l4.59-4.59c.58-.58.58-1.53 0-2.12"></path>
  </svg>
);
