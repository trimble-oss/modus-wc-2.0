/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconVolumeMute: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-volume-mute pressed' : 'icon-volume-mute'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M11.15 2.85 7 7H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3l4.15 4.15c.32.32.85.09.85-.35V3.21c0-.45-.54-.67-.85-.35Zm7.91 9.14 1.47-1.47c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0L18 10.93l-1.47-1.47c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1.47 1.47-1.47 1.47c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22L18 13.05l1.47 1.47c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"></path>
  </svg>
);
