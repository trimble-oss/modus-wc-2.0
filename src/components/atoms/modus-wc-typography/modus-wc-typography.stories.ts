import { Meta, StoryObj } from '@storybook/web-components';
import { setModusWCMode, ModusWCMode } from '../../../utils/theme';
import { TypographyBodySize, TypographyVariant } from './modus-wc-typography';

interface TypographyArgs {
  ariaLabel: string;
  bodySize: TypographyBodySize;
  customClass: string;
  variant: TypographyVariant;
  weight: 'regular' | 'semibold' | 'bold';
  textCase: 'sentence' | 'title' | 'uppercase';
  content: string;
  mode: ModusWCMode;
}

const meta: Meta<TypographyArgs> = {
  title: 'Components/Atoms/Typography',
  component: 'modus-wc-typography',
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
    bodySize: {
      control: { type: 'select' },
      options: ['standard', 'small', 'mini'],
    },
    customClass: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'semibold', 'bold'],
    },
    textCase: {
      control: { type: 'select' },
      options: ['sentence', 'title', 'uppercase'],
    },
    content: { control: 'text' },
    mode: {
      control: { type: 'select' },
      options: ['default', 'dark', 'high-contrast'],
    },
  },
};

export default meta;

type Story = StoryObj<TypographyArgs>;

const Template: Story = {
  render: (args) => {
    setModusWCMode(args.mode);

    return `
      <modus-wc-typography 
        aria-label="${args.ariaLabel}"
        body-size="${args.bodySize}"
        custom-class="${args.customClass}"
        variant="${args.variant}"
        weight="${args.weight}"
        text-case="${args.textCase}"
      >${args.content}</modus-wc-typography>
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    ariaLabel: 'Example typography',
    bodySize: 'standard',
    content: 'The quick brown fox jumps over the lazy dog',
    customClass: '',
    mode: 'default',
    textCase: 'sentence',
    variant: 'p',
    weight: 'regular',
  },
};
