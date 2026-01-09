/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCloud: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-cloud pressed' : 'icon-cloud'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19.47 17.86c-.32.09-.65.12-.97.12L6.99 18c-2.76 0-5-2.24-5-5s2.24-5 5-5c.52 0 1.01.1 1.48.25A5.51 5.51 0 0 1 13.49 5c3.04 0 5.5 2.46 5.5 5.5q0 .27-.03.54c1.33.18 2.49 1.12 2.89 2.49.54 1.86-.53 3.8-2.39 4.33Z"></path>
  </svg>
);
