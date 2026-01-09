/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCollapse: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-collapse pressed' : 'icon-collapse'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m19.56 8.74-1.45-1.45 2.21-2.2a.96.96 0 0 0 0-1.35l-.07-.07a.96.96 0 0 0-1.35 0l-2.2 2.21-1.45-1.45a.5.5 0 0 0-.85.35v4.29c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85ZM8.74 4.45 7.29 5.9l-2.2-2.21a.96.96 0 0 0-1.35 0l-.07.07a.96.96 0 0 0 0 1.35l2.21 2.2-1.45 1.45a.5.5 0 0 0 .35.85h4.29c.28 0 .5-.22.5-.5V4.82c0-.45-.54-.67-.85-.35ZM4.45 15.27l1.45 1.45-2.21 2.2a.96.96 0 0 0 0 1.35l.07.07c.37.37.98.37 1.35 0l2.2-2.21 1.45 1.45a.5.5 0 0 0 .85-.35v-4.29c0-.28-.22-.5-.5-.5H4.82c-.45 0-.67.54-.35.85Zm10.82 4.29 1.45-1.45 2.2 2.21c.37.37.98.37 1.35 0l.07-.07a.96.96 0 0 0 0-1.35l-2.21-2.2 1.45-1.45a.5.5 0 0 0-.35-.85h-4.29c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35Z"></path>
  </svg>
);
