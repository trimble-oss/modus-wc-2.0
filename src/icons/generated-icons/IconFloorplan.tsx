/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFloorplan: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-floorplan pressed' : 'icon-floorplan'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21 4H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1H4V6h16v5h-3.5c-.28 0-.5.22-.5.5s.22.5.5.5H20v6h-9v-4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1"></path>
  </svg>
);
