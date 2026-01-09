/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCosts: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-costs pressed' : 'icon-costs'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M7 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm.5 1.5H10V6a2 2 0 0 1-2 2h-.5zm0 9V12H8a2 2 0 0 1 2 2v.5zm13-6.5H20a2 2 0 0 1-2-2v-.5h2.5zm0 6.5H18V14a2 2 0 0 1 2-2h.5zm-4-4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"></path>
    <path d="M5 18a1 1 0 0 1-1-1V8H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1z"></path>
  </svg>
);
