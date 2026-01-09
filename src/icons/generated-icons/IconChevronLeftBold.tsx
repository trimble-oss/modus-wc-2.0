/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconChevronLeftBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-chevron-left-bold pressed'
        : 'icon-chevron-left-bold'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M15.06 15.54 11.53 12l3.53-3.53c.58-.58.58-1.53 0-2.12-.58-.58-1.53-.58-2.12 0l-4.59 4.59a1.5 1.5 0 0 0 0 2.12l4.59 4.59c.29.29.68.44 1.06.44s.77-.15 1.06-.44a1.5 1.5 0 0 0 0-2.12Z"></path>
  </svg>
);
