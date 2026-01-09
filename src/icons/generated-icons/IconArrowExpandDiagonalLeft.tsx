/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconArrowExpandDiagonalLeft: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-arrow-expand-diagonal-left pressed'
        : 'icon-arrow-expand-diagonal-left'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M3.5 3h4.29c.28 0 .5.22.5.5a.5.5 0 0 1-.14.35L6.7 5.3l12 12 1.45-1.45c.2-.19.51-.19.71 0a.5.5 0 0 1 .14.35v4.29c0 .28-.22.5-.5.5h-4.29c-.28 0-.5-.22-.5-.5a.5.5 0 0 1 .14-.35l1.45-1.45L5.3 6.7 3.85 8.15c-.2.19-.51.19-.71 0A.5.5 0 0 1 3 7.8V3.5c0-.28.22-.5.5-.5"></path>
  </svg>
);
