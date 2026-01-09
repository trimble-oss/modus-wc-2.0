/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconClipboardPlanning: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-clipboard-planning pressed'
        : 'icon-clipboard-planning'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M8 11h1v1H8zm0 4h1v-1H8zm0 3h1v-1H8zm3-6h5v-1h-5zm0 3h5v-1h-5zm0 3h5v-1h-5zm9-11v13c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3c0-1.66 1.34-3 3-3s3 1.34 3 3h3c1.1 0 2 .9 2 2m-2 0h-2v1H8V7H6v13h12z"></path>
  </svg>
);
