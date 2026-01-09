/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconMapMarkerMultiple: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-map-marker-multiple pressed'
        : 'icon-map-marker-multiple'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M3 9.2C2.96 5.3 6.1 2.04 10.01 2a7.3 7.3 0 0 1 2.181.41 7.21 7.21 0 0 1 4.45 4.54 7.24 7.24 0 0 1-4.59 9.15l-1.57 4.53c-.16.45-.79.45-.95 0L7.96 16.1A7.21 7.21 0 0 1 3 9.2m4.016.107A2.996 2.996 0 0 0 10 12a2.99 2.99 0 0 0 3-3 2.99 2.99 0 0 0-3-3 2.996 2.996 0 0 0-2.99 2.762"></path>
    <path d="m13.53 20.63-.995-2.874.305-.88a8.24 8.24 0 0 0 .893-14.868q.138-.006.278-.008c3.03.1 5.68 2.07 6.63 4.95a7.24 7.24 0 0 1-4.59 9.15l-1.57 4.53c-.16.45-.79.45-.95 0Z"></path>
  </svg>
);
