/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconWheelbarrow: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-wheelbarrow pressed' : 'icon-wheelbarrow'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M22.77 5.66a.75.75 0 0 0-.97-.43l-6.69 2.6L12.94 10H3.88a.5.5 0 0 0-.43.76l2.25 3.76c.18.3.51.49.86.49h1.37l-1.54 1.54a.8.8 0 0 0-.14.21c-.3-.15-.64-.25-1.01-.25-1.24 0-2.25 1.01-2.25 2.25S4 21.01 5.24 21.01 7.49 20 7.49 18.76c0-.36-.1-.7-.25-1.01.07-.04.15-.08.21-.14l.11-.11 4.83 1.75c.19.07.39.1.59.1.36 0 .71-.11 1.01-.32.47-.33.75-.86.75-1.43v-4.47l.98-2.44a.503.503 0 0 0-.46-.69h-.2l.89-.89 6.39-2.48c.39-.15.58-.58.43-.97M5.25 19.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75m8-1.91c0 .11-.07.18-.11.2-.04.03-.12.07-.23.03l-4.17-1.51 1.32-1.32h3.19v2.59ZM8 9H5V8h3zm4 0H9V8h3zm-2-2H7V6h3z"></path>
  </svg>
);
