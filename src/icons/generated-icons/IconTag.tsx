/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconTag: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-tag pressed' : 'icon-tag'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M16.06 19H3.02a1 1 0 0 1-1-.998l-.02-12A1 1 0 0 1 3 5h13.04a1 1 0 0 1 .758.35l4.866 5.675a1.5 1.5 0 0 1 .001 1.95L16.82 18.65a1 1 0 0 1-.76.35"></path>
  </svg>
);
