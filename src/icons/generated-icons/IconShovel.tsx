/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconShovel: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-shovel pressed' : 'icon-shovel'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m10.06 15.35 7.03-7.03c.98.42 2.16.23 2.95-.57l1.41-1.41c.29-.29.29-.77 0-1.06l-2.74-2.74a.754.754 0 0 0-1.06 0l-1.41 1.41c-.8.8-.98 1.97-.57 2.95l-7.03 7.03-1.77-1.77-3.54 3.54c-1.36 1.36-1.36 3.59 0 4.95s3.59 1.36 4.95 0l3.54-3.54-1.77-1.77Zm7.25-8.66c-.46-.46-.46-1.22 0-1.68l.88-.88 1.68 1.68-.88.88c-.46.46-1.22.46-1.68 0"></path>
  </svg>
);
