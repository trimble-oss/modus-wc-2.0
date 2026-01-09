/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconDragCorner: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-drag-corner pressed' : 'icon-drag-corner'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21.71 11.29a.996.996 0 0 0-1.41 0l-9 9a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l9-9a.996.996 0 0 0 0-1.41Zm-.9 4.91-4.6 4.6a.696.696 0 0 0 .49 1.19h4.6c.39 0 .7-.31.7-.7v-4.6c0-.62-.75-.93-1.19-.49"></path>
  </svg>
);
