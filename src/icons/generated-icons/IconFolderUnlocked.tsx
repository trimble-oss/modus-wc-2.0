/**********************************************************************
  THIS IS AN AUTOMATICALLY GENERATED FILE, DO NOT EDIT DIRECTLY.
***********************************************************************/

import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../ModusIconMap';

export const IconFolderUnlocked: FunctionalComponent<IconProps> = (
  props: IconProps
) => (
  <svg
    class={
      props.pressed ? 'icon-folder-unlocked pressed' : 'icon-folder-unlocked'
    }
    height={props.size ?? '16'}
    width={props.size ?? '16'}
    viewBox="0 0 24 24"
    fill={props.color ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick ? (event) => props.onClick!(event) : undefined}
  >
    <path d="M23.78 14a2.73 2.73 0 0 0-2.64-2c-.72 0-1.52.27-2.13 1.01-.43.51-.62 1.18-.62 1.85v.94h-4.78c-.61 0-1.1.49-1.1 1.1v4.99c0 .61.49 1.1 1.1 1.1h6.6c.61 0 1.1-.49 1.1-1.1V16.9c0-.61-.49-1.1-1.1-1.1h-.72v-.97c0-.81.55-1.57 1.35-1.71a1.647 1.647 0 0 1 1.88 1.15c.07.24.28.42.53.42.37 0 .63-.35.53-.7Zm-6.89 6.25c-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1 1.1.49 1.1 1.1-.49 1.1-1.1 1.1m.03-5.95c.1-.85.42-1.63.93-2.25.83-1 2-1.56 3.29-1.56.07 0 .14.01.22.02-.34-.6-.98-1.02-1.74-1.02H7.18c-.97 0-1.8.7-1.97 1.65L4 17.99V6h5l2 2h10c.55 0 1-.45 1-1s-.45-1-1-1h-9l-1.71-1.71A1 1 0 0 0 9.58 4H3.99c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-3.09c0-1.43 1.17-2.6 2.6-2.6h3.32Z"></path>
  </svg>
);
