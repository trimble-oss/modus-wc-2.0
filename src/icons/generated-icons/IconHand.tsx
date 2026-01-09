/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconHand: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-hand pressed' : 'icon-hand'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M18.77 5.33c-.69 0-1.25.56-1.25 1.25v4.17c0 .23-.18.42-.42.42s-.42-.18-.42-.42V4.08a1.25 1.25 0 0 0-2.5 0v6.67c0 .23-.18.42-.42.42s-.42-.18-.42-.42v-7.5a1.25 1.25 0 0 0-2.5 0v7.49c0 .23-.18.42-.42.42s-.42-.18-.42-.42V5.75a1.25 1.25 0 0 0-2.5 0v9.51L4.07 13.3a1.244 1.244 0 0 0-1.5 1.96L8.22 21c.62.64 1.48 1 2.38 1h5.42c2.21 0 4-1.79 4-4V6.58c0-.69-.56-1.25-1.25-1.25"></path>
  </svg>
);
