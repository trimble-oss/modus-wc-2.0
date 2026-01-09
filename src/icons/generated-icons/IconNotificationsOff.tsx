/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconNotificationsOff: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-notifications-off pressed'
        : 'icon-notifications-off'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m10.19-.22L3.22 2.81a.996.996 0 1 0-1.41 1.41l5.23 5.23c-.02.18-.03.37-.03.55 0 3.66-1.37 5.96-2.67 7.31-.61.64-.16 1.69.72 1.69H16.6l2.19 2.19c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41Zm-.91-2.91L8.68 6.27c.65-.57 1.44-.99 2.32-1.17V4c0-.55.45-1 1-1s1 .45 1 1v1.1a5 5 0 0 1 4 4.9c0 3.29 1.11 5.47 2.28 6.86Z"></path>
  </svg>
);
