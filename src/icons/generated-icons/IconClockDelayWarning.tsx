/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconClockDelayWarning: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-clock-delay-warning pressed'
        : 'icon-clock-delay-warning'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 2c5.5 0 10 4.5 10 10q0 .162-.005.323A3.003 3.003 0 0 0 19 9.5c-1.655 0-3 1.345-3 3v5c0 .653.21 1.257.564 1.75a3 3 0 0 0-.56 1.908A9.9 9.9 0 0 1 12 22C6.5 22 2 17.5 2 12S6.5 2 12 2M7.7 16.5c.4.4 1.1.4 1.5 0l3.6-3.6c.3-.3.4-.6.4-1v-5c0-.6-.5-1.1-1.1-1.1S11 6.3 11 6.9v4.7l-3.3 3.3c-.5.5-.5 1.1 0 1.6m10.506 3.893A1 1 0 0 0 18 21c0 .55.45 1 1 1s1-.45 1-1a1 1 0 0 0-.23-.635 1 1 0 0 0-1.564.029Z"></path>
    <path d="M19 18.5a1 1 0 0 1-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5a1 1 0 0 1-1 1"></path>
  </svg>
);
