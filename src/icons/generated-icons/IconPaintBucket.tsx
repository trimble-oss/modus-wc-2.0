/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPaintBucket: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-paint-bucket pressed' : 'icon-paint-bucket'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M1.5 18.1c0 1.29.97 2.34 2.15 2.34S5.8 19.39 5.8 18.1c0-1.56-2.15-4.1-2.15-4.1S1.5 16.54 1.5 18.1m20.48-7.52-4.71-4.71 2.09-2.09a1.026 1.026 0 0 0-1.45-1.45l-2.09 2.09-1.77-1.77s-.02-.03-.04-.04c-1.32-1.32-4.6-.17-7.34 2.56s-3.88 6.02-2.56 7.34c.01.01.03.02.05.04l7.94 7.94c1.34 1.27 4.59.13 7.31-2.59s3.86-5.97 2.59-7.31ZM6.43 11.99l-.92-.92c-.13-.4.36-2.36 2.53-4.53s4.07-2.64 4.56-2.5l1.41 1.4.39.39-2.16 2.16a1.026 1.026 0 0 0 .73 1.75c.27 0 .53-.1.73-.3l2.16-2.16 4.58 4.58.09.1v.03z"></path>
  </svg>
);
