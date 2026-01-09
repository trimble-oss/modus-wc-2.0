/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconExpandLessBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-expand-less-bold pressed' : 'icon-expand-less-bold'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m17.64 12.95-4.59-4.58c-.28-.28-.65-.44-1.05-.44h-.01c-.4 0-.78.16-1.06.44l-4.59 4.59c-.58.58-.58 1.53 0 2.12.29.29.68.44 1.06.44s.77-.15 1.06-.44L12 11.55l3.53 3.53c.58.58 1.53.58 2.12 0s.58-1.53 0-2.12Z"></path>
  </svg>
);
