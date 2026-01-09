/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPackagePickup: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-package-pickup pressed' : 'icon-package-pickup'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M7.51 14H3.02l.02 2.91c0 .38.23.73.58.89l6.49 2.96c.66.3 1.4-.18 1.4-.9v-8.52L7.52 9.87v4.12Zm10.04-5.56 2.98-1.11-8.56-2.84-2.48.84v.08l8.07 3.03ZM6.01 12.5V6.01h1.4a.6.6 0 0 0 .45-1L4.96 1.7a.61.61 0 0 0-.91 0l-2.9 3.31c-.34.39-.06 1 .45 1H3v6.49h3Zm14.95-4.26-2.88 1.07v3.31l-2 .77v-3.33l-3.58 1.33v8.47c0 .72.74 1.2 1.39.9l6.5-2.9c.36-.16.59-.51.59-.91l-.02-8.72ZM8.98 7.39l-1.47-.55v1.99l4.54 1.67 2.61-.97L8.98 7.4Z"></path>
  </svg>
);
