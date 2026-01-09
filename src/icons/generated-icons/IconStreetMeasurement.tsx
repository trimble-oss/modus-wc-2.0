/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconStreetMeasurement: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-street-measurement pressed'
        : 'icon-street-measurement'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m4.85 14.12a.757.757 0 0 1-1-.36l-3.11-6.66v3.91c0 .41-.34.75-.75.75s-.75-.34-.75-.75V15.1l-3.11 6.66a.757.757 0 0 1-1 .36.74.74 0 0 1-.36-1L11.02 12H9.98c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-1.04l4.25 9.12c.18.38.01.82-.36 1ZM12 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m-1.5-6h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5"></path>
  </svg>
);
