/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPinStraight: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-pin-straight pressed' : 'icon-pin-straight'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M15.01 10.91V4.46c.91-.21 1.48-.52 1.48-.86 0-.65-2.01-1.17-4.48-1.17s-4.48.52-4.48 1.17c0 .35.59.66 1.51.87v6.43c-1.51.22-2.51.6-2.51 1.03 0 .62 2.11 1.15 4.82 1.22l.33 7.81.35.63.35-.63.33-7.81c2.71-.08 4.8-.59 4.81-1.22 0-.42-.99-.81-2.47-1.02Z"></path>
  </svg>
);
