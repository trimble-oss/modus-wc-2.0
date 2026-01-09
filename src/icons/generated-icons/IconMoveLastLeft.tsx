/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconMoveLastLeft: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-move-last-left pressed' : 'icon-move-last-left'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M4 16V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1s-1-.45-1-1m7.99-6.8c0-.44-.54-.67-.85-.35l-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79c.31.32.85.1.85-.35V13H18c.55 0 1-.45 1-1s-.45-1-1-1h-6.01z"></path>
  </svg>
);
