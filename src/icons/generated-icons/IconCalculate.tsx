/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCalculate: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-calculate pressed' : 'icon-calculate'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M2 20c0 1.1.9 2 2 2h7.25v-9.25H2zm2.37-1.26 3.54-3.54c.29-.29.77-.29 1.06 0s.29.77 0 1.06L5.43 19.8c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06M20 2h-7.25v9.25H22V4c0-1.1-.9-2-2-2m-.03 5.74c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.24-1.24-1.24 1.24c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.24-1.24-1.24-1.24c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l1.24 1.24 1.24-1.24c.29-.29.77-.29 1.06 0s.29.77 0 1.06L18.73 6.5zM2 4v7.25h9.25V2H4c-1.1 0-2 .9-2 2m2 1.75h1.75V4c0-.41.34-.75.75-.75s.75.34.75.75v1.75H9c.41 0 .75.34.75.75s-.34.75-.75.75H7.25V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.25H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75M12.75 22H20c1.1 0 2-.9 2-2v-7.25h-9.25zM15 15.25h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75m0 3h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75"></path>
  </svg>
);
