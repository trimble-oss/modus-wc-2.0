/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconControlCompass: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-control-compass pressed' : 'icon-control-compass'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M7.99 13.29c1.29-.49 2.65-.75 4.01-.77 1.37.02 2.72.28 4.01.77l-4.01-9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10A10.03 10.03 0 0 0 12 2m.09 17.9H12c-4.36 0-7.9-3.54-7.9-7.9S7.64 4.1 12 4.1s7.9 3.54 7.9 7.9c.03 4.34-3.47 7.87-7.81 7.9"></path>
  </svg>
);
