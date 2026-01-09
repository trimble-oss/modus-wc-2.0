/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconHammer: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-hammer pressed' : 'icon-hammer'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m21.31 9.18-.71-.71c-.2-.2-.51-.2-.71 0l-.71-.71v-.71l-1.41-1.41h-.71s-2.51-2.51-5.55-1.58c-.44.13-.51.74-.09.94 1.15.54 2.81 1.63 2.81 3.48l.35.35-4.24 4.24c-.2-.2-.51-.2-.71 0l-4.6 4.6c-.59.59-.59 1.54 0 2.12s1.54.59 2.12 0l4.6-4.6c.2-.2.2-.51 0-.71l4.24-4.24 1.06 1.06c-.2.2-.2.51 0 .71l.71.71c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41Z"></path>
  </svg>
);
