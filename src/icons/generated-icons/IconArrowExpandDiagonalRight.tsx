/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconArrowExpandDiagonalRight: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-arrow-expand-diagonal-right pressed'
        : 'icon-arrow-expand-diagonal-right'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 3.5v4.29a.495.495 0 0 1-.85.35L18.7 6.69l-12 12 1.45 1.45a.501.501 0 0 1-.36.85H3.5c-.28 0-.5-.22-.5-.5V16.2a.495.495 0 0 1 .85-.35L5.3 17.3l12-12-1.45-1.45a.501.501 0 0 1 .36-.85h4.29c.28 0 .5.22.5.5"></path>
  </svg>
);
