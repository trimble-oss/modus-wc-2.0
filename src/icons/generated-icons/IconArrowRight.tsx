/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconArrowRight: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-arrow-right pressed' : 'icon-arrow-right'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 9V5.21c0-.45.54-.67.85-.35l6.79 6.79c.2.2.2.51 0 .71l-6.79 6.79a.5.5 0 0 1-.85-.35v-3.79H5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h7Z"></path>
  </svg>
);
