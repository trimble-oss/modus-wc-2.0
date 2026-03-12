import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  ITreeItemData,
  ITreeItemElement,
} from './modus-wc-tree-item/modus-wc-tree-item';

interface ContentTreeArgs {
  'custom-class'?: string;
  'search-placeholder'?: string;
  'include-search'?: boolean;
  'include-actions'?: boolean;
  'items-reordering'?: boolean;
  items?: ITreeItemData[];
}

const meta: Meta<ContentTreeArgs> = {
  title: 'Components/Content Tree',
  component: 'modus-wc-content-tree',
  args: {
    'custom-class': '',
    'search-placeholder': 'Search...',
    'include-search': true,
    'include-actions': true,
    'items-reordering': false,
    items: undefined,
  },
  argTypes: {
    'search-placeholder': {
      control: { type: 'text' },
      table: { category: 'Content Tree' },
    },
    'include-search': {
      control: { type: 'boolean' },
      table: { category: 'Content Tree' },
    },
    'include-actions': {
      control: { type: 'boolean' },
      table: { category: 'Content Tree' },
    },
    'items-reordering': {
      control: { type: 'boolean' },
      table: { category: 'Content Tree' },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: [
        'itemSelect',
        'itemReordered',
        'itemsReordered',
        'treeActionClick',
        'selectionsChange',
        'dropdownOpened',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<ContentTreeArgs>;

const nestedItemsReorderingData: ITreeItemData[] = [
  {
    id: 'phase-1',
    label: 'Phase 1',
    children: [
      { id: 'backlog', label: 'Backlog' },
      { id: 'in-progress', label: 'In Progress' },
      { id: 'review', label: 'Review' },
    ],
  },
  {
    id: 'phase-2',
    label: 'Phase 2',
    children: [
      { id: 'qa', label: 'QA' },
      { id: 'uat', label: 'UAT' },
      { id: 'done', label: 'Done' },
    ],
  },
];

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A basic content tree with hierarchical structure. Items can be expanded and collapsed to navigate through the tree.',
      },
      source: {
        code: `
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" has-subtree="true" value="documents">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Report.pdf" value="report"></modus-wc-tree-item>
        <modus-wc-tree-item label="Proposal.docx" value="proposal"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Website Redesign" value="website"></modus-wc-tree-item>
        <modus-wc-tree-item label="Client Work" has-subtree="true" value="client-work">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item label="Design Mockups" value="mockups"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" value="resources"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
`,
      },
    },
  },
  render: (args) => {
    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        customClass=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
        .itemsReordering=${args['items-reordering']}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            .hasSubtree=${true}
            value="documents"
          >
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item label="Report.pdf" value="report">
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Proposal.docx" value="proposal">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=${true}
            value="projects"
          >
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item label="Website Redesign" value="website">
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Client Work"
                .hasSubtree=${true}
                value="client-work"
              >
                <modus-wc-tree-view .isSubList=${true}>
                  <modus-wc-tree-item label="Design Mockups" value="mockups">
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item label="Resources" value="resources">
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `;
  },
};

export const TreeItem: Story = {
  name: 'Tree Item',
  parameters: {
    docs: {
      description: {
        story:
          'A comprehensive example showing tree item features: checkbox, start icon, and actions.',
      },
      source: {
        code: `
<modus-wc-tree-view>
  <modus-wc-tree-item 
    label="Project Folder" 
    value="project" 
    checkbox="true"
    tree-item-actions='[
      {"id":"edit","icon":"pencil","label":"Edit"},
      {"id":"delete","icon":"trash","label":"Delete"}
    ]'>
    <modus-wc-icon slot="start-icon" name="folder"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-view>
`,
      },
    },
  },
  render: () => {
    const actions = [
      { id: 'edit', icon: 'pencil', label: 'Edit' },
      { id: 'delete', icon: 'trash', label: 'Delete' },
    ];
    return html`
      <modus-wc-tree-view>
        <modus-wc-tree-item
          label="Project Folder"
          value="project"
          .checkbox=${true}
          .treeItemActions=${actions}
        >
          <modus-wc-icon slot="start-icon" name="folder"></modus-wc-icon>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    `;
  },
};

export const TreeItemWithStartIcon: Story = {
  name: 'Tree Item - With Start Icon',
  parameters: {
    docs: {
      description: {
        story:
          'Tree items can display custom icons at the start using the start-icon slot. This is useful for representing file types, folders, or custom item types.',
      },
      source: {
        code: `
<modus-wc-tree-view>
  <modus-wc-tree-item label="Folder" value="folder">
    <modus-wc-icon slot="start-icon" name="folder"></modus-wc-icon>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Document.pdf" value="document">
    <modus-wc-icon slot="start-icon" name="description"></modus-wc-icon>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Image.png" value="image">
    <modus-wc-icon slot="start-icon" name="image"></modus-wc-icon>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
    <modus-wc-icon slot="start-icon" name="folder_open"></modus-wc-icon>
    <modus-wc-tree-view is-sub-list="true">
      <modus-wc-tree-item label="Code" value="code">
        <modus-wc-icon slot="start-icon" name="code"></modus-wc-icon>
      </modus-wc-tree-item>
    </modus-wc-tree-view>
  </modus-wc-tree-item>
</modus-wc-tree-view>
`,
      },
    },
  },
  render: () => {
    return html`
      <modus-wc-tree-view>
        <modus-wc-tree-item label="Folder" value="folder">
          <modus-wc-icon slot="start-icon" name="folder_closed"></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item label="Document.pdf" value="document">
          <modus-wc-icon slot="start-icon" name="file"></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item label="Image.png" value="image">
          <modus-wc-icon slot="start-icon" name="image"></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item
          label="Projects"
          .hasSubtree=${true}
          value="projects"
        >
          <modus-wc-icon slot="start-icon" name="folder_open"></modus-wc-icon>
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item label="Code" value="code">
              <modus-wc-icon slot="start-icon" name="code"></modus-wc-icon>
            </modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    `;
  },
};

export const EmptyState: Story = {
  name: 'Empty State',
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the content tree when no items are present. An empty state message is displayed.',
      },
      source: {
        code: `
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
</modus-wc-content-tree>
`,
      },
    },
  },
  render: (args) => {
    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        customClass=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
      >
      </modus-wc-content-tree>
    `;
  },
};

