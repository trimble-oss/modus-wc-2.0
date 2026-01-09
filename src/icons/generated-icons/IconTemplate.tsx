/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTemplate: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-template pressed' : 'icon-template'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5H4zm5 6H4v4a1 1 0 0 0 1 1h4zm5 0h-4v5h4zm6 0h-5v5h4a1 1 0 0 0 1-1z"></path>
  </svg>
);
