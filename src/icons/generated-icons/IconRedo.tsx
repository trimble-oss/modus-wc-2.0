/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconRedo: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-redo pressed' : 'icon-redo'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M8.21 7H17V5.04c0-.42.48-.65.81-.39l3.7 2.96a.5.5 0 0 1 0 .78l-3.7 2.96c-.33.26-.81.03-.81-.39V9H8.18c-2.09 0-3.96 1.52-4.16 3.6A4.007 4.007 0 0 0 8 17h8c.55 0 1 .45 1 1s-.45 1-1 1H8c-3.57 0-6.42-3.13-5.95-6.79C2.44 9.19 5.16 7 8.21 7"></path>
  </svg>
);
