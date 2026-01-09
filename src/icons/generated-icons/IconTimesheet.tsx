/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTimesheet: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-timesheet pressed' : 'icon-timesheet'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16.49 12.99c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5m2.78 7.24c-.1.14-.25.22-.41.22-.1 0-.2-.03-.28-.09l-2.51-1.72a.49.49 0 0 1-.22-.41v-2.52c0-.28.22-.5.5-.5s.5.22.5.5v2.26l2.29 1.57c.23.16.29.47.13.69M4.49 20V4h6v5c0 .55.45 1 1 1h5v1.5c.7 0 1.37.11 2 .32v-3.4c0-.27-.11-.52-.29-.71l-5.12-5.12C12.7 2.21 12.2 2 11.67 2H4.5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6.88c-.46-.59-.83-1.27-1.07-2z"></path>
  </svg>
);
