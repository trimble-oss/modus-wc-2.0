/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconClockCheckmark: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-clock-checkmark pressed' : 'icon-clock-checkmark'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10q.483 0 .954-.046l-1.472-1.483a3.044 3.044 0 0 1 .004-4.305 3.056 3.056 0 0 1 4.318 0l.021.021 3.246-3.267.005-.004a3.05 3.05 0 0 1 2.923-.797zM9.2 16.5c-.4.4-1.1.4-1.5 0-.5-.5-.5-1.1 0-1.6l3.3-3.3V6.9c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v5c0 .4-.1.7-.4 1z"></path>
    <path d="M21.983 15.732a1 1 0 0 0-1.418-1.41l-4.742 4.767-1.5-1.493a1 1 0 0 0-1.411 1.418l2.21 2.198a1 1 0 0 0 1.414-.004z"></path>
  </svg>
);
