/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconLayer: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-layer pressed' : 'icon-layer'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20.01 10.87 21.9 12 12 17.9 2.1 12l1.89-1.13L12 15.64zM12 2.1 2.1 8l9.9 5.9L21.9 8zm0 17.55-8.01-4.78L2.1 16l9.9 5.9 9.9-5.9-1.89-1.13L12 19.64Z"></path>
  </svg>
);
