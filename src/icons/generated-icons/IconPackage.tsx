/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPackage: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-package pressed' : 'icon-package'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m20.53 6.83-8.56-2.84-2.59.88 8.18 3.07 2.98-1.11Zm-17.55.88L3 10.5l.02 3 .02 2.91c0 .38.23.73.58.89l5.72 2.61.77.35c.66.3 1.4-.18 1.4-.9v-8.52L7.52 9.37 2.99 7.7Zm6-.83-1.47-.55-1.16-.43-2.81.96L12.06 10l2.61-.97L8.99 6.9Zm11.98.85L18.08 8.8v3.31l-2 .77V9.55l-3.58 1.33v8.47a.93.93 0 0 0 .27.68c.27.29.72.41 1.12.23l6.5-2.9c.36-.16.59-.51.59-.91z"></path>
  </svg>
);
