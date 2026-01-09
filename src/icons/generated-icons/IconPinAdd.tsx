/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPinAdd: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-pin-add pressed' : 'icon-pin-add'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21.25 17.25h-2.5v-2.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.5h-2.5c-.41 0-.75.34-.75.75s.34.75.75.75h2.5v2.5c0 .41.34.75.75.75s.75-.34.75-.75v-2.5h2.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-5.02-7.23c.79.49 1.41.68 1.65.44.46-.46-.59-2.25-2.35-4-1.75-1.75-3.54-2.8-4-2.34-.25.25-.05.88.45 1.68l-4.55 4.55C6.21 9.44 5.23 9 4.93 9.3c-.44.44.68 2.3 2.55 4.27l-5.29 5.75-.2.69.69-.2 5.75-5.29c1.97 1.86 3.81 2.98 4.26 2.54.3-.3-.13-1.27-1.03-2.47l4.56-4.56Z"></path>
  </svg>
);
