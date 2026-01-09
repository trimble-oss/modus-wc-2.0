/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconLocationDisabled: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-location-disabled pressed'
        : 'icon-location-disabled'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m7.103 5.686-.002.001-2.394-2.394a1 1 0 0 0-1.414 1.414l2.394 2.394A8 8 0 0 0 4.07 11H3c-.55 0-1 .45-1 1s.45 1 1 1h1.07A8 8 0 0 0 11 19.93V21c0 .55.45 1 1 1s1-.45 1-1v-1.07a8 8 0 0 0 3.899-1.617l2.394 2.394a1 1 0 0 0 1.414-1.414l-2.394-2.394.001-.002-1.43-1.43v.002L8.53 7.117l.002-.001zM6.09 11a6 6 0 0 1 1.027-2.469l8.352 8.352c-.72.513-1.56.871-2.469 1.027V17c0-.55-.45-1-1-1s-1 .45-1 1v.91A6.015 6.015 0 0 1 6.09 13H7c.55 0 1-.45 1-1s-.45-1-1-1zm4.365-4.79-1.57-1.57A8 8 0 0 1 11 4.07V3c0-.55.45-1 1-1s1 .45 1 1v1.07c3.62.46 6.47 3.31 6.93 6.93H21c.55 0 1 .45 1 1s-.45 1-1 1h-1.07a8 8 0 0 1-.57 2.115l-1.57-1.57q.072-.267.12-.545h-.665l-1.22-1.22c.1-.445.5-.78.975-.78h.91A6.015 6.015 0 0 0 13 6.09V7c0 .474-.335.874-.78.975L11 6.755V6.09a6 6 0 0 0-.545.12"></path>
  </svg>
);
