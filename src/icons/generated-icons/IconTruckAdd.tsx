/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTruckAdd: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-truck-add pressed' : 'icon-truck-add'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M3 7h2v2a1 1 0 1 0 2 0V7h2a1 1 0 0 0 0-2H7V3a1 1 0 0 0-2 0v2H3a1 1 0 0 0 0 2"></path>
    <path d="M11 6a5 5 0 0 1-9 3v7h1c0 1.65 1.35 3 3 3s3-1.35 3-3h6c0 1.65 1.35 3 3 3s3-1.35 3-3h1v-4c0-.55-.47-1-1.02-1l-1.49-3h1.52l-.75-1.87a1 1 0 0 0-.93-.63h-8.355Q11 5.746 11 6M6 17.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M16 8h1.81l1.49 3H16zm2 9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"></path>
  </svg>
);
