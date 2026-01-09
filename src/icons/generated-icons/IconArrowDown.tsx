/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconArrowDown: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-arrow-down pressed' : 'icon-arrow-down'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M15 12h3.79c.45 0 .67.54.35.85l-6.44 6.44a.996.996 0 0 1-1.41 0l-6.44-6.44A.5.5 0 0 1 5.2 12h3.79V5c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v7Z"></path>
  </svg>
);
