/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconClockLocked: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-clock-locked pressed' : 'icon-clock-locked'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M14.96 13.56C15.69 12.05 17.22 11 19 11c.19 0 .39.01.59.04.92.12 1.74.54 2.4 1.14v-.17c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10c.34 0 .67-.02 1-.05v-4.58c0-.74.28-1.42.74-1.93L11.2 12.9c-.3-.3-.4-.6-.4-1v-5c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v4.7zm7.29 2.9h-.75v-.84c0-1.27-.9-2.43-2.16-2.6-.11-.01-.23-.02-.34-.02a2.5 2.5 0 0 0-2.5 2.5v.96h-.59c-.5 0-.91.41-.91.91v4.88c0 .41.34.75.75.75h6.5c.41 0 .75-.34.75-.75v-5.04c0-.41-.34-.75-.75-.75m-3.24 4.04c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.49-4.04h-3v-.88c0-.74.5-1.43 1.22-1.56.09-.02.19-.02.28-.02.83 0 1.5.67 1.5 1.5z"></path>
  </svg>
);
