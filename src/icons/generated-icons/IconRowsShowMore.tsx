/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconRowsShowMore: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-rows-show-more pressed' : 'icon-rows-show-more'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16.5 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m2.5 5.75h-1.75v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V14.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75H19c.41 0 .75.34.75.75s-.34.75-.75.75M16 7H7c-.28 0-.5.22-.5.5s.22.5.5.5h9c.28 0 .5-.22.5-.5S16.28 7 16 7m-7.5 7h-4V4h14v5c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1h-16c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1m7.5-4H7c-.28 0-.5.22-.5.5s.22.5.5.5h9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5"></path>
  </svg>
);
