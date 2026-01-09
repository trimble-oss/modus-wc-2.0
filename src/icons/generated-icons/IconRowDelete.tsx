/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconRowDelete: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-row-delete pressed' : 'icon-row-delete'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M3 6h10c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1m0 4.97h10c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1M11 14H3c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1m9.535 4.192-2.12-2.12 2.12-2.122a1.003 1.003 0 0 0 0-1.414 1.003 1.003 0 0 0-1.414 0L17 14.655l-2.121-2.12a1.003 1.003 0 0 0-1.415 0 1.003 1.003 0 0 0 0 1.414l2.122 2.121-2.122 2.121a1.003 1.003 0 0 0 0 1.415 1.003 1.003 0 0 0 1.415 0L17 17.485l2.121 2.122a1.003 1.003 0 0 0 1.415 0 1.003 1.003 0 0 0 0-1.415Z"></path>
  </svg>
);
