/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCellProperties: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-cell-properties pressed' : 'icon-cell-properties'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20.9 17.29c.02-.17.04-.34.04-.51s-.01-.34-.04-.51l.9-.72a.54.54 0 0 0 .13-.69l-.4-.69-.4-.69a.53.53 0 0 0-.66-.23l-1.06.42c-.27-.21-.57-.39-.89-.52l-.17-1.12a.55.55 0 0 0-.54-.46h-1.6c-.27 0-.5.2-.54.46l-.17 1.1c-.33.13-.63.31-.91.53l-1.04-.41a.53.53 0 0 0-.66.23l-.4.69-.4.69c-.13.23-.08.53.13.69l.87.7c-.02.17-.04.35-.04.53s.02.37.04.54l-.87.7a.54.54 0 0 0-.13.69l.4.69.4.69c.13.23.42.33.66.23l1.06-.41c.27.21.57.38.89.51l.17 1.12c.04.27.27.46.54.46h1.6c.27 0 .49-.19.54-.46l.17-1.14c.31-.13.61-.31.87-.51l1.08.42c.25.1.53 0 .66-.23l.4-.69.4-.69c.13-.23.08-.53-.13-.69zm-3.89.99c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M12.5 9.49H19v1.5c0 .55.45 1 1 1h1V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6.71c-.27-.58-.27-1.28.07-1.88l.07-.12H5V9.5h6.5v3.38l.09-.16c.21-.37.53-.64.91-.81V9.5Zm-1-1H5v-4.5h6.5z"></path>
  </svg>
);
