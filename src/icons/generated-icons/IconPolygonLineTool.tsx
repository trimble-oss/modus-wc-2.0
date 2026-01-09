/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPolygonLineTool: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-polygon-line-tool pressed'
        : 'icon-polygon-line-tool'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19.5 2A2.5 2.5 0 0 0 17 4.5c0 .32.07.63.18.91L5.41 17.18A2.5 2.5 0 0 0 4.5 17a2.5 2.5 0 0 0 0 5A2.5 2.5 0 0 0 7 19.5c0-.32-.07-.63-.18-.91L18.59 6.82c.28.11.59.18.91.18a2.5 2.5 0 0 0 0-5m-15 19c-.83 0-1.5-.67-1.5-1.5S3.67 18 4.5 18s1.5.67 1.5 1.5S5.33 21 4.5 21m15-15c-.83 0-1.5-.67-1.5-1.5S18.67 3 19.5 3s1.5.67 1.5 1.5S20.33 6 19.5 6"></path>
  </svg>
);
