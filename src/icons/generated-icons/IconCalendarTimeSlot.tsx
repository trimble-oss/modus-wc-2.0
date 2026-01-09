/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCalendarTimeSlot: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-calendar-time-slot pressed'
        : 'icon-calendar-time-slot'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20.98 3H18c0-.55-.45-1-1-1s-1 .45-1 1H8c0-.55-.45-1-1-1s-1 .45-1 1H3.03C2.46 3 2 3.46 2 4.03v16.95c0 .57.46 1.03 1.03 1.03h17.95c.57 0 1.03-.46 1.03-1.03V4.03c0-.57-.46-1.03-1.03-1.03M12 19c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m8-11.71c0 .39-.32.71-.71.71H4.71C4.32 8 4 7.68 4 7.29V5.7c0-.39.32-.71.71-.71H6v1c0 .55.45 1 1 1s1-.45 1-1v-1h8v1c0 .55.45 1 1 1s1-.45 1-1v-1h1.29c.39 0 .71.32.71.71zm-6.84 9.21q-.18 0-.33-.12l-1.33-1.15V13c0-.28.22-.5.5-.5s.5.22.5.5v1.77l.98.85c.21.18.23.5.05.71-.1.11-.24.17-.38.17Z"></path>
  </svg>
);
