/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconBetween: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-between pressed' : 'icon-between'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m3.24 12 4.09-5.99c.31-.46.19-1.08-.26-1.39-.46-.31-1.08-.19-1.39.26L1.2 11.44c-.23.34-.23.79 0 1.13l4.5 6.53a1 1 0 0 0 1.39.25c.45-.31.57-.94.26-1.39zm19.58-.6-4.5-6.53a1 1 0 0 0-1.39-.26c-.45.31-.57.94-.26 1.39l4.11 5.96-4.09 5.99c-.31.46-.19 1.08.26 1.39.17.12.37.17.56.17a1 1 0 0 0 .83-.44l4.48-6.56c.23-.34.23-.79 0-1.13ZM7 10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1m10 4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1"></path>
  </svg>
);
