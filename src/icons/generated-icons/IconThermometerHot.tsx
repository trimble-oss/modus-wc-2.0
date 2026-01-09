/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconThermometerHot: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-thermometer-hot pressed' : 'icon-thermometer-hot'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M3.5 4.94h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5m0 3h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5m9 6.07V6.44c0-.28-.22-.5-.5-.5s-.5.22-.5.5v7.57c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93M7 10.44c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5m9 1.04V5.94c0-2.21-1.79-4-4-4s-4 1.79-4 4v5.54c-1.22 1.1-2 2.69-2 4.46 0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.77-.78-3.36-2-4.46m-4 8.46c-2.21 0-4-1.79-4-4 0-.35.06-.68.14-1 .27-1.04.95-1.91 1.86-2.44V5.94c0-1.1.9-2 2-2s2 .9 2 2v6.56c.91.53 1.59 1.4 1.86 2.44.08.32.14.65.14 1 0 2.21-1.79 4-4 4"></path>
  </svg>
);
