import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { AriaRole } from 'react';

interface SkeletonArgs {
  'aria-hidden'?: 'true' | 'false';
  'custom-class'?: string;
  height?: string;
  role?: AriaRole;
  shape?: 'circle' | 'rectangle';
  tabindex?: number;
  width?: string;
}

const meta: Meta<SkeletonArgs> = {
  title: 'Components/Skeleton',
  component: 'modus-wc-skeleton',
  args: {
    'aria-hidden': 'true',
    'custom-class': '',
    height: '0.875rem',
    role: 'presentation',
    shape: 'rectangle',
    tabindex: -1,
    width: '100%',
  },
  argTypes: {
    shape: {
      control: {
        type: 'inline-radio',
      },
      options: ['circle', 'rectangle'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<SkeletonArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-skeleton
        aria-hidden=${ifDefined(args['aria-hidden'])}
        custom-class=${ifDefined(args['custom-class'])}
        height=${ifDefined(args.height)}
        role=${ifDefined(args.role)}
        shape=${ifDefined(args.shape)}
        tabindex=${ifDefined(args.tabindex)}
        width=${ifDefined(args.width)}
      ></modus-wc-skeleton>
    `;
  },
};

export const Circle: Story = {
  render: () => {
    return html`
      <modus-wc-skeleton
        height="5rem"
        shape="circle"
        width="5rem"
      ></modus-wc-skeleton>
    `;
  },
};

export const Square: Story = {
  render: () => {
    return html`
      <modus-wc-skeleton height="5rem" width="5rem"></modus-wc-skeleton>
    `;
  },
};

export const Composed: Story = {
  render: () => {
    return html`
      <style>
        .skeleton-container {
          width: 13rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skeleton-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .skeleton-text {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      </style>
      <div class="skeleton-container">
        <div class="skeleton-profile">
          <modus-wc-skeleton
            height="4rem"
            shape="circle"
            width="4rem"
          ></modus-wc-skeleton>
          <div class="skeleton-text">
            <modus-wc-skeleton width="5rem"></modus-wc-skeleton>
            <modus-wc-skeleton width="7rem"></modus-wc-skeleton>
          </div>
        </div>
        <modus-wc-skeleton height="8rem"></modus-wc-skeleton>
      </div>
    `;
  },
};
