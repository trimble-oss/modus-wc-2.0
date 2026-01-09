/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconNightPartlyCloudy: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-night-partly-cloudy pressed'
        : 'icon-night-partly-cloudy'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21.04 13.93c-.18-.63-.72-1.06-1.33-1.15 0-.08.01-.16.01-.25 0-1.4-1.14-2.54-2.54-2.54-1.03 0-1.92.62-2.31 1.5-.22-.07-.45-.12-.69-.12a2.311 2.311 0 0 0 0 4.62h5.31q.225 0 .45-.06c.86-.25 1.35-1.14 1.1-2m-9.46 3.54c-1.94-.67-3.48-2.17-4.15-4.02-.81-2.23-.45-4.38.64-6.06.2-.31-.1-.7-.46-.58C3.64 8.1 1.05 12.2 2.53 16.6c.77 2.29 2.73 4.11 5.16 4.82 3.84 1.11 7.46-.39 9.34-3.07.26-.37-.13-.84-.58-.71-1.48.43-3.15.43-4.87-.17"></path>
  </svg>
);
