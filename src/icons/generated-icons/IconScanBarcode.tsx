/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconScanBarcode: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-scan-barcode pressed' : 'icon-scan-barcode'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M4 14H2v4c0 1.1.9 2 2 2h4v-2H4zm2.03 2h3V8h-3zm3.97.02h1v-8h-1zM4 6h4V4H4c-1.1 0-2 .9-2 2v4h2zm13 2.02v8h1v-8zM20 18h-4v2h4c1.1 0 2-.9 2-2v-4h-2zm0-14h-4v2h4v4h2V6c0-1.1-.9-2-2-2m-5 12.02h1v-8h-1zm-3 0h2v-8h-2z"></path>
  </svg>
);
