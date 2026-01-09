/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPolygonDragRectangle: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-polygon-drag-rectangle pressed'
        : 'icon-polygon-drag-rectangle'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M4.5 15.71V5.79A2.5 2.5 0 0 0 5.79 4.5h9.92c.25.57.71 1.03 1.29 1.29v4.24h2V5.8c.88-.39 1.5-1.27 1.5-2.29a2.5 2.5 0 0 0-2.5-2.5c-1.02 0-1.9.62-2.29 1.5H5.79c-.39-.88-1.27-1.5-2.29-1.5A2.5 2.5 0 0 0 1 3.51c0 1.02.62 1.9 1.5 2.29v9.92c-.88.39-1.5 1.27-1.5 2.29a2.5 2.5 0 0 0 2.5 2.5c1.02 0 1.9-.62 2.29-1.5h4.25v-2H5.79a2.5 2.5 0 0 0-1.29-1.29ZM18 2c.83 0 1.5.67 1.5 1.5S18.83 5 18 5s-1.5-.67-1.5-1.5S17.17 2 18 2M2 3.5C2 2.67 2.67 2 3.5 2S5 2.67 5 3.5 4.33 5 3.5 5 2 4.33 2 3.5m1.5 16c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5S5 17.17 5 18s-.67 1.5-1.5 1.5M22 17h-3v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1"></path>
  </svg>
);
