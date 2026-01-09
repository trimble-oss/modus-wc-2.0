/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconLessThanEqualTo: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-less-than-equal-to pressed'
        : 'icon-less-than-equal-to'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m18.39 5.92-9.9 4.17 9.93 4.53a1.003 1.003 0 0 1-.42 1.91c-.14 0-.28-.03-.41-.09l-12-5.48c-.36-.16-.59-.53-.58-.92s.25-.75.61-.91l12-5.06c.51-.22 1.1.02 1.31.53a1 1 0 0 1-.53 1.31ZM6 18h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1"></path>
  </svg>
);
