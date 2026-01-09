/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconArrowDownCircle: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-arrow-down-circle pressed'
        : 'icon-arrow-down-circle'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10M7 11.87a.996.996 0 0 1 1.41 0L11 14.46V7.01c0-.55.45-1 1-1s1 .45 1 1v7.45l2.59-2.59A.996.996 0 1 1 17 13.28l-4.29 4.29a.996.996 0 0 1-1.41 0l-4.29-4.29a.996.996 0 0 1 0-1.41Z"></path>
  </svg>
);
