/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconClockAdd: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-clock-add pressed' : 'icon-clock-add'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19 12.03c-1.65 0-3-1.35-3-3-1.65 0-3-1.35-3-3 0-.62.19-1.19.51-1.66-.8-.23-1.64-.36-2.51-.36a9 9 0 1 0 9 9c0-.38-.03-.76-.08-1.13-.29.09-.6.16-.92.16Zm-4.33 4.65c-.2.2-.45.29-.71.29s-.51-.1-.71-.29l-2.97-2.97a1 1 0 0 1-.29-.71V9c0-.55.45-1 1-1s1 .45 1 1v3.59l2.68 2.68c.39.39.39 1.02 0 1.41M22 5.03h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1"></path>
  </svg>
);
