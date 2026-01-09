/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconStars: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-stars pressed' : 'icon-stars'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m13 4.12-1.44.29a.49.49 0 0 0-.39.39l-.29 1.44-.29-1.44a.49.49 0 0 0-.39-.39l-1.44-.29 1.44-.29c.2-.04.35-.19.39-.39L10.88 2l.29 1.44c.04.2.19.35.39.39zM6.9 8.69a.75.75 0 0 1-.59-.59l-.43-2.16-.43 2.16c-.06.3-.29.53-.59.59l-2.16.43 2.16.43c.3.06.53.29.59.59l.43 2.16.43-2.16c.06-.3.29-.53.59-.59l2.16-.43zm7.14 5.45c-.59-.12-1.06-.58-1.18-1.18L12 8.64l-.87 4.32c-.12.59-.58 1.06-1.18 1.18L5.63 15l4.32.86c.59.12 1.06.58 1.18 1.18l.86 4.32.86-4.32c.12-.59.58-1.06 1.18-1.18l4.32-.86-4.32-.86Z"></path>
  </svg>
);
