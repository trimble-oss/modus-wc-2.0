/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconWidgets: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-widgets pressed' : 'icon-widgets'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M10 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m0 10H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1m11.48-7.25-3.24-3.24c-.69-.69-1.81-.69-2.49 0l-3.24 3.24c-.33.33-.52.78-.52 1.25s.18.91.52 1.25l3.24 3.24c.34.34.79.51 1.25.51s.9-.17 1.25-.52l3.24-3.24c.33-.33.52-.78.52-1.25s-.18-.91-.52-1.25ZM17 9.9 14.1 7 17 4.1 19.9 7zm3 3.1h-6c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1"></path>
  </svg>
);
