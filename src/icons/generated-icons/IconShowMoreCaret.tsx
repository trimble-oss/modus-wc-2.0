/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconShowMoreCaret: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-show-more-caret pressed' : 'icon-show-more-caret'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M4.5 14V7h14v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-16c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
    <path d="M6.5 11.5c0 .28.22.5.5.5h5.35c.49-.41 1.05-.75 1.65-1H7c-.28 0-.5.22-.5.5m10-2c0-.28-.22-.5-.5-.5H7c-.28 0-.5.22-.5.5s.22.5.5.5h9c.28 0 .5-.22.5-.5m-5 7.5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5m5.335 1.645 2.295-2.295a.5.5 0 0 0 0-.705.504.504 0 0 0-.71 0l-1.94 1.94-1.94-1.94a.5.5 0 0 0-.705.705l2.295 2.295a.5.5 0 0 0 .705 0"></path>
  </svg>
);
