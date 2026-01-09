/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFilterOff: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-filter-off pressed' : 'icon-filter-off'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m13.48 10.25 1.41 1.41 4.9-6.05c.23-.3.27-.71.11-1.05-.17-.34-.52-.56-.9-.56H7.23l2 2zm7.23 10.04-17-17A.996.996 0 1 0 2.3 4.7l7.71 7.71v7.58c0 .89 1.08 1.34 1.71.71l2-2a1 1 0 0 0 .29-.71V16.4l5.29 5.29c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41Z"></path>
  </svg>
);
