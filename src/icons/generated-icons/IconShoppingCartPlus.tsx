/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconShoppingCartPlus: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-shopping-cart-plus pressed'
        : 'icon-shopping-cart-plus'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M10.75 19.5c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25 1.01-2.25 2.25-2.25 2.25 1.01 2.25 2.25m5.75-2.25c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25m2.44-4.7 1.33-4c.18-.53.09-1.12-.24-1.58s-.86-.73-1.42-.73h-2.29L13.6 8.96c-.47.47-1.1.73-1.76.73s-1.29-.26-1.77-.73L7.92 6.81c-.16-.17-.28-.36-.39-.57H6.39l-.26-1.58c-.16-.97-.99-1.67-1.97-1.67H2.01c-.55 0-1 .45-1 1s.45 1 1 1h2.15l1.79 10.75c.12.73.74 1.25 1.48 1.25h10.58c.55 0 1-.45 1-1s-.45-1-1-1H7.85l-.21-1.25h9.64c.75 0 1.42-.48 1.66-1.2Zm-9.9-8.14c-.39.38-.39 1 0 1.39l2.09 2.09c.39.39 1.02.39 1.41 0l4.42-4.41c.39-.38.39-1 0-1.39-.38-.39-1-.39-1.39 0l-3.72 3.72-1.4-1.4c-.38-.39-1-.39-1.39 0Z"></path>
  </svg>
);
