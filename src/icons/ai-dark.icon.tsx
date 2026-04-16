import { FunctionalComponent, h } from '@stencil/core';

interface Props {
  className?: string;
}

export const AiDarkIcon: FunctionalComponent<Props> = ({ className }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 887 982"
      class={className || ''}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="gradient" cx="18%" cy="18%" r="70%">
          <stop offset="0%" stop-color="#FF00FF" />
          <stop offset="50%" stop-color="#9933FF" />
          <stop offset="100%" stop-color="#0066CC" />
        </radialGradient>
      </defs>
      <path
        d="m36.76 749.83v231.56l201.3-116.22c-77.25-16.64-147.52-56.92-201.3-115.34zm199.83-634.65-199.83-115.18v230.14c56.05-60.9 128.22-99.28 199.83-114.97m403.73 374.35c0-176.82-143.34-320.16-320.16-320.16s-320.17 143.33-320.17 320.16 143.34 320.16 320.16 320.16 320.16-143.34 320.16-320.16m45.08-114.58c23.68 75.15 23.76 156.75-.59 232.74l201.86-116.54c-9.54-5.51-189.55-109.44-201.26-116.2"
        fill="#fff"
      />
      <path
        d="m320.13 489.53c0 142.28 115.34 257.62 257.62 257.62s257.62-115.34 257.62-257.62-115.34-257.62-257.62-257.62-257.62 115.34-257.62 257.62"
        fill="url(#gradient)"
        transform="translate(-256, 0)"
      />
    </svg>
  );
};
