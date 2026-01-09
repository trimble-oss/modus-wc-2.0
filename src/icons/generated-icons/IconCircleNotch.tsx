/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCircleNotch: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-circle-notch pressed' : 'icon-circle-notch'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16.79 4.66c-.37.5-.28 1.19.18 1.59a7.61 7.61 0 0 1 .48 11.05c-2.08 2.18-5.38 2.91-8.19 1.79a7.613 7.613 0 0 1-3.67-11.2 7.6 7.6 0 0 1 5.36-3.43c.59-.08 1.03-.57 1.03-1.17v-.04c0-.71-.63-1.27-1.33-1.18C5.69 2.75 1.86 7.08 2 12.28s4.49 9.57 9.71 9.71c5.65.16 10.28-4.38 10.28-10 0-2.92-1.29-5.67-3.49-7.54-.52-.44-1.32-.35-1.72.21Z"></path>
  </svg>
);
