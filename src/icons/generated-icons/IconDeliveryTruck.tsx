/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconDeliveryTruck: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-delivery-truck pressed' : 'icon-delivery-truck'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 11h-.02l-1.49-3h1.52l-.75-1.87a1 1 0 0 0-.93-.63H3c-.55 0-1 .45-1 1V16h1c0 1.65 1.35 3 3 3s3-1.35 3-3h6c0 1.65 1.35 3 3 3s3-1.35 3-3h1v-4c0-.55-.45-1-1-1M6 17.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M16 8h1.81l1.49 3H16zm2 9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"></path>
  </svg>
);
