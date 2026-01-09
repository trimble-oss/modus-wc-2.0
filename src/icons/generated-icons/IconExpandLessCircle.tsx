/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconExpandLessCircle: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-expand-less-circle pressed'
        : 'icon-expand-less-circle'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m-5.26-8.7 4.59-4.59a.996.996 0 0 1 1.41 0l4.59 4.59c.31.37.31.91 0 1.28a1 1 0 0 1-1.41.13l-3.88-3.88-3.88 3.88c-.4.39-1.03.39-1.42 0a.996.996 0 0 1 0-1.41"></path>
  </svg>
);
