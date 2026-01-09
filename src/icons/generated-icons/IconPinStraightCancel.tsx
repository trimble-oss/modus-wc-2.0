/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPinStraightCancel: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-pin-straight-cancel pressed'
        : 'icon-pin-straight-cancel'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M9.68 4.47v1.28l7.01 7.01c.9-.22 1.45-.51 1.45-.83 0-.42-.99-.81-2.47-1.02V4.46c.91-.21 1.48-.52 1.48-.86 0-.65-2.01-1.17-4.48-1.17s-4.48.52-4.48 1.17c0 .35.59.66 1.51.87Zm9.04 12.45-3.88-3.88h.02L9.68 7.86v.02L6.56 4.76a.996.996 0 1 0-1.41 1.41l4.54 4.54v.19c-1.51.22-2.51.6-2.51 1.03 0 .62 2.11 1.15 4.82 1.22l.33 7.81.35.63.35-.63.28-6.63 4.01 4.01c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41Z"></path>
  </svg>
);
