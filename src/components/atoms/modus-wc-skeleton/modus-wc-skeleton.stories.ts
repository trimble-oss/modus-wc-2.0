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

export const Template: Story = {
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
