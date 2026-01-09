/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPersonAccount: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-person-account pressed' : 'icon-person-account'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c2.07 0 3.75 1.68 3.75 3.75S14.07 13.5 12 13.5s-3.75-1.68-3.75-3.75S9.93 6 12 6m0 14c-2.84 0-5.34-1.5-6.76-3.74.13-.07.27-.14.43-.21 1.22-.56 3.47-1.37 6.33-1.37 2.87 0 5.12.81 6.33 1.37.16.07.3.15.43.22A7.99 7.99 0 0 1 12 20"></path>
  </svg>
);
