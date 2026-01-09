/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPrinter: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-printer pressed' : 'icon-printer'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M10 19.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5m.5-1.5h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5m9.5-7v5h-3v-1h-1v7H8v-7H7v1H4v-5c0-1.65 1.35-3 3-3h1V5.5C8 4.67 8.67 4 9.5 4h5c.83 0 1.5.67 1.5 1.5V8h1c1.65 0 3 1.35 3 3m-5 4H9v6h6zm0-9.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5V8h6zm3 5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5h1c.28 0 .5-.22.5-.5"></path>
  </svg>
);
