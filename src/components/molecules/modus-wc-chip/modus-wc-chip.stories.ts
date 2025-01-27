import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { DaisyColor, DaisySize } from '../../types';

interface ChipArgs {
  'aria-label': string;
  color: DaisyColor;
  content: string;
  'custom-class'?: string;
  size: DaisySize;
  variant: 'default' | 'outline';
}

const meta: Meta<ChipArgs> = {
  title: 'Components/Chip',
  component: 'modus-wc-chip',
  args: {
    'aria-label': 'Example chip',
    color: 'primary',
    content: 'Chip',
    size: 'md',
    variant: 'default',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'accent',
        'neutral',
        'info',
        'success',
        'warning',
        'error',
      ],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'outline'],
    },
  },
};

export default meta;

type Story = StoryObj<ChipArgs>;

const Template: Story = {
  render: (args) => {
    return html` <modus-wc-chip
      aria-label=${args['aria-label']}
      color=${args.color}
      content=${args.content}
      size=${args.size}
      variant=${args.variant}
    />`;
  },
};

export const Default: Story = { ...Template };
