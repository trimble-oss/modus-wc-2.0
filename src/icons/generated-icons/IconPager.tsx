/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPager: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-pager pressed' : 'icon-pager'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2m0 6h16V7H4zm11 3.066v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m-8.401 1.982a.5.5 0 0 0 .777-.416v-2.131a.5.5 0 0 0-.777-.416L5 14.15a.5.5 0 0 0 0 .832zm5.153-1.897-1.599-1.066a.5.5 0 0 0-.777.416v2.131a.5.5 0 0 0 .777.416l1.599-1.065a.5.5 0 0 0 0-.832"></path>
  </svg>
);
