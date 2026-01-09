/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSortAlphaDown: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-sort-alpha-down pressed' : 'icon-sort-alpha-down'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M7 17V3c0-.55-.45-1-1-1s-1 .45-1 1v14H3.04c-.42 0-.65.48-.39.81l2.96 3.7c.2.25.58.25.78 0l2.96-3.7c.26-.33.03-.81-.39-.81zm12.5-8.2h-3.1l-.6 1.8H14L17.2 2h1.6l3.2 8.5h-1.9zm-2.6-1.4H19l-1-3.2zm0 13.2h4.3V22h-6.5v-1l4.2-6.1h-4.2v-1.4h6.4v1z"></path>
  </svg>
);
