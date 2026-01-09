/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconUndoBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-undo-bold pressed' : 'icon-undo-bold'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M22.3 12.38c-.41-3.22-3.27-5.65-6.65-5.65h-8.3V5.27c0-.39-.22-.73-.57-.9a1 1 0 0 0-1.06.12l-3.7 2.96c-.24.19-.38.48-.38.78s.14.59.38.78l3.7 2.96c.3.24.71.29 1.06.12s.57-.51.57-.9V9.73h8.32c1.88 0 3.49 1.38 3.66 3.15.1 1-.22 1.96-.89 2.7-.66.73-1.61 1.15-2.59 1.15h-8c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h8c1.87 0 3.64-.81 4.88-2.21 1.23-1.4 1.8-3.28 1.57-5.14"></path>
  </svg>
);
