/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconVolumeDown: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-volume-down pressed' : 'icon-volume-down'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M11.15 2.85 7 7H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3l4.15 4.15c.32.32.85.09.85-.35V3.21c0-.45-.54-.67-.85-.35Zm6.35 4.8a.76.76 0 0 0-1.13-.07c-.26.26-.3.69-.07.98a5.47 5.47 0 0 1 0 6.84c-.23.29-.2.71.07.98.32.32.85.29 1.13-.07.94-1.19 1.5-2.7 1.5-4.33s-.56-3.14-1.5-4.33"></path>
  </svg>
);
