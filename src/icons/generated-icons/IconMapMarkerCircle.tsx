/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconMapMarkerCircle: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-map-marker-circle pressed'
        : 'icon-map-marker-circle'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M12.005 2c-3.505.036-6.32 2.958-6.283 6.453a6.465 6.465 0 0 0 4.445 6.184l1.407 4.06a.45.45 0 0 0 .852 0l1.407-4.06a6.49 6.49 0 0 0 4.114-8.2A6.47 6.47 0 0 0 12.005 2m-.01 8.963a2.685 2.685 0 0 1-2.688-2.69 2.685 2.685 0 0 1 2.689-2.688 2.685 2.685 0 0 1 2.688 2.689 2.685 2.685 0 0 1-2.688 2.689Z"></path>
    <path d="M8.43 14.762a.5.5 0 0 1-.174.686C7.12 16.126 6.5 17.05 6.5 18c0 .885.538 1.748 1.535 2.412.993.662 2.393 1.088 3.965 1.088s2.972-.426 3.965-1.088c.997-.664 1.535-1.527 1.535-2.412 0-.949-.62-1.874-1.756-2.552a.5.5 0 0 1 .512-.859c1.32.787 2.244 1.99 2.244 3.411 0 1.324-.805 2.461-1.98 3.244-1.179.786-2.778 1.256-4.52 1.256s-3.341-.47-4.52-1.256C6.305 20.461 5.5 19.325 5.5 18c0-1.42.925-2.624 2.244-3.41a.5.5 0 0 1 .685.172Z"></path>
  </svg>
);
