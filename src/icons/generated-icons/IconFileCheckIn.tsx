/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFileCheckIn: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-file-check-in pressed' : 'icon-file-check-in'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12.89 15.35 10.24 18c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l1.19-1.19H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.38l-1.19-1.19c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l2.65 2.65c.2.2.2.51 0 .71Zm6.82-7.65L14.3 2.29a1 1 0 0 0-.71-.29H6c-1.1 0-2 .9-2 2v8c0 .55.45 1 1 1s1-.45 1-1V4h6v5c0 .55.45 1 1 1h5v10H6v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.41c0-.27-.11-.52-.29-.71"></path>
  </svg>
);
