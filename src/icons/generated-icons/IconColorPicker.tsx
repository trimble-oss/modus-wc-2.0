/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconColorPicker: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-color-picker pressed' : 'icon-color-picker'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m11.74 5.23-.71.71c-.39.39-.39 1.03 0 1.42l.71.7-7.71 7.71-1.74 4.29c-.08.19-.03.4.11.54l1.03 1.03c.14.14.35.19.54.11L8.26 20l7.71-7.71.7.71c.39.39 1.03.39 1.42 0l.71-.71a.996.996 0 0 0 0-1.41l-.75-.75 2.76-2.76c1.15-1.15 1.32-3.04.23-4.25A2.993 2.993 0 0 0 16.69 3l-2.88 2.88-.66-.66a.996.996 0 0 0-1.41 0ZM5.73 16.9l7.44-7.43 1.4 1.4-7.43 7.44-2.47 1.06z"></path>
  </svg>
);
