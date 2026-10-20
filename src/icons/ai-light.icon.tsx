import { FunctionalComponent, h } from '@stencil/core';

interface Props {
  className?: string;
}

export const AiLightIcon: FunctionalComponent<Props> = ({ className }) => {
  return (
    <svg
      fill="none"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      class={className || ''}
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_46678_96576"
        style={{ 'mask-type': 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="5"
        y="4"
        width="22"
        height="24"
      >
        <path
          d="M5.91209 22.3372V28L10.9067 25.1578C8.99001 24.7509 7.24647 23.7658 5.91209 22.3372ZM10.8703 6.81674L5.91209 4V9.6281C7.3028 8.13878 9.09347 7.2002 10.8703 6.81649M19.3351 15.9713C19.3351 19.4507 16.4733 22.2714 12.943 22.2714C9.4128 22.2714 6.55099 19.4507 6.55099 15.9713C6.55099 12.4918 9.4128 9.67114 12.9433 9.67114C16.4738 9.67114 19.3353 12.4918 19.3353 15.9713M20.8878 15.9605C20.8878 11.6364 17.3313 8.13096 12.944 8.13096C8.55679 8.13096 5 11.6361 5 15.9605C5 20.2849 8.55654 23.7901 12.9438 23.7901C17.331 23.7901 20.8876 20.2847 20.8876 15.9605M22.0061 13.1584C22.5936 14.9962 22.5956 16.9918 21.9915 18.8501L27 16.0001C26.7633 15.8654 22.2969 13.3238 22.0063 13.1584"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_46678_96576)">
        <mask
          id="mask1_46678_96576"
          style={{ 'mask-type': 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="1"
          y="2"
          width="28"
          height="28"
        >
          <path
            d="M1.70374 2.79443H28.5006V29.206H1.70374V2.79443Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_46678_96576)">
          <mask
            id="mask2_46678_96576"
            style={{ 'mask-type': 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="1"
            y="2"
            width="28"
            height="28"
          >
            <path
              d="M1.58142 2.67139H28.6264V29.3274H1.58142V2.67139Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask2_46678_96576)">
            <mask
              id="mask3_46678_96576"
              style={{ 'mask-type': 'luminance' }}
              maskUnits="userSpaceOnUse"
              x="1"
              y="2"
              width="28"
              height="28"
            >
              <path
                d="M1.58142 2.67139H28.6264V29.3274H1.58142V2.67139Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask3_46678_96576)">
              <rect
                x="1.57251"
                y="2.66101"
                width="27.062"
                height="26.67"
                fill="url(#paint0_radial_46678_96576)"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_46678_96576"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(23.4259 24 -24.3528 22.9138 4.11881 4.66101)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.15"
            stop-color="#00E2FA"
            style={{
              'stop-color': 'color(display-p3 0.0000 0.8863 0.9804)',
              'stop-opacity': '1',
            }}
          />
          <stop
            offset="0.72"
            stop-color="#FF00CE"
            style={{
              'stop-color': 'color(display-p3 1.0000 0.0000 0.8078)',
              'stop-opacity': '1',
            }}
          />
        </radialGradient>
      </defs>
    </svg>
  );
};
