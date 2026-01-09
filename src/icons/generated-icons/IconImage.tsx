/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconImage: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-image pressed' : 'icon-image'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M9.55 12.14 13 13l1.93-3.22c.43-.72 1.5-.62 1.79.16L18.99 16H5l3.6-3.6c.25-.25.61-.35.95-.26M8 11c.83 0 1.5-.67 1.5-1.5S8.83 8 8 8s-1.5.67-1.5 1.5S7.17 11 8 11m14-5v12c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h18c.55 0 1 .45 1 1m-2 11V7H4v10z"></path>
  </svg>
);
