/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFolderOpen: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-folder-open pressed' : 'icon-folder-open'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m9 6 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1h-9l-1.71-1.71A1 1 0 0 0 9.58 4H3.99c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14.47c.97 0 1.8-.7 1.97-1.65l.06-.35 1.09-6.15c.22-1.22-.73-2.35-1.97-2.35H7.18c-.97 0-1.8.7-1.97 1.65L4 18V6z"></path>
  </svg>
);
