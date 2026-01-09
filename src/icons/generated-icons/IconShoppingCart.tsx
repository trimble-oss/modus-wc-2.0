/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconShoppingCart: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-shopping-cart pressed' : 'icon-shopping-cart'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m18.94 12.55 1.33-4c.18-.53.09-1.12-.24-1.58s-.86-.73-1.42-.73H6.39l-.26-1.58c-.16-.97-.99-1.67-1.97-1.67H2.01c-.55 0-1 .45-1 1s.45 1 1 1h2.15l1.79 10.75c.12.73.74 1.25 1.48 1.25h10.58c.55 0 1-.45 1-1s-.45-1-1-1H7.85l-.21-1.25h9.64c.75 0 1.42-.48 1.66-1.2ZM8.5 17.25c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25m8 0c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25"></path>
  </svg>
);