export const SingleSelection: Story = {
  name: 'Single Selection',
  parameters: {
    docs: {
      description: {
        story:
          'Content tree with single selection mode. Click on any tree item to select it. Only one item can be selected at a time.',
      },
      source: {
        code: `
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" has-subtree="true" value="documents">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Report.pdf" value="report"></modus-wc-tree-item>
        <modus-wc-tree-item label="Proposal.docx" value="proposal"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Website Redesign" value="website"></modus-wc-tree-item>
        <modus-wc-tree-item label="Client Work" has-subtree="true" value="client-work">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item label="Design Mockups" value="mockups"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" value="resources"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
`,
      },
    },
  },
  render: (args) => {
    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        customClass=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            .hasSubtree=${true}
            value="documents"
          >
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item label="Report.pdf" value="report">
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Proposal.docx" value="proposal">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=${true}
            value="projects"
          >
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item label="Website Redesign" value="website">
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Client Work"
                .hasSubtree=${true}
                value="client-work"
              >
                <modus-wc-tree-view .isSubList=${true}>
                  <modus-wc-tree-item label="Design Mockups" value="mockups">
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item label="Resources" value="resources">
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `;
  },
};

export const CheckboxSelection: Story = {
  name: 'Checkbox Selection',
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates tree items with checkboxes for multi-selection. Selecting a parent item will select all its children, and vice versa.',
      },
      source: {
        code: `
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item checkbox="true" label="Documents" has-subtree="true" value="documents">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item checkbox="true" label="Reports" has-subtree="true" value="reports">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item checkbox="true" label="Financial" has-subtree="true" value="financial">
              <modus-wc-tree-view is-sub-list="true">
                <modus-wc-tree-item checkbox="true" label="Q1 Report" value="q1-report"></modus-wc-tree-item>
                <modus-wc-tree-item checkbox="true" label="Q2 Report" value="q2-report"></modus-wc-tree-item>
              </modus-wc-tree-view>
            </modus-wc-tree-item>
            <modus-wc-tree-item checkbox="true" label="Annual Report" value="annual-report"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
        <modus-wc-tree-item checkbox="true" label="Presentations" has-subtree="true" value="presentations">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item checkbox="true" label="Team Meeting" value="team-meeting"></modus-wc-tree-item>
            <modus-wc-tree-item checkbox="true" label="Client Proposal" value="client-proposal"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item checkbox="true" label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item checkbox="true" label="Active" has-subtree="true" value="active">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item checkbox="true" label="Project Alpha" has-subtree="true" value="project-alpha">
              <modus-wc-tree-view is-sub-list="true">
                <modus-wc-tree-item checkbox="true" label="Source Code" value="source-code"></modus-wc-tree-item>
                <modus-wc-tree-item checkbox="true" label="Documentation" value="documentation"></modus-wc-tree-item>
              </modus-wc-tree-view>
            </modus-wc-tree-item>
            <modus-wc-tree-item checkbox="true" label="Project Beta" value="project-beta"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
        <modus-wc-tree-item checkbox="true" label="Completed" value="completed"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item checkbox="true" label="Resources" has-subtree="true" value="resources">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item checkbox="true" label="Templates" value="templates"></modus-wc-tree-item>
        <modus-wc-tree-item checkbox="true" label="Guidelines" value="guidelines"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item checkbox="true" label="Archive" value="archive"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
`,
      },
    },
  },
  render: (args) => {
    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        customClass=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            checkbox=${true}
            label="Documents"
            .hasSubtree=${true}
            value="documents"
          >
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item
                checkbox=${true}
                label="Reports"
                .hasSubtree=${true}
                value="reports"
              >
                <modus-wc-tree-view .isSubList=${true}>
                  <modus-wc-tree-item
                    checkbox=${true}
                    label="Financial"
                    .hasSubtree=${true}
                    value="financial"
                  >
                    <modus-wc-tree-view .isSubList=${true}>
                      <modus-wc-tree-item
                        checkbox=${true}
                        label="Q1 Report"
                        value="q1-report"
                      >
                      </modus-wc-tree-item>
                      <modus-wc-tree-item
                        checkbox=${true}
                        label="Q2 Report"
                        value="q2-report"
                      >
                      </modus-wc-tree-item>
                    </modus-wc-tree-view>
                  </modus-wc-tree-item>
                  <modus-wc-tree-item
                    checkbox=${true}
                    label="Annual Report"
                    value="annual-report"
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
              <modus-wc-tree-item
                checkbox=${true}
                label="Presentations"
                .hasSubtree=${true}
                value="presentations"
              >
                <modus-wc-tree-view .isSubList=${true}>
                  <modus-wc-tree-item
                    checkbox=${true}
                    label="Team Meeting"
                    value="team-meeting"
                  >
                  </modus-wc-tree-item>
                  <modus-wc-tree-item
                    checkbox=${true}
                    label="Client Proposal"
                    value="client-proposal"
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            checkbox=${true}
            label="Projects"
            .hasSubtree=${true}
            value="projects"
          >
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item
                checkbox=${true}
                label="Active"
                .hasSubtree=${true}
                value="active"
              >
                <modus-wc-tree-view .isSubList=${true}>
                  <modus-wc-tree-item
                    checkbox=${true}
                    label="Project Alpha"
                    .hasSubtree=${true}
                    value="project-alpha"
                  >
                    <modus-wc-tree-view .isSubList=${true}>
                      <modus-wc-tree-item
                        checkbox=${true}
                        label="Source Code"
                        value="source-code"
                      >
                      </modus-wc-tree-item>
                      <modus-wc-tree-item
                        checkbox=${true}
                        label="Documentation"
                        value="documentation"
                      >
                      </modus-wc-tree-item>
                    </modus-wc-tree-view>
                  </modus-wc-tree-item>
                  <modus-wc-tree-item
                    checkbox=${true}
                    label="Project Beta"
                    value="project-beta"
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
              <modus-wc-tree-item
                checkbox=${true}
                label="Completed"
                value="completed"
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            checkbox=${true}
            label="Resources"
            .hasSubtree=${true}
            value="resources"
          >
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item
                checkbox=${true}
                label="Templates"
                value="templates"
              >
              </modus-wc-tree-item>
              <modus-wc-tree-item
                checkbox=${true}
                label="Guidelines"
                value="guidelines"
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item checkbox=${true} label="Archive" value="archive">
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `;
  },
};

