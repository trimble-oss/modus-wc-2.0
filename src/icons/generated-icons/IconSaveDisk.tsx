/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSaveDisk: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-save-disk pressed' : 'icon-save-disk'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16.17 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41l-2.83-2.83C17.2 3.21 16.7 3 16.17 3m-3.58 15.94a3 3 0 0 1-3.53-3.53 2.99 2.99 0 0 1 2.36-2.36 3 3 0 0 1 3.53 3.53 2.99 2.99 0 0 1-2.36 2.36M15 7.63V9H6.39L5 7.61V5h10z"></path>
  </svg>
);
