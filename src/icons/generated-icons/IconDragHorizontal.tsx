/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconDragHorizontal: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-drag-horizontal pressed' : 'icon-drag-horizontal'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M15 13h2v1.96c0 .42.48.65.81.39l3.7-2.96a.5.5 0 0 0 0-.78l-3.7-2.96a.498.498 0 0 0-.81.39V11h-2V5c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1zM9 5v6H7V9.04c0-.42-.48-.65-.81-.39l-3.7 2.96a.5.5 0 0 0 0 .78l3.7 2.96c.33.26.81.03.81-.39V13h2v6c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1"></path>
  </svg>
);
