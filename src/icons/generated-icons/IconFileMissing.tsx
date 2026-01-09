/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFileMissing: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-file-missing pressed' : 'icon-file-missing'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12 15c-.83 0-1.5.67-1.5 1.5S11.17 18 12 18s1.5-.67 1.5-1.5S12.83 15 12 15m7.71-7.29L14.3 2.3a1 1 0 0 0-.71-.29H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.42c0-.27-.11-.52-.29-.71M18 20H6V4h7l5 5zM9.66 7.89c-.53.59-.84 1.37-.91 2.34l2.28.33c.05-.53.17-.9.35-1.11s.41-.32.69-.32c.26 0 .45.07.58.21s.19.33.19.58-.16.52-.48.82c-1.37 1.27-1.37 2.58-1.37 3.01v.26h2c0-.35 0-.64.09-.86s.35-.51.75-.87c.57-.52.95-.95 1.13-1.31s.28-.73.28-1.11c0-.93-.36-1.67-1.07-2.23-.53-.41-1.22-.62-2.07-.62-1.1 0-1.91.3-2.44.89Z"></path>
  </svg>
);
