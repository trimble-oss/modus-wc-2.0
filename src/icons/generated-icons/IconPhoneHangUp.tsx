/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPhoneHangUp: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-phone-hang-up pressed' : 'icon-phone-hang-up'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M14.12 15.47 13 16.59V12c0-.55-.45-1-1-1s-1 .45-1 1v4.59l-1.12-1.12c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l2.83 2.83c.39.39 1.03.39 1.41 0l2.83-2.83c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0ZM15.67 6l-7.37.02c-2.73 0-5.02 2.07-5.3 4.79-.07.7.48 1.31 1.18 1.31h2.48c1.01 0 1.76-.95 1.54-1.93-.11-.49.26-.96.77-.96h6.04c.51-.02.88.45.77.94-.22.99.54 1.92 1.55 1.92h2.48c.7 0 1.25-.62 1.18-1.32a5.326 5.326 0 0 0-5.32-4.76Z"></path>
  </svg>
);
