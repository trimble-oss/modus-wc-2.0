/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCloudDisconnected: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-cloud-disconnected pressed'
        : 'icon-cloud-disconnected'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M14.65 21.59c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L12 21.06l-1.59 1.59c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L10.94 20l-1.59-1.59c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L12 18.94l1.59-1.59c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.06 20zm.57-2.34-.75.75.75.75h6.03c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM2 20c0 .41.34.75.75.75h6.03l.75-.75-.75-.75H2.75c-.41 0-.75.34-.75.75m16.5-5.02c.32 0 .65-.03.97-.12a3.486 3.486 0 0 0 2.39-4.33 3.5 3.5 0 0 0-2.89-2.49c.1-.89-.04-1.77-.44-2.66-.69-1.56-2.04-2.82-3.7-3.22-2.66-.65-5.29.71-6.36 3.09-1.09-.35-2.3-.43-3.73.4-1.62.93-2.79 2.6-2.75 4.47a5.006 5.006 0 0 0 5 4.89h4.26v1.78l.75.75.75-.75V15h5.75Z"></path>
  </svg>
);
