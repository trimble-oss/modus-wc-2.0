/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTimesheetApprove: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-timesheet-approve pressed'
        : 'icon-timesheet-approve'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16.49 12.99c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m2.78 3.87-3.2 3.2c-.2.19-.51.19-.71 0l-1.65-1.67a.5.5 0 0 1 0-.7c.19-.19.51-.2.7 0s1.3 1.31 1.3 1.31l2.84-2.85c.19-.19.51-.2.7 0s0 .01 0 .01c.19.2.19.51 0 .71ZM4.49 20V4h6v5c0 .55.45 1 1 1h5v1.5c.7 0 1.37.11 2 .32v-3.4c0-.27-.11-.52-.29-.71l-5.12-5.12C12.7 2.21 12.2 2 11.67 2H4.5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6.88c-.46-.59-.83-1.27-1.07-2z"></path>
  </svg>
);
