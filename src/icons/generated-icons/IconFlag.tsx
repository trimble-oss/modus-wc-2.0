/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFlag: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-flag pressed' : 'icon-flag'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m15 4-.93-1.52a1 1 0 0 0-.85-.48H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1v-7h9l.72 1.45a1 1 0 0 0 .89.55h4.38c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-5Z"></path>
  </svg>
);
