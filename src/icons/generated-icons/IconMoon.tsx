/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconMoon: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-moon pressed' : 'icon-moon'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M18.84 15.35c.44-.13.83.34.58.71-1.88 2.68-5.5 4.18-9.34 3.07-2.43-.7-4.39-2.53-5.16-4.82C3.44 9.91 6.03 5.8 10 4.52c.36-.12.67.27.46.58-1.09 1.68-1.45 3.83-.64 6.06.67 1.85 2.22 3.34 4.15 4.02 1.72.6 3.39.6 4.87.17"></path>
  </svg>
);
