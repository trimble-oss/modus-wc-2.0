/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconAlignCenterVert: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-align-center-vert pressed'
        : 'icon-align-center-vert'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19 11V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3h-2V5c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v6H3c-.55 0-1 .45-1 1s.45 1 1 1h2v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-6h2v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3h2c.55 0 1-.45 1-1s-.45-1-1-1zm-2 4h-2V9h2z"></path>
  </svg>
);
