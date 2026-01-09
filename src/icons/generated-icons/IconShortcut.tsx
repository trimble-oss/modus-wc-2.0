/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconShortcut: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-shortcut pressed' : 'icon-shortcut'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19 14c-.55 0-1 .45-1 1v5H4V6h5c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1m3.82-5.66L14.76 2.1a.44.44 0 0 0-.48-.05c-.16.08-.26.24-.26.41v3.12C6.86 5.85 6.38 12.34 6 17.59c-.02.22.13.42.34.48.04 0 .08.01.11.01.18 0 .34-.1.42-.27 1.97-4.32 3.49-6.62 7.15-5.7v3.3c0 .18.1.34.26.42s.35.05.49-.06l8.06-6.7a.46.46 0 0 0 .17-.36.47.47 0 0 0-.18-.36Z"></path>
  </svg>
);
