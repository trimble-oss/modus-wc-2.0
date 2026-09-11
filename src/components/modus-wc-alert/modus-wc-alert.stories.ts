import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

interface AlertArgs {
  'alert-description'?: string;
  'alert-title': string;
  'content-display-mode'?: 'default' | 'expandable';
  'custom-class'?: string;
  delay?: number;
  'disable-icon'?: boolean;
  dismissible?: boolean;
  dismissClick?: () => void;
  contentExpandedChange?: () => void;
  icon?: string;
  variant: 'error' | 'info' | 'neutral' | 'success' | 'warning';
  role: 'alert' | 'log' | 'marquee' | 'status' | 'timer';
}

const meta: Meta<AlertArgs> = {
  title: 'Components/Alert',
  component: 'modus-wc-alert',
  args: {
    'alert-description': 'You have 3 new messages.',
    'alert-title': 'New message!',
    'content-display-mode': 'default',
    'disable-icon': false,
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
      options: ['neutral', 'error', 'info', 'success', 'warning'],
    },
    'content-display-mode': {
      control: { type: 'select' },
      options: ['default', 'expandable'],
      table: {
        category: 'attributes',
        defaultValue: { summary: 'default' },
        type: { summary: "'default' | 'expandable'" },
      },
    },
    contentExpandedChange: {
      action: 'contentExpandedChange',
      table: {
        category: 'events',
        type: { summary: 'CustomEvent<{ expanded: boolean }>' },
      },
    },
  },
  decorators: [withActions],
  parameters: {
    layout: 'padded',
    actions: {
      handles: ['dismissClick', 'contentExpandedChange'],
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
  content-display-mode=${ifDefined(args['content-display-mode'])}
  custom-class=${ifDefined(args['custom-class'])}
  delay=${ifDefined(args.delay)}
  disable-icon=${ifDefined(args['disable-icon'])}
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

export const Expandable: Story = {
  ...Template,
  args: {
    'alert-title': 'System notification',
    'alert-description':
      'Your project export finished successfully. Open the downloads folder to review the package, share it with your team, or archive a copy for compliance. The archive includes metadata, checksums, and a manifest so auditors can verify what was exported and when. If anything looks wrong, re-run the export from project settings or contact support with the job ID shown in the activity log. This message is intentionally long so the body clamps to two lines with an ellipsis and the Show more control appears below the preview.',
    'content-display-mode': 'expandable',
    dismissible: true,
    variant: 'info',
  },
};

export const CustomButton: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-alert
  alert-description=${ifDefined(args['alert-description'])}
  alert-title=${args['alert-title']}
  content-display-mode=${ifDefined(args['content-display-mode'])}
  custom-class=${ifDefined(args['custom-class'])}
  delay=${ifDefined(args.delay)}
  disable-icon=${ifDefined(args['disable-icon'])}
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
};

export const WithCustomContent: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-alert
  id="alert-123"
  content-display-mode=${ifDefined(args['content-display-mode'])}
  custom-class=${ifDefined(args['custom-class'])}
  delay=${ifDefined(args.delay)}
  disable-icon=${ifDefined(args['disable-icon'])}
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

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('alert-shadow-host')) {
      const AlertShadowHost = createShadowHostClass<AlertArgs>({
        componentTag: 'modus-wc-alert',
        propsMapper: (v: AlertArgs, el: HTMLElement) => {
          const alertEl = el as unknown as {
            alertDescription: string;
            alertTitle: string;
            contentDisplayMode: string;
            customClass: string;
            delay: number;
            disableIcon: boolean;
            dismissible: boolean;
            icon: string;
            variant: string;
          };
          alertEl.alertDescription = v['alert-description'] ?? '';
          alertEl.alertTitle = v['alert-title'];
          alertEl.contentDisplayMode = v['content-display-mode'] ?? 'default';
          alertEl.customClass = v['custom-class'] || '';
          alertEl.delay = v.delay ?? 0;
          alertEl.disableIcon = Boolean(v['disable-icon']);
          alertEl.dismissible = Boolean(v.dismissible);
          alertEl.icon = v.icon ?? '';
          alertEl.variant = v.variant;
        },
      });
      customElements.define('alert-shadow-host', AlertShadowHost);
    }

    return html`<alert-shadow-host .props=${{ ...args }}></alert-shadow-host>`;
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

| 1.0 Prop          | 2.0 Prop               | Notes                                                                 |
|-------------------|------------------------|-----------------------------------------------------------------------|
| aria-label        | aria-label             |                                                                       |
| button-aria-label |                        | Not carried over, use \`button\` slot                               |
| button-text       |                        | Not carried over, use \`button\` slot                               |
| dismissible       | dismissible            |                                                                       |
| message           | alert-title            |                                                                       |
| type              | variant                |                                                                       |
|                   | content-display-mode   | New in 2.0. \`default\` (default) or \`expandable\` (two-line preview + Show more / Show less) |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes                                 |
|--------------|--------------|---------------------------------------|
| actionClick  |              | Not carried over, use \`button\` slot |
| dismissClick | dismissClick |                                       |
|              | contentExpandedChange | Expandable body expanded/collapsed |
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
