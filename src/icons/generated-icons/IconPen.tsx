/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPen: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-pen pressed' : 'icon-pen'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="m20.45 6.28-.44-.44.35-.35c.33-.33.33-.88 0-1.21l-.79-.79a.863.863 0 0 0-1.21 0l-.35.35-.44-.44a.616.616 0 0 0-.87 0l-1.23 1.23-1.43-1.44a.996.996 0 0 0-1.41 0L8.02 7.8c-.29.29-.29.77 0 1.06s.77.29 1.06 0l4.26-4.26 1.08 1.08-8.98 8.97 3.75 3.75L20.45 7.14c.24-.24.24-.63 0-.87ZM2.97 17.33v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15l1.26-1.26-3.75-3.75-1.26 1.26a.5.5 0 0 0-.15.35Z"></path>
  </svg>
);
