/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFactory: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-factory pressed' : 'icon-factory'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16.78 7.52a.504.504 0 0 0-.78.42v2.4l-4.22-2.82a.504.504 0 0 0-.78.42v2.4L6.78 7.52a.504.504 0 0 0-.78.42v3.07H5V3.5c0-.28-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5V20c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-9zM10 17.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5zm5 0c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5zm5 0c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5z"></path>
  </svg>
);
