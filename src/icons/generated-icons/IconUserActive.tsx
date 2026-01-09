/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconUserActive: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-user-active pressed' : 'icon-user-active'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M22 18.25c0 2.07-1.68 3.75-3.75 3.75s-3.75-1.68-3.75-3.75 1.68-3.75 3.75-3.75S22 16.18 22 18.25m-9 0c0-1.63.76-3.06 1.92-4.03-.9-.14-1.87-.23-2.92-.22-3.62 0-6.48 1.02-8.02 1.73S2 17 2 18c0 .54.29 1.64.55 2.56.25.85 1.03 1.44 1.92 1.44h10.12A5.2 5.2 0 0 1 13 18.25m-1-5.75c2.62 0 4.75-2.13 4.75-4.75S14.62 3 12 3 7.25 5.13 7.25 7.75 9.38 12.5 12 12.5"></path>
  </svg>
);
