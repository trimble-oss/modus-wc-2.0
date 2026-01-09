/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconStarOutlined: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-star-outlined pressed' : 'icon-star-outlined'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m12 6.74 1.19 2.81.47 1.11 1.2.1 3.03.26-2.31 2-.91.79.27 1.18.69 2.97-2.61-1.58-1.03-.62-1.03.62-2.61 1.58.69-2.97.27-1.18-.91-.79-2.31-2 3.03-.26 1.2-.1.47-1.11 1.19-2.81m0-4.24c-.21 0-.42.12-.52.35L8.95 8.77l-6.42.54c-.5.04-.7.67-.32 1l4.87 4.22-1.46 6.27c-.09.38.21.7.55.7.1 0 .2-.03.29-.08l5.52-3.33 5.52 3.33a.568.568 0 0 0 .84-.62l-1.46-6.27 4.87-4.22c.38-.33.18-.95-.32-1l-6.42-.54-2.51-5.92a.57.57 0 0 0-.52-.35"></path>
  </svg>
);
