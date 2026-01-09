/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconDragVertical: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-drag-vertical pressed' : 'icon-drag-vertical'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M13 9V7h1.96c.42 0 .65-.48.39-.81l-2.96-3.7a.5.5 0 0 0-.78 0l-2.96 3.7c-.26.33-.03.81.39.81H11v2H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-8 6h6v2H9.04c-.42 0-.65.48-.39.81l2.96 3.7c.2.25.58.25.78 0l2.96-3.7c.26-.33.03-.81-.39-.81H13v-2h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1"></path>
  </svg>
);
