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
        search-placeholder=${args['search-placeholder']}
      >
      </modus-wc-content-tree>
    `;
  },
};

export const UsingContentTreeItem: Story = {
  render: () => {
    return html`
      <modus-wc-content-tree>
        <modus-wc-tree-view>
          <modus-wc-tree-item
            checkbox=${true}
            label="Documents"
            .hasSubtree=${true}
            value="documents"
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
          <modus-wc-tree-item
            checkbox=${true}
            label="Resources"
            value="resources"
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder_closed"
              variant="solid"
            ></modus-wc-icon>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `;
  },
};
