/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconSwitchAccount: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-switch-account pressed' : 'icon-switch-account'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H4V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6.58 2.06c2.11-.4 3.93 1.42 3.53 3.53-.22 1.17-1.18 2.13-2.36 2.36-2.11.4-3.93-1.42-3.53-3.53.22-1.17 1.18-2.13 2.36-2.36m6.55 11.03c-.16.54-.65.91-1.21.91H9.25c-.57 0-1.06-.38-1.22-.92-.16-.58-.34-1.27-.34-1.6 0-.63.28-.99 1.25-1.43.97-.45 2.78-1.09 5.07-1.09 2.3 0 4.09.64 5.07 1.09.97.45 1.25.8 1.25 1.43 0 .34-.18 1.04-.35 1.62Z"></path>
  </svg>
);
