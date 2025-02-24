import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface AlertArgs {
  'alert-description'?: string;
  'alert-title': string;
  'custom-class'?: string;
  icon?: string;
  variant: 'error' | 'info' | 'success' | 'warning';
}

const meta: Meta<AlertArgs> = {
  title: 'Components/Alert',
  component: 'modus-wc-alert',
  args: {
    'alert-description': 'You have 3 new messages.',
    'alert-title': 'New message!',
    variant: 'info',
  },
  argTypes: {
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
  icon=${ifDefined(args.icon)}
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

export const Default: Story = { ...Template };

export const CloseIcon: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  modus-wc-button {
    align-items: center;
  }

  [data-theme='modus-classic-dark'] modus-wc-icon {
    color: #fff;
  }
</style>
<modus-wc-alert
  alert-description=${ifDefined(args['alert-description'])}
  alert-title=${args['alert-title']}
  custom-class=${ifDefined(args['custom-class'])}
  icon=${ifDefined(args.icon)}
  variant=${ifDefined(args.variant)}
>
  <modus-wc-button
    aria-label="notification button"
    color="secondary"
    size="sm"
    slot="button"
    variant="borderless"
  >
    <modus-wc-icon
      aria-label="notify icon"
      decorative=""
      name="close"
    ></modus-wc-icon>
  </modus-wc-button>
</modus-wc-alert>
    `;
  },
};
