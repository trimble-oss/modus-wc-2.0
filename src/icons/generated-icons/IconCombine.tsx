/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCombine: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-combine pressed' : 'icon-combine'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M8.69 15.04A.4.4 0 0 0 8.5 15h-4c-.28 0-.5.22-.5.5s.22.5.5.5h2.79l-5.15 5.15c-.2.2-.2.51 0 .71a.485.485 0 0 0 .7 0l5.15-5.15v2.79c0 .28.22.5.5.5s.5-.22.5-.5v-4a.51.51 0 0 0-.31-.46ZM3.42 14h2.03c-.28-1.29-.15-2.66.43-3.88l8 8a6.02 6.02 0 0 1-3.88.44v2.02c.43.07.86.12 1.29.12 2.05 0 4.09-.78 5.66-2.34L5.64 7.05C3.75 8.94 3.02 11.55 3.42 14M21.86 2.15c-.2-.2-.51-.2-.71 0L16 7.3V4.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5v4a.51.51 0 0 0 .5.5h4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2.79l5.15-5.15c.2-.2.2-.51 0-.71M18.55 10c.28 1.3.15 2.66-.43 3.88l-8-8A6.02 6.02 0 0 1 14 5.44V3.42a8 8 0 0 0-1.29-.12c-2.05 0-4.09.78-5.66 2.34l11.31 11.31c1.89-1.89 2.62-4.5 2.22-6.95z"></path>
  </svg>
);
