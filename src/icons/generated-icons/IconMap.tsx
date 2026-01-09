/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconMap: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-map pressed' : 'icon-map'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20.97 2.32c-.11 0-.23.02-.35.06l-5.4 1.98-6.3-2.29a.96.96 0 0 0-.67 0l-5.6 1.95c-.4.14-.67.52-.67.94v15.78a1.003 1.003 0 0 0 1.35.94l5.29-1.96 6.29 2.22a.96.96 0 0 0 .64.01l5.71-1.87a1 1 0 0 0 .69-.95l.03-15.81c0-.57-.47-1-1-1Zm-5.72 17.62-5.97-2.11-.67-.23V4.08l5.93 2.16.69.25h.03v13.45Z"></path>
  </svg>
);
