/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconClipboardActions: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-clipboard-actions pressed'
        : 'icon-clipboard-actions'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M4 6h2v1h8V6h2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S7 2.34 7 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5c.55 0 1-.45 1-1s-.45-1-1-1H4zm8 7v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1m8 8h-6v-1h6zm0-3h-6v-1h6zm0-3h-6v-1h6z"></path>
  </svg>
);
