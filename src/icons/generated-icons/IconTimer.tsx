/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTimer: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-timer pressed' : 'icon-timer'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M11.96 9.06c-2.45 0-4.44 1.99-4.44 4.44s1.99 4.44 4.44 4.44c1.42 0 2.69-.67 3.51-1.71l-3.51-2.73zm7.27.6.52-.52a.996.996 0 0 0 0-1.41l-1.27-1.27a.996.996 0 0 0-1.41 0l-.47.47c-.77-.55-1.64-.96-2.57-1.21V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h1v1.69a7.99 7.99 0 0 0-6.05 7.75c0 4.42 3.58 8 8 8s8-3.58 8-8c0-1.33-.33-2.57-.9-3.68.05-.04.11-.06.16-.11Zm-7.26 10.01c-3.43 0-6.22-2.79-6.22-6.22s2.79-6.22 6.22-6.22 6.22 2.79 6.22 6.22-2.79 6.22-6.22 6.22"></path>
  </svg>
);
