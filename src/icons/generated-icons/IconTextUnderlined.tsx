/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTextUnderlined: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-text-underlined pressed' : 'icon-text-underlined'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M18 21H6v-1h12zm-5.99-2.96c3.06 0 4.58-1.84 4.58-4.53V6h-1.97v7.36c0 1.82-.78 2.87-2.59 2.87s-2.61-1.07-2.61-2.88V6h-2v7.52c0 2.69 1.33 4.51 4.59 4.51Z"></path>
  </svg>
);
