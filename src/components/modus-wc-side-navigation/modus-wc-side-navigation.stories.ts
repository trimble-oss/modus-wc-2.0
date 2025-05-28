import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

interface SideNavigationArgs {
  expanded: boolean;
  maxWidth: string;
  'collapse-on-click-outside'?: boolean;
}

const meta: Meta<SideNavigationArgs> = {
  title: 'Components/Side Navigation',
  component: 'modus-wc-side-navigation',
  args: {
    'collapse-on-click-outside': true,
    expanded: false,
    maxWidth: '256px',
  },
  argTypes: {
    expanded: {
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
      },
    },
    'collapse-on-click-outside': {
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
      },
    },
    maxWidth: {
      control: 'text',
      name: 'max-width',
      table: {
        category: 'Attributes',
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A vertical navigation panel for organizing primary navigation and content areas in an application.
        `,
      },
    },
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
      .expanded=${args.expanded}
      .maxWidth=${args.maxWidth}
      .collapseOnClickOutside=${args['collapse-on-click-outside'] ?? true}
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
