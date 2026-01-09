/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconArrowLeftCircle: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-arrow-left-circle pressed'
        : 'icon-arrow-left-circle'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12m10.13-5c.39.39.39 1.02 0 1.41L9.54 11h7.45c.55 0 1 .45 1 1s-.45 1-1 1H9.54l2.59 2.59A.996.996 0 1 1 10.72 17l-4.29-4.29a.996.996 0 0 1 0-1.41l4.29-4.29a.996.996 0 0 1 1.41 0Z"></path>
  </svg>
);