export const DisabledSelection: Story = {
  name: 'Disabled Selection',
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates tree items with disabled state. Disabled items cannot be selected or interacted with.',
      },
      source: {
        code: `
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" value="documents"></modus-wc-tree-item>
    <modus-wc-tree-item label="Archives" value="archives" disabled="true"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Website Redesign" value="website"></modus-wc-tree-item>
        <modus-wc-tree-item label="Legacy Project" value="legacy" disabled="true"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
`,
      },
    },
  },
  render: (args) => {
    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        customClass=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item label="Documents" value="documents">
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Archives"
            value="archives"
            .disabled=${true}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=${true}
            value="projects"
          >
            <modus-wc-tree-view is-sub-list="true">
              <modus-wc-tree-item label="Website Redesign" value="website">
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Legacy Project"
                value="legacy"
                .disabled=${true}
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `;
  },
};

export const WithActions: Story = {
  name: 'With Actions',
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates custom item actions including visibility toggle, inline edit, duplicate, add sibling, add child, and delete.',
      },
      source: {
        code: `
<script>
const getActions = (disabled) => [
  { id: 'toggle-visibility', label: disabled ? 'Hidden' : 'Visible', icon: disabled ? 'visibility_off' : 'visibility_on' },
  { id: 'edit-label', label: 'Edit Label', icon: 'pencil' },
  { id: 'duplicate', label: 'Duplicate', icon: 'copy_content' },
  { id: 'add-node-above', label: 'Add Node Above', icon: 'add' },
  { id: 'add-node-below', label: 'Add Node Below', icon: 'add' },
  { id: 'add-child', label: 'Add Child', icon: 'subdirectory_arrow_right' },
  { id: 'delete', label: 'Delete', icon: 'delete' }
];

const assignActions = (item) => {
  item.inlineLabelEdit = false;
  item.treeItemActions = getActions(!!item.disabled);
  item.querySelectorAll('modus-wc-tree-item').forEach((child) => {
    child.inlineLabelEdit = false;
    child.treeItemActions = getActions(!!child.disabled);
  });
};

const createNode = (label = 'New Node') => {
  const node = document.createElement('modus-wc-tree-item');
  node.label = label;
  node.value = 'new-node-' + Date.now() + '-' + Math.random();
  assignActions(node);
  return node;
};

const handleAction = (event) => {
  const treeItem = event.target.closest('modus-wc-tree-item');
  if (!treeItem) return;

  switch (event.detail.actionId) {
    case 'delete':
      treeItem.remove();
      return;
    case 'duplicate':
      treeItem.after(createNode(treeItem.label));
      return;
    case 'add-node-above':
      treeItem.before(createNode());
      return;
    case 'add-node-below':
      treeItem.after(createNode());
      return;
    case 'add-child': {
      let subList = treeItem.querySelector(':scope > modus-wc-tree-view');
      if (!subList) {
        subList = document.createElement('modus-wc-tree-view');
        subList.setAttribute('is-sub-list', 'true');
        treeItem.appendChild(subList);
      }
      treeItem.hasSubtree = true;
      subList.appendChild(createNode('New Child'));
      return;
    }
    case 'toggle-visibility':
      treeItem.disabled = !treeItem.disabled;
      treeItem.treeItemActions = getActions(!!treeItem.disabled);
      return;
    case 'edit-label':
      treeItem.inlineLabelEdit = true;
      return;
  }
};

</script>

<modus-wc-content-tree include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" value="documents"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" value="projects"></modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" value="resources"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>

<script>
const tree = document.querySelector('modus-wc-content-tree');
tree.querySelectorAll('modus-wc-tree-item').forEach((item) => assignActions(item));
tree.addEventListener('treeActionClick', handleAction);
</script>
`,
      },
    },
  },

  render: (args) => {
    const getActions = (disabled: boolean) => [
      {
        id: 'toggle-visibility',
        label: disabled ? 'Hidden' : 'Visible',
        icon: disabled ? 'visibility_off' : 'visibility_on',
        ariaLabel: disabled ? 'Set item to visible' : 'Set item to hidden',
        size: 'sm',
      },
      {
        id: 'edit-label',
        label: 'Edit Label',
        icon: 'pencil',
        ariaLabel: 'Edit item label',
        size: 'sm',
      },
      {
        id: 'duplicate',
        label: 'Duplicate',
        icon: 'copy_content',
        ariaLabel: 'Duplicate item',
        size: 'sm',
      },
      {
        id: 'add-node-above',
        label: 'Add Node Above',
        icon: 'add',
        ariaLabel: 'Add node above',
        size: 'sm',
      },
      {
        id: 'add-node-below',
        label: 'Add Node Below',
        icon: 'add',
        ariaLabel: 'Add node below',
        size: 'sm',
      },
      {
        id: 'add-child',
        label: 'Add Child',
        icon: 'subdirectory_arrow_right',
        ariaLabel: 'Add child node',
        size: 'sm',
      },
      {
        id: 'delete',
        label: 'Delete',
        icon: 'delete',
        ariaLabel: 'Delete item',
        size: 'sm',
      },
    ];

    const assignActions = (item: ITreeItemElement) => {
      item.inlineLabelEdit = false;
      item.treeItemActions = getActions(!!item.disabled);

      item.querySelectorAll('modus-wc-tree-item').forEach((child) => {
        const treeChild = child as ITreeItemElement;
        treeChild.inlineLabelEdit = false;
        treeChild.treeItemActions = getActions(!!treeChild.disabled);
      });
    };

    const createNode = (label = 'New Node') => {
      const node = document.createElement(
        'modus-wc-tree-item'
      ) as ITreeItemElement;
      node.label = label;
      node.value = `new-node-${Date.now()}-${Math.random()}`;
      assignActions(node);
      return node;
    };

    let lastActionSignature: string | null = null;

    const handleAction = (event: CustomEvent<{ actionId: string }>) => {
      const source = event.target as HTMLElement;
      const treeItem = source.closest(
        'modus-wc-tree-item'
      ) as ITreeItemElement | null;
      if (!treeItem) return;

      const signature = `${event.detail.actionId}:${treeItem.value}:${event.timeStamp}`;
      if (lastActionSignature === signature) return;
      lastActionSignature = signature;
      queueMicrotask(() => {
        if (lastActionSignature === signature) {
          lastActionSignature = null;
        }
      });

      switch (event.detail.actionId) {
        case 'delete':
          treeItem.remove();
          break;

        case 'duplicate': {
          const duplicateNode = createNode(treeItem.label);
          treeItem.after(duplicateNode);
          return;
        }

        case 'add-node-above':
          treeItem.before(createNode());
          break;

        case 'add-node-below':
          treeItem.after(createNode());
          break;

        case 'add-child': {
          let subList = treeItem.querySelector(
            ':scope > modus-wc-tree-view'
          ) as HTMLElement | null;

          if (!subList) {
            subList = document.createElement('modus-wc-tree-view');
            subList.setAttribute('is-sub-list', 'true');
            treeItem.appendChild(subList);
          }

          treeItem.hasSubtree = true;
          subList.appendChild(createNode('New Child'));
          break;
        }

        case 'toggle-visibility':
          treeItem.disabled = !treeItem.disabled;
          treeItem.treeItemActions = getActions(!!treeItem.disabled);
          break;

        case 'edit-label':
          treeItem.inlineLabelEdit = true;
          break;
      }
    };

    return html`
      <modus-wc-content-tree
        class="with-actions-tree"
        search-placeholder=${args['search-placeholder']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
        @treeActionClick=${handleAction}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            value="documents"
            .treeItemActions=${getActions(false)}
          ></modus-wc-tree-item>

          <modus-wc-tree-item
            label="Projects"
            value="projects"
            .treeItemActions=${getActions(false)}
          ></modus-wc-tree-item>

          <modus-wc-tree-item
            label="Resources"
            value="resources"
            .treeItemActions=${getActions(false)}
          ></modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `;
  },
};

export const ItemsReordering: Story = {
  name: 'Items Reordering',
  parameters: {
    docs: {
      description: {
        story:
          'Enables drag-and-drop reordering with top/bottom drop-line indicators for data-driven `items` in the same level.',
      },
      source: {
        code: `
<script>
const items = [
  {
    id: 'phase-1',
    label: 'Phase 1',
    children: [
      { id: 'backlog', label: 'Backlog' },
      { id: 'in-progress', label: 'In Progress' },
      { id: 'review', label: 'Review' }
    ]
  },
  {
    id: 'phase-2',
    label: 'Phase 2',
    children: [
      { id: 'qa', label: 'QA' },
      { id: 'uat', label: 'UAT' },
      { id: 'done', label: 'Done' }
    ]
  }
];
</script>

<modus-wc-content-tree
  include-search="false"
  include-actions="false"
  items-reordering="true"
  .items={items}>
</modus-wc-content-tree>
`,
      },
    },
  },
  render: (args) => {
    const items = args.items ?? nestedItemsReorderingData;

    const handleItemsReordered = (
      event: CustomEvent<{ items: ITreeItemData[] }>
    ) => {
      // Controlled usage: update bound items and optionally send event.detail.items to backend.
      const tree = event.target as HTMLElement & { items?: ITreeItemData[] };
      tree.items = event.detail.items;
    };

    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        customClass=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
        .itemsReordering=${true}
        .items=${items}
        @itemsReordered=${handleItemsReordered}
      ></modus-wc-content-tree>
    `;
  },
};

