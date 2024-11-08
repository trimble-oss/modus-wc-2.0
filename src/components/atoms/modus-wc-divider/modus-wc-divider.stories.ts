import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

interface DividerArgs {
  'aria-label': string;
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger';
  content: string;
  'custom-class': string;
  orientation: 'horizontal' | 'vertical';
  position: 'center' | 'end' | 'start';
  responsive: boolean;
}

const meta: Meta<DividerArgs> = {
  title: 'Components/Atoms/Divider',
  component: 'modus-wc-divider',
  args: {
    'aria-label': 'Example divider',
    color: 'tertiary',
    content: '',
    'custom-class': '',
    orientation: 'vertical',
    position: 'center',
    responsive: true,
  },
  argTypes: {
    'aria-label': {
      control: 'text',
    },
    color: {
      control: { type: 'radio' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'high-contrast',
        'success',
        'warning',
        'danger',
      ],
    },
    content: {
      control: 'text',
    },
    'custom-class': {
      control: 'text',
    },
    orientation: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
    },
    position: {
      control: { type: 'inline-radio' },
      options: ['start', 'center', 'end'],
    },
    responsive: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<DividerArgs>;

const Template: Story = {
  render: (args) => html`
    <modus-wc-divider
      aria-label="${args['aria-label']}"
      color="${args.color}"
      content="${args.content}"
      custom-class="${args['custom-class']}"
      orientation="${args.orientation}"
      position="${args.position}"
      responsive="${args.responsive}"
      style="${args.orientation === 'horizontal'
        ? 'display: flex; height: 100px'
        : ''}"
    ></modus-wc-divider>
  `,
};

export const Default: Story = { ...Template };
