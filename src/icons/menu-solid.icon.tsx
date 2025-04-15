import { FunctionalComponent, h } from '@stencil/core';

interface Props {
  className?: string;
}

export const MenuSolidIcon: FunctionalComponent<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class={`mi-solid mi-menu ${className || ''}`}
      viewBox="0 0 24 24"
    >
      <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1" />
    </svg>
  );
};
