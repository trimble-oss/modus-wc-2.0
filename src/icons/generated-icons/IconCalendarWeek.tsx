/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCalendarWeek: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-calendar-week pressed' : 'icon-calendar-week'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20 3h-2c0-.55-.45-1-1-1s-1 .45-1 1H8c0-.55-.45-1-1-1s-1 .45-1 1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 14H6v-3h3zm4.5 0h-3v-3h3zm4.5 0h-3v-3h3zm2-6.71c0 .39-.32.71-.71.71H4.71C4.32 8 4 7.68 4 7.29V5.7c0-.39.32-.71.71-.71H6V6c0 .55.45 1 1 1s1-.45 1-1V5l8-.01V6c0 .55.45 1 1 1s1-.45 1-1V5l1.29-.01c.39 0 .71.32.71.71z"></path>
  </svg>
);
