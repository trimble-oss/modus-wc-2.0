/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconColumnInsertAfter: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-column-insert-after pressed'
        : 'icon-column-insert-after'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M14.25 14.5v-1.75H12.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V9.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75M19 8V7h-9v10h9v-1c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1M9 12.5H5V17h4zM9 7H5v4.5h4z"></path>
  </svg>
);
