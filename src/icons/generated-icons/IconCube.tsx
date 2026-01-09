/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCube: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-cube pressed' : 'icon-cube'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M10.79 12.74 3.77 8.82a.495.495 0 0 0-.74.44v7.87c0 .18.1.35.26.44l7.02 3.92c.33.19.74-.05.74-.44v-7.87c0-.18-.1-.35-.26-.44m9.46-3.92-7.02 3.92c-.16.09-.26.26-.26.44v7.87c0 .38.41.62.74.44l7.02-3.92c.16-.09.26-.26.26-.44V9.26c0-.38-.41-.62-.74-.44m-1.06-2.43-6.94-3.87a.53.53 0 0 0-.49 0L4.82 6.39c-.34.19-.34.68 0 .87l6.94 3.87c.15.08.34.08.49 0l6.94-3.87c.34-.19.34-.68 0-.87"></path>
  </svg>
);
