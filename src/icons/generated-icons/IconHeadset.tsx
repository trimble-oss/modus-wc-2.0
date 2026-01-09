/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconHeadset: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-headset pressed' : 'icon-headset'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20 9.29h-.27C19.49 5.23 16.12 2 12 2S4.51 5.23 4.27 9.29H4c-1.1 0-2 .9-2 2V14c0 1.1.9 3.29 2 3.29h2c.55 0 1-.45 1-1v-6c0-.45-.31-.82-.73-.95.21-2.98 2.7-5.35 5.73-5.35s5.52 2.36 5.73 5.35c-.42.12-.73.49-.73.95v6c0 .39.23.72.56.88l-.86.99-1.42.59c-.24-.18-.55-.27-.86-.18l-1.69.47c-.53.15-.84.7-.7 1.23.15.53.7.84 1.23.7l1.69-.47c.4-.11.67-.45.72-.83l1.51-.62a.6.6 0 0 0 .19-.13l1.41-1.62H20c1.1 0 2-2.19 2-3.29V11.3c0-1.1-.9-2-2-2Z"></path>
  </svg>
);
