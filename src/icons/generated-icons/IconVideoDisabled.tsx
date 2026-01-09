/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconVideoDisabled: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-video-disabled pressed' : 'icon-video-disabled'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16.87 16.45v-.01L6.68 6.25h-.02L3.7 3.29A.996.996 0 1 0 2.29 4.7l1.78 1.78C3.44 6.82 3 7.48 3 8.24v7.5c0 1.1.9 2 2 2h10c.1 0 .2-.02.3-.03l3.99 3.99c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41zm3.7-9.78L17 10.25v-2c0-1.1-.9-2-2-2H8.8l8.2 8.2v-.7l3.57 3.57c.16.16.43.05.43-.18V6.85c0-.22-.27-.33-.43-.18"></path>
  </svg>
);
