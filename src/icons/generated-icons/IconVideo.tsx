/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconVideo: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-video pressed' : 'icon-video'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20.57 6.68 17 10.25v-2c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v7.5c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2l3.57 3.57c.16.16.43.05.43-.18V6.85c0-.22-.27-.33-.43-.18Z"></path>
  </svg>
);
