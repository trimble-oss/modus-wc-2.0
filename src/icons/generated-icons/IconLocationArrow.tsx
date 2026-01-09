/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconLocationArrow: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-location-arrow pressed' : 'icon-location-arrow'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M3.19 10.06 19.7 2.98c.83-.36 1.67.48 1.31 1.31L13.93 20.8c-.35.82-1.5.81-1.84-.01l-2.59-6.3-6.3-2.59c-.82-.33-.82-1.49-.01-1.84"></path>
  </svg>
);
