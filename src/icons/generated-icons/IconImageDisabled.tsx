/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconImageDisabled: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-image-disabled pressed' : 'icon-image-disabled'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M3.485 2.068h-.002l-.776-.775a1 1 0 0 0-1.414 1.414l.775.776A2 2 0 0 0 2 4v16c0 1.1.9 2 2 2h16q.269-.001.517-.068l.776.775a1 1 0 0 0 1.414-1.414l-.775-.776v-.002l-5.02-5.02.026.029-2.13-2.13h.003l-3.937-3.937v.003L8.99 7.576h.003zm9.835 12.666 3.945 3.945L5.46 18.67c-.48 0-.73-.57-.41-.93l2.64-2.93c.22-.25.61-.25.83 0l2.36 2.63zM22 17.755 6.246 2H20c1.1 0 2 .9 2 2z"></path>
  </svg>
);
