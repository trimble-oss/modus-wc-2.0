import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TypographyBodySize, TypographyVariant } from './modus-wc-typography';

interface TypographyArgs {
  'aria-label': string;
  'body-size': TypographyBodySize;
  'custom-class': string;
  variant: TypographyVariant;
  weight: 'regular' | 'semibold' | 'bold';
  'text-case': 'sentence' | 'title' | 'uppercase';
  content: string;
}

const meta: Meta<TypographyArgs> = {
  title: 'Components/Atoms/Typography',
  component: 'modus-wc-typography',
  argTypes: {
    'body-size': {
      control: { type: 'inline-radio' },
      options: ['standard', 'small', 'mini'],
    },
    variant: {
      control: { type: 'select' },
      options: ['body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
    },
    weight: {
      control: { type: 'inline-radio' },
      options: ['regular', 'semibold', 'bold'],
    },
    'text-case': {
      control: { type: 'inline-radio' },
      options: ['sentence', 'title', 'uppercase'],
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
        body-size="${args['body-size']}"
        ?custom-class="${args['custom-class']}"
        variant="${args.variant}"
        weight="${args.weight}"
        text-case="${args['text-case']}"
        >${args.content}</modus-wc-typography
      >
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    'aria-label': 'Example typography',
    'body-size': 'standard',
    content: 'The quick brown fox jumps over the lazy dog',
    'text-case': 'sentence',
    variant: 'p',
    weight: 'regular',
  },
};
