/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconArrowUpCircle: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-arrow-up-circle pressed' : 'icon-arrow-up-circle'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 10.13a.996.996 0 0 1-1.41 0L13 9.54v7.45c0 .55-.45 1-1 1s-1-.45-1-1V9.54l-2.59 2.59A.996.996 0 1 1 7 10.72l4.29-4.29a.996.996 0 0 1 1.41 0l4.29 4.29c.39.39.39 1.02 0 1.41Z"></path>
  </svg>
);
