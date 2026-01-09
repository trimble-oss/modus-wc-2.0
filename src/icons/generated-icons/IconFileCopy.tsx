/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFileCopy: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-file-copy pressed' : 'icon-file-copy'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M5 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h9c.55 0 1-.45 1-1s-.45-1-1-1H6V7c0-.55-.45-1-1-1m9.59-4H9.5c-1.1 0-2 .9-2 2v12.5c0 1.1.9 2 2 2H18c1.1 0 2-.9 2-2V7.41c0-.27-.11-.52-.29-.71L15.3 2.29a1 1 0 0 0-.71-.29M18 16.5H9.5V4H13v4c0 .55.45 1 1 1h4z"></path>
  </svg>
);
