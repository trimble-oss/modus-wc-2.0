/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconRowInsertAfter: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-row-insert-after pressed' : 'icon-row-insert-after'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M15.25 15.5c0 .41-.34.75-.75.75h-1.75V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V13c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.75c.41 0 .75.34.75.75M21 6v12c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1h1v-6H5v6h1c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1M5 10h6.5V7H5zm14-3h-6.5v3H19z"></path>
  </svg>
);
