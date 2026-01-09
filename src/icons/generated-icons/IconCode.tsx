/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCode: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-code pressed' : 'icon-code'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M17.12 8.12a.996.996 0 0 1 1.41 0l3.18 3.18c.39.39.39 1.02 0 1.41l-3.18 3.18c-.38.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41S19.59 12 19.59 12l-2.47-2.47a.996.996 0 0 1 0-1.41m-10.24 0a.996.996 0 0 0-1.41 0L2.29 11.3a.996.996 0 0 0 0 1.41s3.18 3.18 3.18 3.18c.38.38 1.02.38 1.41-.01a.996.996 0 0 0 0-1.41S4.41 12 4.41 12l2.47-2.47a.996.996 0 0 0 0-1.41m3.07 10.64 5.92-12.69c.23-.5.02-1.1-.48-1.33s-1.1-.02-1.33.48L8.14 17.91c-.23.5-.02 1.1.48 1.33q.21.09.42.09c.38 0 .74-.21.91-.58Z"></path>
  </svg>
);
