import { FunctionalComponent, h } from '@stencil/core';

interface Props {
  className?: string;
}

export const AppsSolidIcon: FunctionalComponent<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class={`mi-solid mi-apps ${className || ''}`}
      viewBox="0 0 24 24"
    >
      <path d="M5 8h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1m6 12h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1m-6 0h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1m0-6h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1m6 0h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1m5-9v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1m-5 3h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1m6 6h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1m0 6h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1" />
    </svg>
  );
};
