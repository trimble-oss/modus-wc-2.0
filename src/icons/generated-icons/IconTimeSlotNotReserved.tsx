/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTimeSlotNotReserved: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-time-slot-not-reserved pressed'
        : 'icon-time-slot-not-reserved'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 5.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m2.53 9.03c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.22-2.22V8c0-.41.34-.75.75-.75s.75.34.75.75v3.69l1.78 1.78c.29.29.29.77 0 1.06m6.21 1.27-1.38-.6c.29-.72.52-1.47.61-2.25l1.49.18c-.1.92-.37 1.82-.72 2.67m.73-4.91-1.49.17c-.09-.78-.31-1.53-.6-2.25l1.38-.6c.35.86.61 1.75.71 2.68m-1.82-4.58-1.2.9a7.6 7.6 0 0 0-1.65-1.65l.9-1.2c.75.55 1.41 1.21 1.95 1.96Zm-3.84-3.06-.6 1.38c-.72-.29-1.47-.52-2.25-.61l.18-1.49c.92.1 1.82.37 2.67.72"></path>
  </svg>
);
