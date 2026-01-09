/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconColumnProperties: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-column-properties pressed'
        : 'icon-column-properties'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M10.71 16H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v8.76c-.11-.02-.22-.04-.33-.04-.26 0-.51.05-.75.14l-.07.03v-.09c-.1-.56-.41-1.02-.84-1.33V4.01h-4v6.48c-.41.31-.71.77-.81 1.32v.08l-.08-.02-.11-.03V4.01h-4v10h.85l-.07.12c-.34.6-.34 1.3-.07 1.88Zm11.09 2.01c.21.16.26.46.13.69l-.4.69-.4.69a.53.53 0 0 1-.66.23l-1.08-.42c-.26.2-.56.38-.87.51l-.17 1.14c-.05.27-.27.46-.54.46h-1.6c-.27 0-.5-.2-.54-.46l-.17-1.12c-.32-.13-.62-.3-.89-.51l-1.06.41c-.24.1-.53 0-.66-.23l-.4-.69-.4-.69a.54.54 0 0 1 .13-.69l.87-.7c-.02-.17-.04-.36-.04-.54s.02-.36.04-.53l-.87-.7a.54.54 0 0 1-.13-.69l.4-.69.4-.69a.53.53 0 0 1 .66-.23l1.04.41c.28-.22.58-.4.91-.53l.17-1.1c.05-.27.27-.46.54-.46h1.6c.27 0 .5.2.54.46l.17 1.12c.32.13.62.31.89.52l1.06-.42c.25-.1.53 0 .66.23l.4.69.4.69c.13.23.08.52-.13.69l-.9.72c.03.17.04.34.04.51s-.02.34-.04.51zm-3.29-1.22c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5"></path>
  </svg>
);
