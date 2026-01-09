/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconAngle90: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-angle-90 pressed' : 'icon-angle-90'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20.75 20.5h-5.54C14.83 14.21 9.79 9.16 3.5 8.79V3.25c0-.41-.34-.75-.75-.75S2 2.84 2 3.25V22h18.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M3.5 9.79c5.74.37 10.34 4.97 10.71 10.71H3.5z"></path>
  </svg>
);
