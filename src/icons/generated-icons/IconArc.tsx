/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconArc: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-arc pressed' : 'icon-arc'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 18c-.55 0-1-.45-1-1 0-4.41-3.59-8-8-8s-8 3.59-8 8c0 .55-.45 1-1 1s-1-.45-1-1C2 11.49 6.49 7 12 7s10 4.49 10 10c0 .55-.45 1-1 1"></path>
  </svg>
);
