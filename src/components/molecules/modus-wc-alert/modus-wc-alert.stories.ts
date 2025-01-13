import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface AlertArgs {
  'custom-class'?: string;
  description?: string;
  icon?: string;
  title: string;
  variant: 'error' | 'info' | 'success' | 'warning';
}

const meta: Meta<AlertArgs> = {
  title: 'Components/Alert',
  component: 'modus-wc-alert',
  args: {
    description: 'You have 3 new messages.',
    title: 'New message!',
    variant: 'info',
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['', 'error', 'info', 'success', 'warning'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<AlertArgs>;

// prettier-ignore
const Template: Story = {
  render: (args) => {
    return html`
<modus-wc-alert
  custom-class=${ifDefined(args['custom-class'])}
  description=${ifDefined(args.description)}
  icon=${ifDefined(args.icon)}
  title=${args.title}
  variant=${ifDefined(args.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="secondary"
    label="View Messages"
    slot="button"
  />
</modus-wc-alert>
    `;
  },
};

export const Default: Story = { ...Template };
