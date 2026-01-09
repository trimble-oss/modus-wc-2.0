/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconRedoBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-redo-bold pressed' : 'icon-redo-bold'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m21.97 7.45-3.7-2.96a1 1 0 0 0-1.06-.12c-.35.17-.57.51-.57.9v1.46H8.35c-3.38 0-6.24 2.43-6.65 5.65-.24 1.87.33 3.74 1.57 5.14a6.52 6.52 0 0 0 4.88 2.21h8c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-8c-.98 0-1.93-.42-2.59-1.15-.67-.74-.99-1.7-.89-2.7.17-1.77 1.78-3.15 3.66-3.15h8.32v1.46c0 .39.22.73.57.9s.76.12 1.06-.12l3.7-2.96c.24-.19.38-.48.38-.78s-.14-.59-.38-.78Z"></path>
  </svg>
);
