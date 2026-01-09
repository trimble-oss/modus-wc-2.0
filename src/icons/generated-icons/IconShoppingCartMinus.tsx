/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconShoppingCartMinus: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-shopping-cart-minus pressed'
        : 'icon-shopping-cart-minus'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M10.75 19.5c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25 1.01-2.25 2.25-2.25 2.25 1.01 2.25 2.25m5.75-2.25c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25m2.44-4.7 1.33-4c.18-.53.09-1.12-.24-1.58s-.86-.73-1.42-.73h-2.6c0 .59-.21 1.18-.65 1.63s-.99.66-1.59.66-1.17-.23-1.59-.66L12 7.69l-.18.18c-.43.43-.99.66-1.59.66s-1.17-.23-1.59-.66c-.45-.45-.66-1.04-.65-1.63h-1.6l-.26-1.58c-.16-.97-.99-1.67-1.97-1.67H2.01c-.55 0-1 .45-1 1s.45 1 1 1h2.15l1.79 10.75c.12.73.74 1.25 1.48 1.25h10.58c.55 0 1-.45 1-1s-.45-1-1-1H7.85l-.21-1.25h9.64c.75 0 1.42-.48 1.66-1.2Zm-5.88-8.04 1.24-1.24c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0L12 3.45l-1.24-1.24c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1.24 1.24L9.7 5.75c-.29.29-.29.77 0 1.06s.77.29 1.06 0L12 5.57l1.24 1.24c.29.29.77.29 1.06 0s.29-.77 0-1.06z"></path>
  </svg>
);
