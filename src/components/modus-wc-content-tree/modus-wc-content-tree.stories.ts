import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { DaisySize } from '../types';
import { ITreeItemActions } from './modus-wc-tree-actions/modus-wc-tree-actions';
import { ITreeItemElement } from './modus-wc-tree-item/modus-wc-tree-item';

interface ContentTreeArgs {
  'custom-class'?: string;
  'search-placeholder'?: string;
  'include-search'?: boolean;
  'include-actions'?: boolean;
  // Tree Item Props
  disabled?: boolean;
  checkbox?: boolean;
  label?: string;
  'custom-class-item'?: string;
  selected?: boolean;
  checked?: boolean;
  value?: string;
  'has-subtree'?: boolean;
  'tree-item-actions'?: ITreeItemActions[];
  size?: DaisySize;
}

const meta: Meta<ContentTreeArgs> = {
  title: 'Components/Content Tree',
  component: 'modus-wc-content-tree',
  args: {
    'search-placeholder': 'Search...',
    'include-search': true,
    'include-actions': true,
    disabled: false,
    checkbox: false,
    label: 'Tree Item',
    selected: false,
    checked: false,
    value: '',
    'has-subtree': false,
    size: 'xs',
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
    disabled: {
      control: { type: 'boolean' },
      table: { category: 'Tree Item' },
    },
    checkbox: {
      control: { type: 'boolean' },
      table: { category: 'Tree Item' },
    },
    label: {
      control: { type: 'text' },
      table: { category: 'Tree Item' },
    },
    'custom-class-item': {
      control: { type: 'text' },
      table: { category: 'Tree Item' },
    },
    selected: {
      control: { type: 'boolean' },
      table: { category: 'Tree Item' },
    },
    checked: {
      control: { type: 'boolean' },
      table: { category: 'Tree Item' },
    },
    value: {
      control: { type: 'text' },
      table: { category: 'Tree Item' },
    },
    'has-subtree': {
      control: { type: 'boolean' },
      table: { category: 'Tree Item' },
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      table: { category: 'Tree Item' },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['itemSelect', 'treeActionClick', 'selectionsChange'],
    },
  },
};

export default meta;

type Story = StoryObj<ContentTreeArgs>;

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
          'A single tree item demonstrating all available properties. Use the controls to customize the tree item appearance and behavior.',
      },
      source: {
        code: `
<script>
const treeItemActions = [
  {
    id: 'info',
    label: 'Info',
    icon: 'info',
    ariaLabel: 'Info item',
  },
];
</script>

<modus-wc-content-tree search-placeholder="Search..." include-search="false" include-actions="false">
  <modus-wc-tree-view>
    <modus-wc-tree-item 
      label="Tree Item" 
      disabled="false" 
      checkbox="false" 
      selected="false" 
      checked="false" 
      has-subtree="false" 
      size="xs"
    ></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>

<script>
const treeItem = document.querySelector('modus-wc-tree-item');
treeItem.treeItemActions = treeItemActions;
</script>
`,
      },
    },
  },
  render: (args) => {
    const defaultTreeItemActions: ITreeItemActions[] = [
      {
        id: 'info',
        label: 'Info',
        icon: 'info',
        ariaLabel: 'Info item',
      },
    ];

    return html`
      <modus-wc-tree-view>
        <modus-wc-tree-item
          label=${args.label || 'Tree Item'}
          value="item-1"
          .disabled=${args.disabled}
          .checkbox=${args.checkbox}
          .selected=${args.selected}
          .checked=${args.checked}
          .hasSubtree=${args['has-subtree']}
          .size=${args.size}
          customClass=${args['custom-class-item']}
          .treeItemActions=${args['tree-item-actions'] ||
          defaultTreeItemActions}
        ></modus-wc-tree-item>
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

export const DisabledItems: Story = {
  name: 'Disabled Items',
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
    <modus-wc-tree-item label="Active Item" value="active" selected="true">
      <modus-wc-icon slot="start-icon" name="description" size="sm"></modus-wc-icon>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Disabled Item" value="disabled" disabled="true"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Active Project" value="active-project"></modus-wc-tree-item>
        <modus-wc-tree-item label="Disabled Project" value="disabled-project" disabled="true"></modus-wc-tree-item>
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
          <modus-wc-tree-item
            label="Active Item"
            value="active"
            .selected=${true}
          >
            <modus-wc-icon
              slot="start-icon"
              name="description"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Disabled Item"
            value="disabled"
            .disabled=${true}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=${true}
            value="projects"
          >
            <modus-wc-tree-view is-sub-list="true">
              <modus-wc-tree-item label="Active Project" value="active-project">
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Disabled Project"
                value="disabled-project"
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
export const WithActions: Story = {
  name: 'With Actions',
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates tree items with custom actions. Actions can be used to perform operations like toggling visibility or deleting items.',
      },
      source: {
        code: `
<script>
const getTreeItemActions = (isDisabled) => [
  {
    id: 'toggle-visibility',
    label: isDisabled ? 'Hidden' : 'Visible',
    icon: isDisabled ? 'visibility_off' : 'visibility_on',
    ariaLabel: isDisabled ? 'Set item to visible' : 'Set item to hidden',
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

const handleTreeActionClick = (event) => {
  const actionSource = event.target;
  const treeItem = actionSource.closest('modus-wc-tree-item');

  if (!treeItem) return;

  if (event.detail.actionId === 'delete') {
    treeItem.remove();
    return;
  }

  if (event.detail.actionId !== 'toggle-visibility') return;

  treeItem.disabled = !treeItem.disabled;
  treeItem.treeItemActions = getTreeItemActions(!!treeItem.disabled);
};
</script>

<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" value="documents"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" value="projects"></modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" value="resources"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>

<script>
const contentTree = document.querySelector('modus-wc-content-tree');
const treeItems = contentTree.querySelectorAll('modus-wc-tree-item');
treeItems.forEach(item => {
  item.treeItemActions = getTreeItemActions(false);
});

contentTree.addEventListener('treeActionClick', handleTreeActionClick);
</script>
`,
      },
    },
  },
  render: (args) => {
    const getTreeItemActions = (isDisabled: boolean) => [
      {
        id: 'toggle-visibility',
        label: isDisabled ? 'Hidden' : 'Visible',
        icon: isDisabled ? 'visibility_off' : 'visibility_on',
        ariaLabel: isDisabled ? 'Set item to visible' : 'Set item to hidden',
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

    const handleTreeActionClick = (
      event: CustomEvent<{ actionId: string }>
    ) => {
      const actionSource = event.target as HTMLElement;
      const treeItem = actionSource.closest(
        'modus-wc-tree-item'
      ) as ITreeItemElement;

      if (!treeItem) return;

      if (event.detail.actionId === 'delete') {
        treeItem.remove();
        return;
      }

      if (event.detail.actionId !== 'toggle-visibility') return;

      treeItem.disabled = !treeItem.disabled;
      treeItem.treeItemActions = getTreeItemActions(treeItem.disabled);
    };

    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        customClass=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
        @treeActionClick=${handleTreeActionClick}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            value="documents"
            .treeItemActions=${getTreeItemActions(false)}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            value="projects"
            .treeItemActions=${getTreeItemActions(false)}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Resources"
            value="resources"
            .treeItemActions=${getTreeItemActions(false)}
          >
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `;
  },
};
