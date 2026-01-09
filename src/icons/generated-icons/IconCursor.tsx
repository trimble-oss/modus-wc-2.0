/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCursor: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-cursor pressed' : 'icon-cursor'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M19 10.94c.03-.39-.2-.76-.56-.91L6.24 5.06c-.1-.04-.2-.06-.31-.06h-.08c-.08 0-.16.02-.23.05-.03 0-.06.02-.08.03a.8.8 0 0 0-.27.18 1 1 0 0 0-.18.27l-.03.09c-.02.07-.04.15-.04.23v.09c0 .1.02.21.06.3l4.97 12.2c.14.34.47.56.84.56h.07c.39-.03.72-.31.81-.7l.99-4.29 4.03 4.03c.18.18.41.26.64.26s.46-.09.64-.26c.35-.35.35-.92 0-1.28l-4.03-4.03 4.29-.99c.38-.09.67-.42.7-.81Z"></path>
  </svg>
);
