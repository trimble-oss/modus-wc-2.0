/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconExpandMoreBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-expand-more-bold pressed' : 'icon-expand-more-bold'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M17.65 8.93c-.59-.58-1.54-.57-2.12 0L12 12.46 8.47 8.93c-.56-.57-1.55-.57-2.12 0-.58.58-.58 1.53 0 2.12l4.59 4.59c.29.29.68.44 1.06.44s.77-.15 1.06-.44l4.59-4.59a1.5 1.5 0 0 0 0-2.12"></path>
  </svg>
);
