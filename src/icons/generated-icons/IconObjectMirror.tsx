/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconObjectMirror: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-object-mirror pressed' : 'icon-object-mirror'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 21.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v18c0 .41-.34.75-.75.75m9.25-5.42-6.75-3.9a.506.506 0 0 1 0-.87l6.75-3.9c.33-.19.75.05.75.43v7.79c0 .38-.42.63-.75.43ZM2 15.9V8.11c0-.38.42-.63.75-.43l6.75 3.9c.33.19.33.67 0 .87l-6.75 3.9a.502.502 0 0 1-.75-.43Z"></path>
  </svg>
);
