import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ContentTreeArgs {
  'custom-class'?: string;
  'search-placeholder'?: string;
}

const meta: Meta<ContentTreeArgs> = {
  title: 'Components/Content Tree',
  component: 'modus-wc-content-tree',
  args: {
    'search-placeholder': 'Search...',
  },
  argTypes: {
    'search-placeholder': {
      control: { type: 'text' },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['itemSelect', 'treeActionClick'],
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
        search-placeholder=${args['search-placeholder']}
      >
      </modus-wc-content-tree>
    `;
  },
};

export const UsingContentTreeItem: Story = {
  render: () => {
    const actions = [
      {
        id: 'view',
        label: 'View',
        icon: 'visibility_on',
        ariaLabel: 'View item',
      },
      {
        id: 'edit',
        label: 'Edit',
        icon: 'pencil',
        ariaLabel: 'Edit item',
      },
      {
        id: 'delete',
        label: 'Delete',
        icon: 'delete',
        ariaLabel: 'Delete item',
      },
    ];

    return html`
      <modus-wc-content-tree>
        <modus-wc-tree-view>
          <modus-wc-tree-item
            checkbox=${true}
            label="Resources"
            value="resources"
            .treeItemActions=${actions}
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder_closed"
              variant="solid"
            ></modus-wc-icon>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            checkbox=${true}
            label="Documents"
            .hasSubtree=${true}
            value="documents"
            .treeItemActions=${actions}
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder_closed"
              variant="solid"
            ></modus-wc-icon>
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item
                checkbox=${true}
                label="Report.pdf"
                value="report"
                .treeItemActions=${actions}
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="folder_closed"
                  variant="solid"
                ></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item
                checkbox=${true}
                label="Proposal.docx"
                value="proposal"
                .treeItemActions=${actions}
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="folder_closed"
                  variant="solid"
                ></modus-wc-icon>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            checkbox=${true}
            label="Projects"
            .hasSubtree=${true}
            value="projects"
            .treeItemActions=${actions}
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder_closed"
              variant="solid"
            ></modus-wc-icon>
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item
                checkbox=${true}
                label="Website Redesign"
                value="website"
                .treeItemActions=${actions}
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="folder_closed"
                  variant="solid"
                ></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item
                checkbox=${true}
                label="Client Work"
                .hasSubtree=${true}
                value="client-work"
                .treeItemActions=${actions}
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="folder_closed"
                  variant="solid"
                ></modus-wc-icon>
                <modus-wc-tree-view .isSubList=${true}>
                  <modus-wc-tree-item
                    checkbox=${true}
                    label="Design Mockups"
                    value="mockups"
                    .treeItemActions=${actions}
                  >
                    <modus-wc-icon
                      slot="start-icon"
                      name="folder_closed"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `;
  },
};

export const WithActions: Story = {
  render: () => {
    const actions = [
      {
        id: 'view',
        label: 'View',
        icon: 'visibility_on',
        ariaLabel: 'View item',
      },
      {
        id: 'edit',
        label: 'Edit',
        icon: 'pencil',
        ariaLabel: 'Edit item',
      },
      {
        id: 'delete',
        label: 'Delete',
        icon: 'delete',
        ariaLabel: 'Delete item',
      },
    ];

    return html`
      <modus-wc-content-tree>
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            .hasSubtree=${true}
            value="documents"
            .treeItemActions=${actions}
          >
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item
                label="Report.pdf"
                value="report"
                .treeItemActions=${actions}
              >
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Proposal.docx"
                value="proposal"
                .treeItemActions=${actions}
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=${true}
            value="projects"
            .treeItemActions=${actions}
          >
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item
                label="Website Redesign"
                value="website"
                .treeItemActions=${actions}
              >
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Client Work"
                .hasSubtree=${true}
                value="client-work"
                .treeItemActions=${actions}
              >
                <modus-wc-tree-view .isSubList=${true}>
                  <modus-wc-tree-item
                    label="Design Mockups"
                    value="mockups"
                    .treeItemActions=${actions}
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Resources"
            value="resources"
            .treeItemActions=${actions}
          >
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `;
  },
};
