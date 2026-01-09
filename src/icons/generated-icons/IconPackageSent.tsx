/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPackageSent: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-package-sent pressed' : 'icon-package-sent'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M1.5 13h5.53v-1H1.5c-.28 0-.5.22-.5.5s.22.5.5.5m2.53 4H1.5c-.28 0-.5.22-.5.5s.22.5.5.5h5.53v-1zm16.5-10.17-8.56-2.84-2.59.88 8.18 3.07 2.98-1.11ZM9 14.5H3.47c-.28 0-.5.22-.5.5s.22.5.5.5H9zm11.96-6.76-2.88 1.07v3.31l-2 .77V9.56l-3.58 1.33v8.47c0 .72.74 1.2 1.39.9l6.5-2.9c.36-.16.59-.51.59-.91l-.02-8.72ZM6.35 5.9l-2.81.96L12.06 10l2.61-.97-8.31-3.12ZM3 10.51h5.52v2.5h1.97v4H8.52v2.5l1.58.77c.66.3 1.4-.18 1.4-.9v-8.52L2.99 7.71l.02 2.79Z"></path>
  </svg>
);
