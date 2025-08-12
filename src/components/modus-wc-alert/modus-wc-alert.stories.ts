import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface AlertArgs {
  'alert-description'?: string;
  'alert-title': string;
  'custom-class'?: string;
  delay?: number;
  dismissible?: boolean;
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
    dismissible: false,
    role: 'status',
    variant: 'info',
  },
  argTypes: {
    role: {
      control: { type: 'select' },
      options: ['', 'alert', 'log', 'marquee', 'status', 'timer'],
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
  delay=${ifDefined(args.delay)}
  dismissible=${ifDefined(args.dismissible)}
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
  delay=${ifDefined(args.delay)}
  dismissible=${ifDefined(args.dismissible)}
  icon=${ifDefined(args.icon)}
  role=${args.role}
  variant=${ifDefined(args.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="secondary"
    slot="button"
    variant="outlined"
  >View Messages</modus-wc-button>
</modus-wc-alert>
    `;
  },
};

export const WithCustomContent: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-alert
  id="alert-123"
  custom-class=${ifDefined(args['custom-class'])}
  delay=${ifDefined(args.delay)}
  dismissible=${ifDefined(args.dismissible)}
  icon=${ifDefined(args.icon)}
  role=${args.role}
  variant=${ifDefined(args.variant)}
>
  <div slot="content">New custom message!</div>
</modus-wc-alert>
    `;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - The 2.0 component can render a custom HTML title in the \`content\` slot.
  - The 1.0 component rendered a button, while the 2.0 component can render a custom HTML button in the \`button\` slot.

#### Prop Mapping

| 1.0 Prop          | 2.0 Prop    | Notes                                 |
|-------------------|-------------|---------------------------------------|
| aria-label        | aria-label  |                                       |
| button-aria-label |             | Not carried over, use \`button\` slot |
| button-text       |             | Not carried over, use \`button\` slot |
| dismissible       | dismissible |                                       |
| message           | alert-title |                                       |
| type              | variant     |                                       |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes                                 |
|--------------|--------------|---------------------------------------|
| actionClick  |              | Not carried over, use \`button\` slot |
| dismissClick | dismissClick |                                       |
        `,
      },
    },
    // To hide the actual story rendering and only show docs:
    controls: { disable: true },
    canvas: { disable: true },
  },
  // Simple render function or leave it empty
  render: () => html`<div></div>`,
};
