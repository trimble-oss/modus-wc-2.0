/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSortUp: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-sort-up pressed' : 'icon-sort-up'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M5.03 7v14c0 .55.45 1 1 1s1-.45 1-1V7h1.96c.42 0 .65-.48.39-.81l-2.96-3.7a.5.5 0 0 0-.78 0l-2.96 3.7c-.26.33-.03.81.39.81zm8-.04h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1m-1 9.04c0-.55.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1m1-5.04h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1m0-8h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1"></path>
  </svg>
);
