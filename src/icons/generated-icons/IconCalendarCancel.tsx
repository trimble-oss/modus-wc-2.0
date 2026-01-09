/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCalendarCancel: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-calendar-cancel pressed' : 'icon-calendar-cancel'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20.98 3H18c0-.55-.45-1-1-1s-1 .45-1 1H8c0-.55-.45-1-1-1s-1 .45-1 1H3.03C2.46 3 2 3.46 2 4.03v16.95c0 .57.46 1.03 1.03 1.03h17.95c.57 0 1.03-.46 1.03-1.03V4.03c0-.57-.46-1.03-1.03-1.03m-5.97 13.94c.29.29.29.77 0 1.06s-.77.29-1.06 0l-1.94-1.94L10.07 18c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06L10.95 15l-1.94-1.94a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.94 1.94L13.95 12c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.07 15zM20 7.29c0 .39-.32.71-.71.71H4.71C4.32 8 4 7.68 4 7.29V5.7c0-.39.32-.71.71-.71H6v1c0 .55.45 1 1 1s1-.45 1-1v-1h8v1c0 .55.45 1 1 1s1-.45 1-1v-1h1.29c.39 0 .71.32.71.71z"></path>
  </svg>
);
