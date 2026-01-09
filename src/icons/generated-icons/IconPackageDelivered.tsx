/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPackageDelivered: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-package-delivered pressed'
        : 'icon-package-delivered'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m20.96 7.74-2.88 1.07v3.31l-2 .77V9.56l-3.58 1.33v8.47c0 .72.74 1.2 1.39.9l6.5-2.9c.36-.16.59-.51.59-.91l-.02-8.72Zm-.43-.91-8.56-2.84-2.59.88 8.18 3.07 2.98-1.11ZM6.35 5.9l-2.81.96L12.06 10l2.61-.97-8.31-3.12ZM2.98 7.72 3 10.51v.74a6.465 6.465 0 0 1 8.5 2.32v-2.71L7.51 9.39zm3.01 4.29c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m2.78 3.87-3.2 3.2a.5.5 0 0 1-.35.15c-.13 0-.26-.05-.36-.15l-1.65-1.67a.5.5 0 0 1 0-.7c.19-.19.51-.19.7 0l1.3 1.31 2.84-2.85c.19-.19.51-.19.7 0s0 .01 0 .01c.19.19.19.51 0 .7Z"></path>
  </svg>
);
