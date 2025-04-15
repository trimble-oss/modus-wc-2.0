import { FunctionalComponent, h } from '@stencil/core';

interface Props {
  className?: string;
}

export const ChevronDoubleLeftSolidIcon: FunctionalComponent<Props> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class={`mi-chevron-double-left ${className || ''}`}
    viewBox="0 0 24 24"
  >
    <path d="m14.42 12 3.88-3.88a.996.996 0 1 0-1.41-1.41L12.3 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01a.996.996 0 0 0 0-1.41zm-2.71-5.29a.996.996 0 0 0-1.41 0L5.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01s.39-1.02 0-1.41L7.83 12l3.88-3.88a.996.996 0 0 0 0-1.41" />
  </svg>
);
