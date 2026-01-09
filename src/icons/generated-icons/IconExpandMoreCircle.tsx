/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconExpandMoreCircle: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-expand-more-circle pressed'
        : 'icon-expand-more-circle'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5.26 8.7-4.59 4.59a.996.996 0 0 1-1.41 0L6.67 10.7a1 1 0 0 1 0-1.28 1 1 0 0 1 1.41-.13l3.88 3.88 3.88-3.88c.4-.39 1.03-.39 1.42 0s.39 1.02 0 1.41"></path>
  </svg>
);
