/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPerson: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-person pressed' : 'icon-person'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 12.5c2.62 0 4.75-2.13 4.75-4.75S14.62 3 12 3 7.25 5.13 7.25 7.75 9.38 12.5 12 12.5m8.02 3.23c-1.54-.71-4.38-1.74-8.02-1.73-3.62 0-6.48 1.02-8.02 1.73S2 17 2 18c0 .54.29 1.64.55 2.56.25.85 1.03 1.44 1.92 1.44h15.05c.89 0 1.67-.59 1.92-1.44.27-.91.55-2.02.55-2.56 0-1-.44-1.56-1.98-2.27Z"></path>
  </svg>
);
