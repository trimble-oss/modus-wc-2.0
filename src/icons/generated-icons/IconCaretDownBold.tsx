/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCaretDownBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-caret-down-bold pressed' : 'icon-caret-down-bold'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M17.4 9.25a1.3 1.3 0 0 0-1.19-.75H7.78c-.52 0-.99.29-1.19.75-.19.43-.1.91.22 1.25l4.22 4.58c.24.26.6.42.97.42s.73-.15.97-.42l4.22-4.58c.32-.35.4-.83.22-1.25Z"></path>
  </svg>
);
