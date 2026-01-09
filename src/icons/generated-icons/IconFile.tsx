/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFile: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-file pressed' : 'icon-file'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M13.59 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.41c0-.27-.11-.52-.29-.71L14.3 2.29a1 1 0 0 0-.71-.29M18 20H6V4h6v5c0 .55.45 1 1 1h5z"></path>
  </svg>
);
