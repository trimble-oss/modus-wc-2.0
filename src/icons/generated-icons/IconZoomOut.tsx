/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconZoomOut: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-zoom-out pressed' : 'icon-zoom-out'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12.49 9.5H7.5c-.28 0-.5.22-.5.5s.22.5.5.5h4.99c.28 0 .5-.22.5-.5s-.22-.5-.5-.5m7.74 9.32-3.88-3.88-.66.05-.41-.41c2.44-2.81 2.28-7.1-.5-9.7-2.67-2.5-7.01-2.46-9.64.08a6.99 6.99 0 0 0-.08 9.98c2.61 2.61 6.77 2.72 9.52.34l.41.41-.05.65 3.89 3.89a.996.996 0 1 0 1.41-1.41Zm-6.69-5.29a5.016 5.016 0 0 1-7.08 0 5.016 5.016 0 0 1 0-7.08 5.016 5.016 0 0 1 7.08 0 5.016 5.016 0 0 1 0 7.08"></path>
  </svg>
);
