/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconMove: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-move pressed' : 'icon-move'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m21.86 11.66-2.68-2.68a.503.503 0 0 0-.86.35v1.68h-5.34V5.68h1.69c.44 0 .66-.54.35-.86l-2.68-2.68c-.2-.2-.51-.2-.71 0L8.95 4.82c-.32.32-.09.86.35.86h1.68v5.34H5.65V9.33c0-.44-.54-.66-.86-.35l-2.68 2.68c-.2.2-.2.51 0 .71l2.68 2.68c.32.32.86.09.86-.35v-1.68h5.34v5.33H9.3c-.44 0-.66.54-.35.86l2.68 2.68c.2.2.51.2.71 0l2.68-2.68c.32-.32.09-.86-.35-.86h-1.68v-5.34h5.33v1.69c0 .44.54.66.86.35l2.68-2.68c.2-.2.2-.51 0-.71"></path>
  </svg>
);
