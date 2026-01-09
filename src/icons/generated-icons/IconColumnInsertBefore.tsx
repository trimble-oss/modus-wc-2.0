/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconColumnInsertBefore: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-column-insert-before pressed'
        : 'icon-column-insert-before'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M9.75 9.5v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75H9.75v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V9.5c0-.41.34-.75.75-.75s.75.34.75.75M21 6v12c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v1h9V7H5v1c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1m-6 5.5h4V7h-4zm4 5.5v-4.5h-4V17z"></path>
  </svg>
);