export const ApiReference: Story = {
  name: 'API Reference',
  parameters: {
    docs: {
      description: {
        story: `
### Props

| Name              | Type       | Default      | Description                                       |
|-------------------|------------|--------------|---------------------------------------------------|
| customClass       | \`string\` | \`''\`       | Additional CSS class to apply to the component    |
| searchPlaceholder | \`string\` | \`'Search...'\` | Placeholder text for the search input          |
| includeSearch     | \`boolean\` | \`true\`    | Whether to display the search functionality       |
| includeActions    | \`boolean\` | \`true\`    | Whether to display action buttons for tree items  |

---

### Tree View

#### Props

| Name        | Type       | Default   | Description                                           |
|-------------|------------|-----------|-------------------------------------------------------|
| customClass | \`string\` | \`''\`    | Additional CSS class to apply to the tree view        |
| isSubList   | \`boolean\` | \`false\` | Whether the tree view is a sublist of another tree item |

---

### Tree Item

#### Props

| Name            | Type                                   | Default   | Description                                                  |
|-----------------|----------------------------------------|-----------|--------------------------------------------------------------|
| label           | \`string\`                             | -         | The label text for the tree item (required)                  |
| value           | \`string\`                             | \`''\`    | The value associated with the tree item                      |
| disabled        | \`boolean\`                            | \`false\` | Whether the tree item is disabled                            |
| checkbox        | \`boolean\`                            | \`false\` | Whether to display a checkbox for the tree item              |
| selected        | \`boolean\`                            | -         | Whether the tree item is selected (mutable, reflected)       |
| checked         | \`boolean\`                            | -         | Whether the tree item checkbox is checked (mutable, reflected) |
| hasSubtree      | \`boolean\`                            | \`false\` | Whether the tree item has a subtree                          |
| treeItemActions | \`ITreeItemActions[]\`                 | -         | Array of actions to display for the tree item                |
| size            | \`'xs' | 'sm' | 'md' | 'lg'\`    | \`'xs'\`  | The size of the tree item                                    |
| customClass     | \`string\`                             | \`''\`    | Additional CSS class to apply to the tree item               |

#### Events

| Name             | Payload                          | Description                                     |
|------------------|----------------------------------|-------------------------------------------------|
| itemSelect       | \`{ value: string }\`            | Emitted when a tree item is selected            |
| selectionsChange | \`{ selectedValues: string[] }\` | Emitted when the selection state changes        |

#### Methods

| Name            | Type                      | Description                |
|-----------------|---------------------------|----------------------------|
| collapseSubTree | \`() => Promise<void>\`   | Collapses the subtree      |
| expandSubTree   | \`() => Promise<void>\`   | Expands the subtree        |

---

### Tree Actions

#### Props

| Name    | Type                                | Default  | Description                          |
|---------|-------------------------------------|----------|--------------------------------------|
| actions | \`ITreeItemActions[]\`              | -        | Array of actions to display          |
| size    | \`'xs' | 'sm' | 'md' | 'lg'\` | \`'xs'\` | The size of the action buttons       |

#### Events

| Name            | Payload                                   | Description                                |
|-----------------|-------------------------------------------|--------------------------------------------|
| treeActionClick | \`{ actionId: string; actionName: string }\` | Emitted when an action is clicked       |
| dropdownOpened  | \`HTMLElement\`                           | Emitted when the dropdown is opened        |

---

### Interfaces

#### ITreeItemActions

\`\`\`typescript
interface ITreeItemActions {
  id: string;                           // Unique identifier for the action
  icon: string;                         // Icon name for the action, e.g., 'edit', 'trash'
  iconVariant?: 'solid' | 'outlined';   // Optional variant for the icon
  label: string;                        // Text label for the action
  ariaLabel?: string;                   // Optional label for accessibility
  disabled?: boolean;                   // Optional flag to disable the action
}
\`\`\`
`,
      },
    },
    controls: { disable: true },
  },
  render: () => {
    return html``;
  },
};
