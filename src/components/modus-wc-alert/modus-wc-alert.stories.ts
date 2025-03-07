import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface AlertArgs {
  'alert-description'?: string;
  'alert-title': string;
  'custom-class'?: string;
  delay: number;
  dismissable?: boolean;
  dismissClick?: () => void;
  icon?: string;
  variant: 'error' | 'info' | 'success' | 'warning';
  role: 'alert' | 'log' | 'marquee' | 'status' | 'timer';
}

const meta: Meta<AlertArgs> = {
  title: 'Components/Alert',
  component: 'modus-wc-alert',
  args: {
    'alert-description': 'You have 3 new messages.',
    'alert-title': 'New message!',
    dismissable: false,
    delay: 15000,
    role: 'status',
    variant: 'info',
  },
  argTypes: {
    role: {
      control: { type: 'select' },
      options: ['alert', 'log', 'marquee', 'status', 'timer'],
    },
    variant: {
      control: { type: 'select' },
      options: ['', 'error', 'info', 'success', 'warning'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<AlertArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
      <modus-wc-alert
        alert-description=${ifDefined(args['alert-description'])}
        alert-title=${args['alert-title']}
        custom-class=${ifDefined(args['custom-class'])}
        dismissable=${args.dismissable}
        icon=${ifDefined(args.icon)}
        role=${args.role}
        variant=${ifDefined(args.variant)}
      >
      </modus-wc-alert>
    `;
  },
};

export const Default: Story = { ...Template };

export const CustomButton: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
      <modus-wc-alert
        alert-description=${ifDefined(args['alert-description'])}
        alert-title=${args['alert-title']}
        custom-class=${ifDefined(args['custom-class'])}
        dismissable=${args.dismissable}
        icon=${ifDefined(args.icon)}
        role=${args.role}
        variant=${ifDefined(args.variant)}
      >
        <modus-wc-button
          aria-label="View messages"
          color="secondary"
          slot="button"
        >View Messages</modus-wc-button>
      </modus-wc-alert>
    `;
  },
};
