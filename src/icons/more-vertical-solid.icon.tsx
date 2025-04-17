import { FunctionalComponent, h } from '@stencil/core';

interface Props {
  className?: string;
}

export const MoreVerticalSolidIcon: FunctionalComponent<Props> = ({
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class={`mi-solid mi-more-vertical ${className || ''}`}
      viewBox="0 0 24 24"
    >
      <path d="M10.59 10.59c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0 .78-2.05 0-2.83-2.05-.78-2.83 0m0-7c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0 .78-2.05 0-2.83-2.05-.78-2.83 0m0 14c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0 .78-2.05 0-2.83-2.05-.78-2.83 0" />
    </svg>
  );
};
