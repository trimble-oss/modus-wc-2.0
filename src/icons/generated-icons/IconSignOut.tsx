/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSignOut: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-sign-out pressed' : 'icon-sign-out'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M11.78 12.01c0-.55-.45-1-1-1H5.79v-1.8c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.32.31.85.09.85-.35v-1.78h4.99c.55 0 1-.45 1-1Zm-.28 6.24H8.75V16c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0-14H8c-.41 0-.75.34-.75.75v3c0 .41.34.75.75.75s.75-.34.75-.75V5.75h2.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m9.87.7-5.95-2.38a1 1 0 0 0-1.37.93v17.15c0 .74.77 1.22 1.44.9l5.95-2.89c.34-.17.56-.52.56-.9V5.88a1 1 0 0 0-.63-.93"></path>
  </svg>
);
