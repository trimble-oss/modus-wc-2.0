/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSnowflake: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-snowflake pressed' : 'icon-snowflake'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 11h-3.94l2.47-2.47c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0L15 10.94l-.06.06H13V9.06l.06-.06 3.47-3.47c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0L13 6.94V3c0-.55-.45-1-1-1s-1 .45-1 1v3.94L8.53 4.47c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06L10.94 9l.06.06V11H9.06L9 10.94 5.53 7.47c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06L6.94 11H3c-.55 0-1 .45-1 1s.45 1 1 1h3.94l-2.47 2.47c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22L9 13.06l.06-.06H11v1.94l-.06.06-3.47 3.47c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22L11 17.06V21c0 .55.45 1 1 1s1-.45 1-1v-3.94l2.47 2.47c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L13.06 15l-.06-.06V13h1.94l.06.06 3.47 3.47c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L17.06 13H21c.55 0 1-.45 1-1s-.45-1-1-1"></path>
  </svg>
);
