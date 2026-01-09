/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconDashboard: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-dashboard pressed' : 'icon-dashboard'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M6 13H5V9h1zm2-6H7v6h1zm2 1H9v5h1zm5 9h4c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4zm1 1v4c2.21 0 4-1.79 4-4zm3-13h-7v5h7zm-6 1h5v3h-5zm8-4H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H4V4h16v12h1c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1"></path>
  </svg>
);
