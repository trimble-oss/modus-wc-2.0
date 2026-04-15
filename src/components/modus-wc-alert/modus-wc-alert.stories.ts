import { withActions } from '@storybook/addon-actions/decorator';
import { expect, userEvent, within } from '@storybook/test';
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
  decorators: [withActions],
  parameters: {
    layout: 'padded',
    actions: {
      handles: ['dismissClick'],
    },
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

export const Default: Story = {
  ...Template,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Verify alert renders with title and description', async () => {
      const region = await canvas.findByRole('status');
      await expect(region).toBeInTheDocument();
      await expect(await canvas.findByText('New message!')).toBeInTheDocument();
      await expect(
        await canvas.findByText('You have 3 new messages.')
      ).toBeInTheDocument();
    });
  },
};

export const Dismissible: Story = {
  ...Template,
  args: {
    dismissible: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Verify dismiss control is present', async () => {
      const dismissBtn = await canvas.findByRole('button', {
        name: /notification button/i,
      });
      await expect(dismissBtn).toBeInTheDocument();
    });

    await step('Click dismiss emits dismissClick and removes alert', async () => {
      const host = canvasElement.querySelector('modus-wc-alert');
      await expect(host).toBeTruthy();

      let eventFired = false;
      host?.addEventListener(
        'dismissClick',
        () => {
          eventFired = true;
        },
        { once: true }
      );

      const dismissBtn = await canvas.findByRole('button', {
        name: /notification button/i,
      });
      await userEvent.click(dismissBtn);

      await expect(eventFired).toBe(true);
      await expect(canvasElement.querySelector('modus-wc-alert')).toBeNull();
    });
  },
};

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
    color="tertiary"
    slot="button"
    variant="outlined"
  >View Messages</modus-wc-button>
</modus-wc-alert>
    `;
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Verify slot button renders and is clickable', async () => {
      const actionBtn = await canvas.findByRole('button', {
        name: /view messages/i,
      });
      await expect(actionBtn).toBeInTheDocument();
      await userEvent.click(actionBtn);
      await expect(actionBtn).toBeInTheDocument();
    });
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
