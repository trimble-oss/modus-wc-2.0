import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface SideNavigationArgs {
  'custom-class'?: string;
  expanded: boolean;
  'max-width': string;
  'collapse-on-click-outside'?: boolean;
}

const meta: Meta<SideNavigationArgs> = {
  title: 'Components/Side Navigation',
  component: 'modus-wc-side-navigation',
  args: {
    'collapse-on-click-outside': true,
    expanded: false,
    'max-width': '256px',
  },
  argTypes: {
    'max-width': {
      control: { type: 'text' },
      description:
        'Maximum width of the side navigation panel in an expanded state.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<SideNavigationArgs>;

export const Default: Story = {
  render: (args) => html`
    <style>
      .modus-wc-menu-item-labels {
        padding: 0 16px;
      }
    </style>
    <modus-wc-side-navigation
      collapse-on-click-outside=${args['collapse-on-click-outside']}
      custom-class=${ifDefined(args['custom-class'])}
      expanded=${args.expanded}
      max-width=${args['max-width']}
    >
      <modus-wc-menu size="lg">
        <modus-wc-menu-item label="menu" start-icon="menu"></modus-wc-menu-item>
        <modus-wc-menu-item label="home" start-icon="home"></modus-wc-menu-item>
        <modus-wc-menu-item
          label="profile"
          start-icon="person"
        ></modus-wc-menu-item>
        <modus-wc-menu-item
          label="settings"
          start-icon="gears"
        ></modus-wc-menu-item>
      </modus-wc-menu>
    </modus-wc-side-navigation>
  `,
};
