/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconBattery0Horizontal: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-battery-0-horizontal pressed'
        : 'icon-battery-0-horizontal'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20 15.67V14h1c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-1V8.33C20 7.6 19.4 7 18.67 7H3.34C2.6 7 2 7.6 2 8.34v7.32C2 16.4 2.6 17 3.33 17h15.34c.73 0 1.33-.6 1.33-1.33M4 15V9h14v6z"></path>
  </svg>
);
