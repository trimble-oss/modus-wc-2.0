/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconBrightness: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-brightness pressed' : 'icon-brightness'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M5 12c0-.34.03-.67.08-1H3c-.55 0-1 .45-1 1 0 .56.45 1 1 1h2.08c-.05-.33-.08-.66-.08-1m1.4 4.19-1.48 1.48a.996.996 0 1 0 1.41 1.41l1.48-1.48c-.54-.4-1.01-.88-1.41-1.41M7.81 6.4 6.33 4.92a.996.996 0 1 0-1.41 1.41L6.4 7.81c.4-.54.88-1.01 1.41-1.41M13 5.08V3c0-.55-.45-1-1-1s-1 .45-1 1v2.08c.33-.05.66-.08 1-.08s.67.03 1 .08m4.6 2.73 1.48-1.48a.996.996 0 1 0-1.41-1.41L16.19 6.4c.54.4 1.01.88 1.41 1.41M18.92 11c.05.33.08.66.08 1s-.03.67-.08 1H21c.55 0 1-.45 1-1 0-.56-.45-1-1-1zm-2.73 6.6 1.48 1.48a.996.996 0 1 0 1.41-1.41l-1.48-1.48c-.4.54-.88 1.01-1.41 1.41M11 18.92V21c0 .55.45 1 1 1s1-.45 1-1v-2.08c-.33.05-.66.08-1 .08s-.67-.03-1-.08m2.2-12.04a5.267 5.267 0 0 0-6.32 6.32c.43 1.93 1.99 3.48 3.91 3.91 3.82.85 7.17-2.49 6.32-6.32-.43-1.93-1.99-3.48-3.91-3.91M8.25 12c0-2.07 1.68-3.75 3.75-3.75v7.5c-2.07 0-3.75-1.68-3.75-3.75"></path>
  </svg>
);
