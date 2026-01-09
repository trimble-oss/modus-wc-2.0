/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconMapEdit: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-map-edit pressed' : 'icon-map-edit'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m8.76 15.76-.54-.18V4.66l4.79 1.74.56.2h.02v6.81l4.95-4.95c.14-.14.3-.27.47-.37V4.04a.798.798 0 0 0-1.08-.76l-4.36 1.6-5.09-1.85a.83.83 0 0 0-.54 0L3.42 4.6a.81.81 0 0 0-.54.76V18.1a.807.807 0 0 0 1.09.76l4.27-1.58 1.1.39 1.27-1.27-1.83-.65Zm13.89-4.19-1.69-1.69a.724.724 0 0 0-1.02 0l-1.32 1.32 2.71 2.71 1.32-1.32c.28-.28.28-.74 0-1.02M9.97 19.85c-.07.07-.11.16-.11.26v2.2c0 .2.16.36.36.36h2.2c.09 0 .19-.04.25-.11l7.89-7.88-2.71-2.71z"></path>
  </svg>
);
