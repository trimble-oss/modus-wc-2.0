import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ContentTreeArgs {
  'custom-class'?: string;
  'show-actions'?: boolean;
  'search-placeholder'?: string;
}

const meta: Meta<ContentTreeArgs> = {
  title: 'Components/Content Tree',
  component: 'modus-wc-content-tree',
  args: {
    'show-actions': false,
    'search-placeholder': 'Search...',
  },
  argTypes: {
    'show-actions': {
      control: { type: 'boolean' },
    },
    'search-placeholder': {
      control: { type: 'text' },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['itemSelect'],
    },
  },
};

export default meta;

type Story = StoryObj<ContentTreeArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-content-tree
        custom-class=${ifDefined(args['custom-class'])}
        show-actions=${args['show-actions']}
        search-placeholder=${args['search-placeholder']}
      >
      </modus-wc-content-tree>
    `;
  },
};

export const UsingSlot: Story = {
  render: (args) => {
    return html`
      <modus-wc-content-tree
        custom-class=${ifDefined(args['custom-class'])}
        show-actions=${args['show-actions']}
        search-placeholder=${args['search-placeholder']}
      >
        <modus-wc-menu>
          <modus-wc-menu-item
            label="Documents"
            value="documents"
            has-submenu="true"
            size="md"
            checkbox
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder_closed"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
            <modus-wc-menu .isSubMenu=${true}>
              <modus-wc-menu-item
                label="Reports.pdf"
                value="reports"
                size="md"
                checkbox
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="description"
                  variant="solid"
                  size="sm"
                ></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item
                label="Proposal.docx"
                value="proposal"
                size="md"
                checkbox
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="description"
                  variant="solid"
                  size="sm"
                ></modus-wc-icon>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-menu-item>
          <modus-wc-menu-item
            label="Projects"
            value="projects"
            has-submenu="true"
            size="md"
            checkbox
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder_closed"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
            <modus-wc-menu .isSubMenu=${true}>
              <modus-wc-menu-item
                label="Website Redesign"
                value="website"
                size="md"
                checkbox
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="description"
                  variant="solid"
                  size="sm"
                ></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item
                label="Client Work"
                value="client-work"
                has-submenu="true"
                size="md"
                checkbox
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="folder_closed"
                  variant="solid"
                  size="sm"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=${true}>
                  <modus-wc-menu-item
                    label="Design Mockups"
                    value="mockups"
                    size="md"
                    checkbox
                  >
                    <modus-wc-icon
                      slot="start-icon"
                      name="description"
                      variant="solid"
                      size="sm"
                    ></modus-wc-icon>
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-menu-item>
          <modus-wc-menu-item
            label="Resources"
            value="resources"
            has-submenu="true"
            size="md"
            checkbox
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder_closed"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
            <modus-wc-menu .isSubMenu=${true}>
              <modus-wc-menu-item
                label="Brand Guidelines.pdf"
                value="guidelines"
                size="md"
                checkbox
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="description"
                  variant="solid"
                  size="sm"
                ></modus-wc-icon>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-menu-item>
        </modus-wc-menu>
      </modus-wc-content-tree>
    `;
  },
};

export const SingleLevel: Story = {
  render: (args) => {
    return html`
      <modus-wc-content-tree
        custom-class=${ifDefined(args['custom-class'])}
        search-placeholder=${args['search-placeholder']}
      >
        <modus-wc-menu>
          <modus-wc-menu-item label="Home" value="home" size="md">
            <modus-wc-icon
              slot="start-icon"
              name="description"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-menu-item>

          <modus-wc-menu-item label="Settings" value="settings" size="md">
            <modus-wc-icon
              slot="start-icon"
              name="description"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-menu-item>

          <modus-wc-menu-item
            label="Profile"
            value="profile"
            size="md"
            selected="true"
          >
            <modus-wc-icon
              slot="start-icon"
              name="description"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-menu-item>
        </modus-wc-menu>
      </modus-wc-content-tree>
    `;
  },
};
