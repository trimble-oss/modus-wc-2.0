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
    <modus-wc-side-navigation
      .expanded=${args.expanded}
      .maxWidth=${args.maxWidth}
      .collapseOnClickOutside=${args['collapse-on-click-outside'] ?? true}
    >
      <modus-wc-side-navigation-item id="home" selected>
        <span slot="menu-icon">
          <modus-wc-icon
            aria-label="home"
            name="home"
            size="md"
          ></modus-wc-icon>
        </span>
        <span slot="menu-label">Home</span>
      </modus-wc-side-navigation-item>

      <modus-wc-side-navigation-item id="profile">
        <span slot="menu-icon">
          <modus-wc-icon
            aria-label="person"
            name="person"
            size="md"
          ></modus-wc-icon>
        </span>
        <span slot="menu-label">Profile</span>
      </modus-wc-side-navigation-item>

      <modus-wc-side-navigation-item id="settings">
        <span slot="menu-icon">
          <modus-wc-icon
            aria-label="gears"
            name="gears"
            size="md"
          ></modus-wc-icon>
        </span>
        <span slot="menu-label">Settings</span>
      </modus-wc-side-navigation-item>
    </modus-wc-side-navigation>
  `,
};

export const WithNavbar: Story = {
  render: (args) => html`
    <div style="display: flex; flex-direction: column; height: 100vh;">
      <modus-wc-navbar
        app-title="Modus App"
        logo="/assets/logo.svg"
        user-name="John Doe"
        user-avatar="/assets/avatar.png"
        .visibility=${{
          apps: true,
          help: true,
          mainMenu: true,
          notifications: true,
          search: true,
          searchInput: false,
          user: true,
        }}
        style="visibility: ${args.expanded ? 'hidden' : 'visible'};"
      ></modus-wc-navbar>
      <div style="display: flex; flex: 1; overflow: hidden;">
        <modus-wc-side-navigation
          .expanded=${args.expanded}
          .maxWidth=${args.maxWidth}
          .collapseOnClickOutside=${args['collapse-on-click-outside'] ?? true}
        >
          <modus-wc-side-navigation-item id="home" selected>
            <span slot="menu-icon">
              <modus-wc-icon
                aria-label="home"
                name="home"
                size="md"
              ></modus-wc-icon>
            </span>
            <span slot="menu-label">Home</span>
          </modus-wc-side-navigation-item>

          <modus-wc-side-navigation-item id="profile">
            <span slot="menu-icon">
              <modus-wc-icon
                aria-label="person"
                name="person"
                size="md"
              ></modus-wc-icon>
            </span>
            <span slot="menu-label">Profile</span>
          </modus-wc-side-navigation-item>

          <modus-wc-side-navigation-item id="settings">
            <span slot="menu-icon">
              <modus-wc-icon
                aria-label="gears"
                name="gears"
                size="md"
              ></modus-wc-icon>
            </span>
            <span slot="menu-label">Settings</span>
          </modus-wc-side-navigation-item>
        </modus-wc-side-navigation>
      </div>
    </div>
  `,
  name: 'With Navbar',
  parameters: {
    docs: {
      description: {
        story:
          'Side navigation with the modus-wc-navbar component at the top, passing app-title, logo, user-name, and user-avatar properties. The navbar visibility is toggled based on the side nav expanded state.',
      },
    },
  },
};
