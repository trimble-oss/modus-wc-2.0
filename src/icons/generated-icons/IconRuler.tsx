/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconRuler: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-ruler pressed' : 'icon-ruler'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21.9 6.34 17.66 2.1c-.78-.78-2.05-.78-2.83 0L2.1 14.83c-.78.78-.78 2.05 0 2.83l4.24 4.24c.78.78 2.05.78 2.83 0L21.9 9.17c.78-.78.78-2.05 0-2.83M7.76 16.95l-3.18-3.18.71-.71 3.18 3.18c.2.2.2.51 0 .71s-.51.2-.71 0m2.83-2.83-3.18-3.18.71-.71 3.18 3.18c.2.2.2.51 0 .71s-.51.2-.71 0m2.83-2.83-3.18-3.18.71-.71 3.18 3.18c.2.2.2.51 0 .71s-.51.2-.71 0m2.83-2.83-3.18-3.18.71-.71 3.18 3.18c.2.2.2.51 0 .71s-.51.2-.71 0"></path>
  </svg>
);
