/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSortDown: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-sort-down pressed' : 'icon-sort-down'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M7 17V3c0-.55-.45-1-1-1s-1 .45-1 1v14H3.04c-.42 0-.65.48-.39.81l2.96 3.7c.2.25.58.25.78 0l2.96-3.7c.26-.33.03-.81-.39-.81zm6-4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1m-1-9.04c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1M13 9h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1m0 8h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1"></path>
  </svg>
);
