/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconContacts: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-contacts pressed' : 'icon-contacts'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M3.5 4v2H3c-.28 0-.5.22-.5.5s.22.5.5.5h.5v5H3c-.28 0-.5.22-.5.5s.22.5.5.5h.5v5H3c-.28 0-.5.22-.5.5s.22.5.5.5h.5v1c0 1.1.9 2 2 2V2c-1.1 0-2 .9-2 2m16-2h-13v20h13c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6.42 4.4a2.662 2.662 0 0 1 3.13 3.13 2.67 2.67 0 0 1-2.09 2.09 2.662 2.662 0 0 1-3.13-3.13c.2-1.04 1.05-1.89 2.09-2.09m5.81 9.79c-.14.48-.58.81-1.08.81H9.38c-.5 0-.94-.33-1.08-.82-.14-.51-.31-1.12-.31-1.42 0-.56.25-.87 1.11-1.27s2.47-.97 4.49-.97c2.04 0 3.63.57 4.49.97s1.11.71 1.11 1.27c0 .3-.16.92-.31 1.43Z"></path>
  </svg>
);
