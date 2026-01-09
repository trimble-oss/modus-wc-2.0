/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconCalendarLoadingUnloading: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed
        ? 'icon-calendar-loading-unloading pressed'
        : 'icon-calendar-loading-unloading'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M13 15.5a2.5 2.5 0 0 1 2.5-2.5h6.51V4.03c0-.57-.46-1.03-1.03-1.03H18c0-.55-.45-1-1-1s-1 .45-1 1H8c0-.55-.45-1-1-1s-1 .45-1 1H3.03C2.46 3 2 3.46 2 4.03v16.95c0 .57.46 1.03 1.03 1.03H13zM4 7.29V5.7c0-.39.32-.71.71-.71H6v1c0 .55.45 1 1 1s1-.45 1-1v-1h8v1c0 .55.45 1 1 1s1-.45 1-1v-1h1.29c.39 0 .71.32.71.71v1.59c0 .39-.32.71-.71.71H4.71C4.32 8 4 7.68 4 7.29M22.5 15c.28 0 .5.22.5.5v7c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5v-7c0-.28.22-.5.5-.5H18v2h2v-2z"></path>
  </svg>
);
