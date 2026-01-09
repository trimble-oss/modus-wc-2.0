/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconInvoice: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-invoice pressed' : 'icon-invoice'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M4.5 19.5v-16h6v5c0 .55.45 1 1 1h5V11c.7 0 1.37.11 2 .32v-3.4c0-.27-.11-.52-.29-.71L12.8 1.8a1 1 0 0 0-.71-.29H3.5c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h7.88c-.46-.59-.83-1.27-1.07-2H4.49h.01Zm12-7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.27 7.41c-.23.19-.52.31-.85.38v1.1h-.83v-1.04c-.52-.02-.98-.13-1.39-.33v-1.09c.37.17.69.28.95.36.26.07.49.1.71.1.26 0 .46-.05.59-.15.14-.1.21-.24.21-.44 0-.11-.03-.21-.09-.29s-.15-.17-.27-.24c-.12-.08-.36-.21-.72-.38-.34-.16-.59-.31-.76-.46s-.31-.32-.41-.51-.15-.42-.15-.68c0-.49.17-.88.5-1.16.22-.18.5-.31.83-.37v-1.09h.83v1.05c.19.02.37.04.54.08.26.07.53.17.82.29l-.38.92c-.29-.12-.54-.21-.73-.26s-.38-.07-.57-.07c-.22 0-.39.05-.51.16s-.18.24-.18.41c0 .11.02.19.07.27s.12.15.23.22.36.2.74.39c.52.25.87.49 1.07.74.19.25.29.56.29.92 0 .5-.18.89-.54 1.18Z"></path>
  </svg>
);
