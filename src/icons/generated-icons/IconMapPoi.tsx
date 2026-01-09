/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconMapPoi: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-map-poi pressed' : 'icon-map-poi'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M21.63 11.41a4.77 4.77 0 0 0-4.38-3.27 4.67 4.67 0 0 0-4.62 4.72v.04a4.78 4.78 0 0 0 3.27 4.56l.93 4.16a.443.443 0 0 0 .84 0l.93-4.16a4.78 4.78 0 0 0 3.03-6.04Zm-2.46 1.84c-.17.69-.74 1.26-1.43 1.43a1.983 1.983 0 0 1-2.41-2.41c.17-.69.74-1.26 1.43-1.43a1.983 1.983 0 0 1 2.41 2.41M8.05 16.33V3.82l5.44 1.98.63.23h.02v1.34c.93-.54 1.98-.86 3.08-.87h.06c1.09.04 2.11.36 3.01.89V3.13a.91.91 0 0 0-1.23-.86L14.1 4.09 8.31 1.98c-.1-.04-.21-.06-.31-.06s-.2.02-.3.05L2.55 3.76c-.37.13-.62.48-.62.87v14.5a.917.917 0 0 0 1.24.86l4.79-1.77 7 2.62-.46-2.06-6.47-2.45Z"></path>
  </svg>
);
