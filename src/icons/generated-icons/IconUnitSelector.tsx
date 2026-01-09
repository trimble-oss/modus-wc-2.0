/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconUnitSelector: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-unit-selector pressed' : 'icon-unit-selector'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M6.621 3.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L5.328 7h13.344l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L18.672 5H5.328z"></path>
    <path
      fill-rule="evenodd"
      d="M22 13.827v5.996a2.004 2.004 0 0 1-2.001 2.002H4a2.004 2.004 0 0 1-2-2.001v-5.997c0-1.103.898-2 2.001-2H20c1.103 0 2.001.897 2.001 2ZM5.502 12.83v3.67c0 .283.219.502.502.502s.502-.22.502-.502v-3.67zm4.002 0v3.67c0 .283.22.502.502.502s.502-.22.502-.502v-3.67zm4.002 0v3.67c0 .283.22.502.502.502s.502-.22.502-.502v-3.67zm4.002 0v3.67c0 .283.22.502.502.502s.502-.22.502-.502v-3.67z"
    ></path>
  </svg>
);
