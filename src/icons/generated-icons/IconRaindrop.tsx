/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconRaindrop: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-raindrop pressed' : 'icon-raindrop'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 19c-2.76 0-5-2.24-5-5.01 0-2.3 3.47-7.22 4.63-8.8.19-.25.56-.25.75 0 1.16 1.58 4.63 6.5 4.63 8.8 0 2.77-2.24 5.01-5 5.01Z"></path>
  </svg>
);
