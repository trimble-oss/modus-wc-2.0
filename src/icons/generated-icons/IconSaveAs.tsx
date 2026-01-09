/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSaveAs: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-save-as pressed' : 'icon-save-as'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M10.14 15.59c.54-2.72 2.73-4.91 5.45-5.45 2.02-.4 3.93.08 5.41 1.12V7.83c0-.53-.21-1.04-.59-1.41l-2.83-2.83C17.2 3.21 16.7 3 16.17 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.26a6.98 6.98 0 0 1-1.12-5.41M5 7.61V5h10v4H6.39zm12.02 4.38c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 5.36-2.27 2.27a.485.485 0 0 1-.7 0c-.2-.2-.2-.51 0-.71l1.5-1.5h-4.17c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4l-1.33-1.33c-.2-.2-.2-.51 0-.71s.51-.2.71 0l2.27 2.27c.2.2.2.51 0 .71Z"></path>
  </svg>
);
