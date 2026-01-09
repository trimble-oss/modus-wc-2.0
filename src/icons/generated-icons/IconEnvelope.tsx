/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconEnvelope: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-envelope pressed' : 'icon-envelope'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21.49 5.68C21.12 5.26 20.59 5 20 5H4c-.6 0-1.13.27-1.49.68L12 10.86zm-5.77 5.43 5.69 7.31c.37-.36.59-.86.59-1.42V7.68zM2 7.68V17c0 .56.23 1.06.59 1.42l5.69-7.31zm10.48 5.19q-.225.12-.48.12c-.255 0-.33-.04-.48-.12l-2.35-1.28-5.7 7.33c.17.05.34.08.53.08h16c.18 0 .36-.03.53-.08l-5.7-7.33z"></path>
  </svg>
);
