/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconUndo: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-undo pressed' : 'icon-undo'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M15.79 7H7V5.04c0-.42-.48-.65-.81-.39l-3.7 2.96a.5.5 0 0 0 0 .78l3.7 2.96c.33.26.81.03.81-.39V9h8.82c2.09 0 3.96 1.52 4.16 3.6.23 2.38-1.64 4.4-3.98 4.4H8c-.55 0-1 .45-1 1s.45 1 1 1h8c3.57 0 6.42-3.13 5.95-6.79C21.56 9.19 18.84 7 15.79 7"></path>
  </svg>
);
