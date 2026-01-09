/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconItemDoesNotContain: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-item-does-not-contain pressed'
        : 'icon-item-does-not-contain'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 11h-4.93V8.93c0-.55-.45-1-1-1H8.92c-.55 0-1 .45-1 1V11H3c-.55 0-1 .45-1 1s.45 1 1 1h4.93v2.07c0 .55.45 1 1 1h6.15c.55 0 1-.45 1-1V13h4.93c.55 0 1-.45 1-1s-.45-1-1-1Zm-6.93 0v3.07H9.92V9.92h4.15v1.07Z"></path>
  </svg>
);
