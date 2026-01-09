/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconWrench: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-wrench pressed' : 'icon-wrench'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m6.33 3.41 3.34 3.34c.78.78.78 2.05 0 2.83s-2.05.78-2.83 0L3.5 6.24c-.87 1.99-.49 4.39 1.14 6.02s3.94 1.99 5.91 1.19l6.52 6.52c.61.61 1.6.61 2.21 0l.77-.77c.61-.61.61-1.6 0-2.21l-6.52-6.52c.79-1.96.4-4.3-1.2-5.89s-4.01-2-6-1.15Z"></path>
  </svg>
);
