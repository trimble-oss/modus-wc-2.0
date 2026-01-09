/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconReply: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class={props.pressed ? 'icon-reply pressed' : 'icon-reply'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12.52 7.4V4a.5.5 0 0 0-.28-.45.53.53 0 0 0-.53.05l-8.77 6.8c-.12.09-.19.23-.19.39 0 .15.06.3.18.39l8.77 7.29c.15.12.36.15.53.07.18-.08.29-.26.29-.45V14.5c3.98-1 5.64 1.5 7.78 6.21.08.18.26.29.46.29.04 0 .08 0 .12-.02.23-.06.39-.28.38-.52-.42-5.71-.94-12.78-8.73-13.07Z"></path>
  </svg>
);
