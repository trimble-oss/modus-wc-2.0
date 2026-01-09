/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTextInputLong: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-text-input-long pressed' : 'icon-text-input-long'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16 17H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h12v2H4v6h12zm3-10v2h1v6h-1v2h1c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-3 7v-1H5v1zm2-8h1V5h-3v1h1v12h-1v1h3v-1h-1z"></path>
  </svg>
);
