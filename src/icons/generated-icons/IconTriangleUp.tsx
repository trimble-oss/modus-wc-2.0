/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTriangleUp: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-triangle-up pressed' : 'icon-triangle-up'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m21.74 18.03-8-14.02c-.77-1.34-2.72-1.34-3.48 0l-8 14.02C1.5 19.35 2.47 21 4 21h15.99c1.53 0 2.5-1.64 1.74-2.97Z"></path>
  </svg>
);
