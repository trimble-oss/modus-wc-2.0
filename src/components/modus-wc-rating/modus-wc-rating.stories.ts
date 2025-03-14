import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusWcRatingVariant } from './modus-wc-rating';

interface RatingArgs {
  'allow-half'?: boolean;
  count: number;
  'custom-class'?: string;
  size?: 'sm' | 'md' | 'lg';
  value?: number;
  variant: ModusWcRatingVariant;
}

const meta: Meta<RatingArgs> = {
  title: 'Components/Rating',
  component: 'modus-wc-rating',
  args: {
    'allow-half': false,
    count: 5,
    'custom-class': '',
    size: 'md',
    value: 0,
    variant: 'star',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['star', 'heart', 'smiley', 'thumb'],
    },
  },
};

export default meta;

type Story = StoryObj<RatingArgs>;

export const Default: Story = {
  render: (args) => html`
    <modus-wc-rating
      aria-label="Rating scale component"
      allow-half=${ifDefined(args['allow-half'])}
      count=${args.count}
      custom-class=${ifDefined(args['custom-class'])}
      size=${ifDefined(args.size)}
      value=${ifDefined(args.value)}
      variant=${args.variant}
    ></modus-wc-rating>
  `,
};
