/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSwap: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-swap pressed' : 'icon-swap'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M18.01 17H12c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35zM5.99 8.79V7H12c.55 0 1-.45 1-1s-.45-1-1-1H5.99V3.21c0-.45-.54-.67-.85-.35L2.36 5.65c-.19.2-.19.51 0 .71l2.78 2.79c.2.19.51.19.71 0a.5.5 0 0 0 .14-.35ZM8 18.5c-.8 0-1.49-.49-1.74-1.25s0-1.56.64-2.05L16.5 8c.35-.27.38-.65.29-.93s-.35-.57-.79-.57c-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.8 0 1.49.49 1.74 1.25s0 1.56-.64 2.05L7.5 16c-.35.27-.38.65-.29.93s.35.57.79.57c.28 0 .5.22.5.5s-.22.5-.5.5"></path>
  </svg>
);
