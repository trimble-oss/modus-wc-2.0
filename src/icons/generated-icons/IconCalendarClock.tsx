/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCalendarClock: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-calendar-clock pressed' : 'icon-calendar-clock'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M18.25 23c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75S23 15.63 23 18.25 20.87 23 18.25 23m0-8C16.46 15 15 16.46 15 18.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25S20.04 15 18.25 15M12 18.25C12 14.8 14.8 12 18.25 12c1.41 0 2.71.48 3.76 1.27V4.03c0-.57-.46-1.03-1.03-1.03H18c0-.55-.45-1-1-1s-1 .45-1 1H8c0-.55-.45-1-1-1s-1 .45-1 1H3.03C2.46 3 2 3.46 2 4.03v16.95c0 .57.46 1.03 1.03 1.03h10.24A6.24 6.24 0 0 1 12 18.25M4 7.29V5.7c0-.39.32-.71.71-.71H6v1c0 .55.45 1 1 1s1-.45 1-1v-1h8v1c0 .55.45 1 1 1s1-.45 1-1v-1h1.29c.39 0 .71.32.71.71v1.59c0 .39-.32.71-.71.71H4.71C4.32 8 4 7.68 4 7.29M20.1 20.1c.2-.2.2-.51 0-.71l-1.35-1.35V15.8c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.65l1.65 1.65a.485.485 0 0 0 .7 0"></path>
  </svg>
);
