import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface SkeletonArgs {
  'aria-describedby'?: string;
  'aria-label': string;
  'aria-labelledby'?: string;
  'custom-class'?: string;
  height?: string;
  shape?: 'circle' | 'rectangle';
  width?: string;
}

const meta: Meta<SkeletonArgs> = {
  title: 'Components/Skeleton',
  component: 'modus-wc-skeleton',
  args: {
    'aria-label': 'Skeleton',
    'custom-class': '',
    shape: 'rectangle',
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
        aria-describedby=${ifDefined(args['aria-describedby'])}
        aria-label=${args['aria-label']}
        aria-labelledby=${ifDefined(args['aria-labelledby'])}
        custom-class=${ifDefined(args['custom-class'])}
        height=${ifDefined(args.height)}
        shape=${ifDefined(args.shape)}
        width=${ifDefined(args.width)}
      ></modus-wc-skeleton>
    `;
  },
};

export const Circle: Story = {
  render: (args) => {
    return html`
      <modus-wc-skeleton
        aria-label=${args['aria-label']}
        height="5rem"
        shape="circle"
        width="5rem"
      ></modus-wc-skeleton>
    `;
  },
};

export const Square: Story = {
  render: (args) => {
    return html`
      <modus-wc-skeleton
        aria-label=${args['aria-label']}
        height="5rem"
        shape="rectangle"
        width="5rem"
      ></modus-wc-skeleton>
    `;
  },
};

export const Composed: Story = {
  render: (args) => {
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
            aria-label=${args['aria-label']}
            shape="circle"
            height="4rem"
            width="4rem"
          ></modus-wc-skeleton>
          <div class="skeleton-text">
            <modus-wc-skeleton
              aria-label=${args['aria-label']}
              width="5rem"
            ></modus-wc-skeleton>
            <modus-wc-skeleton
              aria-label=${args['aria-label']}
              width="7rem"
            ></modus-wc-skeleton>
          </div>
        </div>
        <modus-wc-skeleton
          aria-label=${args['aria-label']}
          height="8rem"
        ></modus-wc-skeleton>
      </div>
    `;
  },
};
