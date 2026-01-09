/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconItemDoesNotEqual: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-item-does-not-equal pressed'
        : 'icon-item-does-not-equal'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M18.52 4.17c-.42-.35-1.05-.3-1.41.13L14 8.04H6.58c-.55 0-1 .45-1 1s.45 1 1 1h5.75l-3.27 3.93H6.5c-.55 0-1 .45-1 1s.45 1 1 1h.9l-2.05 2.46c-.35.42-.3 1.05.13 1.41a1 1 0 0 0 .73.23c.25-.02.5-.14.68-.36L10 15.97h7.5c.55 0 1-.45 1-1s-.45-1-1-1h-5.84l3.27-3.93h2.65c.55 0 1-.45 1-1s-.45-1-1-1h-.98l2.05-2.46c.35-.42.3-1.05-.13-1.41"></path>
  </svg>
);
