/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconPaperPlane: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={props.pressed ? 'icon-paper-plane pressed' : 'icon-paper-plane'}
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M20.533 12.908 5.838 19.69A2 2 0 0 1 3 17.874V14.5a2 2 0 0 1 2-2h9a.5.5 0 1 0 0-1H5a2 2 0 0 1-2-2V6.126A2 2 0 0 1 5.838 4.31l14.695 6.782a1 1 0 0 1 0 1.816"></path>
  </svg>
);
