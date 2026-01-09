/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconOvercast: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-overcast pressed' : 'icon-overcast'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19.86 16.08c0-.08.02-.16.02-.25.03-1.4-1.08-2.56-2.48-2.59-1.03-.02-1.93.57-2.35 1.45a2.6 2.6 0 0 0-.68-.13 2.311 2.311 0 0 0-.1 4.62l5.31.11c.15 0 .3 0 .45-.05a1.62 1.62 0 0 0-.17-3.16m-2.43-4.34a4.03 4.03 0 0 1 3.73 2.75c.74-.87 1.04-2.07.7-3.24a3.5 3.5 0 0 0-2.89-2.49q.03-.27.03-.54c0-3.04-2.46-5.5-5.5-5.5-2.23 0-4.15 1.34-5.02 3.25-.47-.15-.96-.25-1.48-.25-2.76 0-5 2.24-5 5s2.24 5 5 5h3.7c.5-1.56 1.94-2.68 3.65-2.66.77-.85 1.89-1.34 3.07-1.32Z"></path>
  </svg>
);
