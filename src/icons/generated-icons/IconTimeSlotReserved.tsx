/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTimeSlotReserved: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-time-slot-reserved pressed'
        : 'icon-time-slot-reserved'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M18.39 19.09c-.19 0-.38-.07-.53-.22a.745.745 0 0 1 0-1.06 8.2 8.2 0 0 0 2.4-5.81c0-4.55-3.7-8.25-8.25-8.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c5.38 0 9.75 4.37 9.75 9.75 0 2.59-1.01 5.03-2.83 6.87-.15.15-.34.22-.53.22ZM18.5 12a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-3.97 1.47-1.78-1.78V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.31l2.22 2.22c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06"></path>
  </svg>
);
