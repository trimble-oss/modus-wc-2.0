/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconGavel: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-gavel pressed' : 'icon-gavel'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M13 22H4c-.55 0-1-.45-1-1s.45-1 1-1h9c.55 0 1 .45 1 1s-.45 1-1 1M6.48 9.01l-2.12 2.12c-.2.2-.2.51 0 .71l3.54 3.54c.2.2.51.2.71 0l2.12-2.12-4.24-4.24Zm7.78.71 2.12-2.12c.2-.2.2-.51 0-.71l-3.54-3.54c-.2-.2-.51-.2-.71 0l-2.12 2.12 4.24 4.24Zm-.71.71L9.31 6.19 7.19 8.31l4.24 4.24 7.17 7.17c.39.39 1.02.39 1.41 0l.71-.71a.996.996 0 0 0 0-1.41z"></path>
  </svg>
);
