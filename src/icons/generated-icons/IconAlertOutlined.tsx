/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconAlertOutlined: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-alert-outlined pressed' : 'icon-alert-outlined'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 15.02c.36 0 .62-.26.66-.7l.39-5.04s.01-.1.01-.14c0-.63-.45-1.15-1.06-1.15s-1.06.51-1.06 1.15v.14l.4 5.04c.04.44.28.7.66.7m10.59 2.6L14.6 3.61c-.54-.95-1.51-1.51-2.6-1.51s-2.06.57-2.6 1.51L1.41 17.62c-.54.94-.53 2.06.01 2.99s1.51 1.49 2.59 1.49h15.97c1.08 0 2.05-.56 2.59-1.49s.55-2.05.01-2.99Zm-1.74 1.99c-.09.15-.34.5-.86.5H4.01c-.52 0-.78-.35-.86-.5a.97.97 0 0 1 0-1L11.14 4.6c.26-.45.69-.5.87-.5s.61.05.87.5l7.99 14.01a1 1 0 0 1 0 1ZM12 16.64c-.67 0-1.21.54-1.21 1.19s.54 1.21 1.21 1.21 1.21-.54 1.21-1.21-.54-1.19-1.21-1.19"></path>
  </svg>
);
