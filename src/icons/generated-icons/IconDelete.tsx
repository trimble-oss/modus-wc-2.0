/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconDelete: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-delete pressed' : 'icon-delete'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M18 4h-2.09c-.27 0-.52-.11-.71-.29h.01l-.41-.41a1 1 0 0 0-.71-.29H9.92c-.27 0-.52.11-.71.29l-.41.41a1 1 0 0 1-.71.29H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm8-9.49c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5s-.5-.22-.5-.5zm-5 0c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5s-.5-.22-.5-.5z"></path>
  </svg>
);
