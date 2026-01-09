/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPan: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-pan pressed' : 'icon-pan'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M15 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3m.46-6.85L12.71 2.4a.996.996 0 0 0-1.41 0L8.55 5.15A.5.5 0 0 0 8.9 6h6.21c.45 0 .67-.54.35-.85m3.39 10.31 2.75-2.75a.996.996 0 0 0 0-1.41l-2.75-2.75a.5.5 0 0 0-.85.35v6.21c0 .45.54.67.85.35M8.54 18.85l2.75 2.75c.39.39 1.02.39 1.41 0l2.75-2.75a.5.5 0 0 0-.35-.85H8.89c-.45 0-.67.54-.35.85M5.15 8.54 2.4 11.29a.996.996 0 0 0 0 1.41l2.75 2.75A.5.5 0 0 0 6 15.1V8.89c0-.45-.54-.67-.85-.35"></path>
  </svg>
);
