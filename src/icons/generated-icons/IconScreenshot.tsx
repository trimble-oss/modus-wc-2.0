/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconScreenshot: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-screenshot pressed' : 'icon-screenshot'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M10 9H9v3c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1m5 6h-1c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zM3 5h2V3H3zm6-2H7v2h2zm4 0h-2v2h2zm2 2h2V3h-2zm4-2v2h2V3zm0 6h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zm-4 0h2v-2h-2zm-4 0h2v-2h-2zm-4 0h2v-2H7zm-4 0h2v-2H3zm0-4h2v-2H3zm0-4h2v-2H3zm0-4h2V7H3z"></path>
  </svg>
);
