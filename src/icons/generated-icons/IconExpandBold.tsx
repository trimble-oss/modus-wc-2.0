/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconExpandBold: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-expand-bold pressed' : 'icon-expand-bold'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M7.41 5.3 8.5 4.21c.29-.29.37-.71.21-1.08a1 1 0 0 0-.93-.62H3.5c-.56 0-1 .44-1 1V7.8a1 1 0 0 0 1.7.72l1.09-1.09L7.1 9.25a1.499 1.499 0 1 0 2.12-2.12L7.4 5.32Zm-.3 9.47L5.3 16.59 4.21 15.5a.965.965 0 0 0-1.08-.21 1 1 0 0 0-.62.93v4.29c0 .56.44 1 1 1H7.8a1 1 0 0 0 .93-.62c.16-.37.07-.8-.21-1.08l-1.09-1.09 1.82-1.81a1.5 1.5 0 0 0 0-2.12c-.57-.57-1.56-.57-2.13 0Zm13.77.52a1 1 0 0 0-1.08.21l-1.09 1.09-1.81-1.82c-.57-.57-1.56-.57-2.13 0a1.5 1.5 0 0 0 0 2.12l1.82 1.81-1.09 1.09c-.29.29-.37.71-.21 1.08a1 1 0 0 0 .93.62h4.29c.56 0 1-.44 1-1V16.2a1 1 0 0 0-.62-.93ZM20.5 2.51h-4.29a1 1 0 0 0-.93.62c-.16.37-.07.8.21 1.08l1.09 1.09-1.82 1.81a1.499 1.499 0 1 0 2.12 2.12l1.81-1.82 1.09 1.09c.28.28.71.37 1.08.21a1 1 0 0 0 .62-.93V3.5c0-.56-.44-1-1-1Z"></path>
  </svg>
);
