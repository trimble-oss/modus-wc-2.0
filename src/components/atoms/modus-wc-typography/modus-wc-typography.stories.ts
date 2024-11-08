import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  TypographySize,
  TypographyVariant,
  TypographyWeight,
} from './modus-wc-typography';

interface TypographyArgs {
  'aria-label': string;
  content: string;
  'custom-class': string;
  size: TypographySize;
  variant: TypographyVariant;
  weight: TypographyWeight;
}

const meta: Meta<TypographyArgs> = {
  title: 'Components/Atoms/Typography',
  component: 'modus-wc-typography',
  args: {
    'aria-label': 'Example typography',
    content: 'The quick brown fox jumps over the lazy dog',
    size: 'md',
    variant: 'p',
    weight: 'normal',
  },
  argTypes: {
    content: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
    },
    weight: {
      control: { type: 'radio' },
      options: ['light', 'normal', 'bold'],
    },
  },
};

export default meta;

type Story = StoryObj<TypographyArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-typography
        aria-label="${args['aria-label']}"
        ?custom-class="${args['custom-class']}"
        size="${args.size}"
        variant="${args.variant}"
        weight="${args.weight}"
        >${args.content}</modus-wc-typography
      >
    `;
  },
};

export const Default: Story = {
  ...Template,
};
