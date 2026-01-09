/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTextStrikethrough: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-text-strikethrough pressed'
        : 'icon-text-strikethrough'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20 11.5v1H4v-1h4.67c-.83-.59-1.36-1.39-1.36-2.65 0-2.27 1.85-3.76 4.56-3.76s4.18 1.3 4.99 2.86l-1.64 1.13c-.79-1.33-1.93-1.94-3.37-1.94s-2.32.54-2.32 1.51c0 1.24.95 1.66 3.13 2.3.57.17 1.11.35 1.6.54H20Zm-6.27 2c.88.43 1.25.93 1.25 1.69 0 1.21-1.1 1.73-2.72 1.73s-2.88-.76-3.67-2.32l-1.78.94c.85 2.02 2.72 3.38 5.37 3.38 3.17 0 5.02-1.71 5.02-3.89 0-.6-.12-1.1-.33-1.52h-3.14Z"></path>
  </svg>
);
