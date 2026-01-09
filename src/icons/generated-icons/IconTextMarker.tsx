/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTextMarker: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-text-marker pressed' : 'icon-text-marker'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M8.81 19.94 6.57 20l.85-1.81 1.81.85-.42.91Zm8.54-14.08-3.12 8.92c-.08.22-.22.42-.4.57l-3.75 2.98-2.65-1.24-.13-4.79c0-.24.05-.47.18-.67l4.81-8.13a1.23 1.23 0 0 1 1.6-.49l2.8 1.31c.59.27.87.94.65 1.55Zm-4.86 8.63L8.8 12.77l.09 3.35.97.45zm7 4.51h-8.6l-.47 1h9.06c.28 0 .5-.22.5-.5s-.22-.5-.5-.5Z"></path>
  </svg>
);
