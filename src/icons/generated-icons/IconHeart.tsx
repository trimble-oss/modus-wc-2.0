/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconHeart: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-heart pressed' : 'icon-heart'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19.85 5.06c-1.95-1.61-4.85-1.32-6.64.47L12 6.74l-1.21-1.21C9 3.74 6.1 3.45 4.15 5.06a4.844 4.844 0 0 0-.35 7.17l7.48 7.48c.4.4 1.05.4 1.46 0l7.48-7.48c2-2 1.88-5.32-.35-7.17Z"></path>
  </svg>
);
