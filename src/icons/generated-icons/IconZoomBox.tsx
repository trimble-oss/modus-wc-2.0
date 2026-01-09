/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconZoomBox: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-zoom-box pressed' : 'icon-zoom-box'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M4 14H2v2c0 .55.45 1 1 1h2v-2H4zM2 4v2h2V5h1V3H3c-.55 0-1 .45-1 1m2 4H2v4h2zm6.57-5H6.86v2h3.71zm5.57 0h-3.71v2h3.71zm-2.01 8.94h-1.36v-1.36c0-.28-.22-.51-.51-.51s-.51.22-.51.51v1.36h-1.36c-.28 0-.51.22-.51.51s.22.51.51.51h1.36v1.36c0 .28.22.51.51.51s.51-.22.51-.51v-1.36h1.36c.28 0 .51-.22.51-.51s-.22-.51-.51-.51M20 3h-2v2h1v1h2V4c0-.55-.45-1-1-1m-1 9h2V8h-2zm1.44 7.32-3.11-3.1h-.57l-.33-.33a5.48 5.48 0 0 0 0-7.17 5.464 5.464 0 0 0-7.71-.55q-.45.39-.81.87c-1.32 1.73-1.47 3.99-.42 5.89a5.483 5.483 0 0 0 7.44 2.19q.51-.285.96-.66l.34.33v.57l3.1 3.1c.3.3.8.3 1.12 0 .3-.31.3-.8 0-1.12h-.01Zm-8.12-3.09h.01a3.912 3.912 0 0 1-3.79-4.82c.33-1.4 1.46-2.55 2.87-2.87a3.902 3.902 0 0 1 4.81 3.79c0 2.15-1.74 3.89-3.89 3.89Z"></path>
  </svg>
);
