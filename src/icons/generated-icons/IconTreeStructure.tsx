/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTreeStructure: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-tree-structure pressed' : 'icon-tree-structure'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 9c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1h7c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1H6v-4h6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1H6V9z"></path>
  </svg>
);
