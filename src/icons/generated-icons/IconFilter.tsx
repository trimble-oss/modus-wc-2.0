/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFilter: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-filter pressed' : 'icon-filter'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19.9 4.56c-.17-.34-.52-.56-.9-.56H5c-.38 0-.73.22-.9.56a.98.98 0 0 0 .11 1.05L10 12.76v7.23c0 .89 1.08 1.34 1.71.71l2-2a1 1 0 0 0 .29-.71v-5.24l5.79-7.15c.23-.3.27-.71.11-1.05Z"></path>
  </svg>
);
