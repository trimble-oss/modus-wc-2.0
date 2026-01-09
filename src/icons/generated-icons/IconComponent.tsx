/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconComponent: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-component pressed' : 'icon-component'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m21.42 10.65-2.49-2.49c-.11.42-.32.81-.65 1.14a2.542 2.542 0 0 1-3.87-.33c-.55-.76-.61-1.81-.18-2.64.37-.7.96-1.1 1.6-1.27l-2.49-2.49c-.74-.74-1.95-.74-2.69 0L8.16 5.06c-.11-.42-.32-.81-.65-1.14a2.55 2.55 0 0 0-4.07.66c-.41.77-.36 1.66.08 2.41.38.65.94 1 1.54 1.17l-2.49 2.49c-.74.74-.74 1.95 0 2.69l8.08 8.08c.74.74 1.95.74 2.69 0l8.08-8.08c.74-.74.74-1.95 0-2.69"></path>
  </svg>
);
