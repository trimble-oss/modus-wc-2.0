/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconRowCut: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-row-cut pressed' : 'icon-row-cut'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21.5 18H7c-.28 0-.5-.22-.5-.5V11c0-.28.22-.5.5-.5h14.5c.28 0 .5.22.5.5v6.5c0 .28-.22.5-.5.5M8 12v4.5h12.5V12zM7 7.5h2V6H7zM13 6h-2v1.5h2zm4 0h-2v1.5h1v.75c0 .41.34.75.75.75s.75-.34.75-.75V6.5c0-.28-.22-.5-.5-.5M3.5 9V7.5H5V6H2.5c-.28 0-.5.22-.5.5V9zm.75 3H3.5v-1H2v2c0 .28.22.5.5.5h1.75c.41 0 .75-.34.75-.75S4.66 12 4.25 12"></path>
  </svg>
);
