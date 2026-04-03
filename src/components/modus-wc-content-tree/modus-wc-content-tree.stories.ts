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
        'itemLabelChange',
        'itemExpand',
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
          'This example shows the content tree when no items are present. Consumers can provide a custom empty state through the default slot.',
      },
      source: {
        code: `
<style>
  .modus-wc-content-tree-empty-story {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
    min-height: 500px;
    padding: 1rem;
  }

  .modus-wc-content-tree-empty-story .modus-wc-content-tree-empty-text {
    color: #6a6e79;
    font-size: 18px;
    text-align: center;
    font-weight: 400;
  }
</style>
<script>
function handleCreateNew(tree) {
  tree.querySelector('.modus-wc-content-tree-empty-story')?.remove();
  tree.items = [{ id: 'new-item', label: 'New Item' }];
}
</script>

<modus-wc-content-tree
  search-placeholder="Search..."
  include-search="true"
>
  <div class="modus-wc-content-tree-empty-story">
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.3335 13.3601H10.6668V10.6934H13.3335V5.36011H5.3335V13.3601ZM45.3335 5.36011H34.6668V10.6934H45.3335V5.36011ZM10.6668 19.3601H5.3335V31.3601H10.6668V19.3601ZM18.6668 45.3601H29.3335V40.0268H18.6668V45.3601ZM10.6668 37.3601H5.3335V45.3601H13.3335V40.0268H10.6668V37.3601ZM50.6668 5.36011V10.6934H53.3335V13.3601H58.6668V5.36011H50.6668ZM53.3335 31.3601H58.6668V19.3601H53.3335V31.3601ZM57.4402 41.5468L34.2135 32.0801C34.0269 32.0062 33.8275 31.9699 33.6268 31.9734H33.4668C33.3068 31.9734 33.1735 32.0001 33.0402 32.0801C32.9868 32.0801 32.9335 32.0801 32.8802 32.1334C32.6935 32.2134 32.5068 32.3201 32.3735 32.4801C32.2402 32.6401 32.1068 32.8001 32.0268 32.9868L31.9735 33.1468C31.9202 33.2801 31.8935 33.4401 31.8935 33.5734V33.7334C31.8935 33.9201 31.9202 34.1334 32.0002 34.3201L41.4668 57.5468C41.7335 58.1868 42.3735 58.6134 43.0668 58.6134H43.2002C43.9468 58.5601 44.5868 58.0268 44.7468 57.2801L46.6402 49.1201L54.3202 56.8001C54.6402 57.1201 55.0935 57.3068 55.5468 57.3068C56.0002 57.3068 56.4268 57.1201 56.7735 56.8001C57.4402 56.1334 57.4402 55.0401 56.7735 54.3734L49.1202 46.6934L57.3068 44.8001C58.0268 44.6401 58.5868 44.0001 58.6402 43.2534H58.5868C58.6087 42.8933 58.5178 42.5354 58.3266 42.2294C58.1354 41.9235 57.8535 41.6849 57.5202 41.5468M18.6668 10.6934H29.3335V5.36011H18.6668V10.6934Z"
        fill="#6A6E79"
      />
    </svg>
    <modus-wc-typography
      hierarchy="p"
      label="Empty Content Tree"
      size="lg"
      weight="normal"
      custom-class="modus-wc-content-tree-empty-text"
    ></modus-wc-typography>
    <modus-wc-button variant="outline"
      onclick="handleCreateNew(this.closest('modus-wc-content-tree'))">
      Create node
    </modus-wc-button>
  </div>
</modus-wc-content-tree>
`,
      },
    },
  },
  render: (args) => {
    type ContentTreeElement = HTMLElement & {
      includeActions?: boolean;
      items?: ITreeItemData[];
    };

    const focusEditMode = (contentTree: ContentTreeElement, id: string) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const treeItems = Array.from(
            contentTree.querySelectorAll('modus-wc-tree-item')
          );
          const el = treeItems.find((item) => item.value === id);

          if (el) {
            el.inlineLabelEdit = true;
          }
        });
      });
    };

    const handleAddNewItem = (event: Event) => {
      const contentTree = (event.currentTarget as HTMLElement)?.closest(
        'modus-wc-content-tree'
      );

      if (!contentTree) return;

      const newId = `new-item-${Date.now()}`;
      contentTree.querySelector('.modus-wc-content-tree-empty-story')?.remove();
      contentTree.items = [
        {
          id: newId,
          label: 'New Item',
        },
      ];

      focusEditMode(contentTree, newId);
    };

    return html`
      <style>
        .modus-wc-content-tree-empty-story {
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          justify-content: center;
          min-height: 500px;
          padding: 1rem;
        }

        .modus-wc-content-tree-empty-story .modus-wc-content-tree-empty-text {
          color: #6a6e79;
          font-size: 18px;
          text-align: center;
          font-weight: 400;
        }
      </style>
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        custom-class=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
      >
        <div class="modus-wc-content-tree-empty-story">
          <modus-wc-typography
            hierarchy="p"
            label="Empty Content Tree"
            size="lg"
            weight="normal"
            custom-class="modus-wc-content-tree-empty-text"
          ></modus-wc-typography>

          <modus-wc-button variant="outline" @buttonClick=${handleAddNewItem}>
            Create node
          </modus-wc-button>
        </div>
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
        custom-class=${args['custom-class']}
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
document
  .querySelector('modus-wc-content-tree')
  .addEventListener('treeActionClick', handleAction);
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
      const treeItem = source.closest('modus-wc-tree-item');
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
          let subList = treeItem.querySelector(':scope > modus-wc-tree-view');

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
    const state = {
      items: [...(args.items ?? nestedItemsReorderingData)],
    };

    const handleItemsReordered = (
      event: CustomEvent<{
        items: ITreeItemData[];
        parameters: {
          itemId: string;
          oldPosition: { parentId: string | null; index: number };
          newPosition: { parentId: string | null; index: number };
        };
      }>
    ) => {
      state.items = [...event.detail.items];
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      tree.items = state.items;
    };

    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        customClass=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
        .itemsReordering=${true}
        .items=${state.items}
        @itemsReordered=${handleItemsReordered}
      ></modus-wc-content-tree>
    `;
  },
};

export const MultiSelect: Story = {
  name: 'Multi Select',
  parameters: {
    docs: {
      description: {
        story:
          'Enables multi-select on the tree view. Use Ctrl/Cmd + click to toggle individual items, and Shift + click to select a contiguous range. Works across nested tree items.',
      },
      source: {
        code: `
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view multi-select="true">
    <modus-wc-tree-item label="Documents" has-subtree="true" value="documents">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Report.pdf" value="report"></modus-wc-tree-item>
        <modus-wc-tree-item label="Proposal.docx" value="proposal"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Website Redesign" value="website"></modus-wc-tree-item>
        <modus-wc-tree-item label="Mobile App" value="mobile-app"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" has-subtree="true" value="resources">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Templates" value="templates"></modus-wc-tree-item>
        <modus-wc-tree-item label="Guidelines" value="guidelines"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Archives" has-subtree="true" value="archives">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="2024" value="2024"></modus-wc-tree-item>
        <modus-wc-tree-item label="2025" value="2025"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
`,
      },
    },
    actions: {
      handles: ['itemSelect', 'itemSelectionChange'],
    },
  },
  render: (args) => {
    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        custom-class=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
      >
        <modus-wc-tree-view .multiSelect=${true}>
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
              <modus-wc-tree-item label="Mobile App" value="mobile-app">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Resources"
            .hasSubtree=${true}
            value="resources"
          >
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item label="Templates" value="templates">
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Guidelines" value="guidelines">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Archives"
            .hasSubtree=${true}
            value="archives"
          >
            <modus-wc-tree-view .isSubList=${true}>
              <modus-wc-tree-item label="2024" value="2024">
              </modus-wc-tree-item>
              <modus-wc-tree-item label="2025" value="2025">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `;
  },
};

export const LazyLoading: Story = {
  name: 'Lazy Loading',
  parameters: {
    docs: {
      description: {
        story: `Demonstrates lazy loading using the data-driven \`items\` prop and \`itemExpand\` event. Items with \`hasChildren: true\` and no \`children\` show an expand chevron; when expanded, the tree shows a loader until the consumer provides children by updating \`items\`. Expand "Documents", "Projects", or "Resources" to see the loading spinner and then the loaded children.`,
      },
      source: {
        code: `
<script>
const initialItems = [
  { id: 'documents', label: 'Documents', hasChildren: true },
  { id: 'projects', label: 'Projects', hasChildren: true },
  { id: 'resources', label: 'Resources', hasChildren: true },
];

const mockData = {
  documents: [
    { id: 'report', label: 'Report.pdf' },
    { id: 'proposal', label: 'Proposal.docx' },
    { id: 'notes', label: 'Meeting Notes.txt' },
  ],
  projects: [
    { id: 'website', label: 'Website Redesign', hasChildren: true },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'api', label: 'API Integration' },
  ],
  resources: [
    { id: 'templates', label: 'Templates' },
    { id: 'guide', label: 'Style Guide' },
  ],
  website: [
    { id: 'design', label: 'Design Mockups' },
    { id: 'dev', label: 'Development' },
  ],
};

function updateItem(items, parentId, updater) {
  return items.map((item) => {
    if (item.id === parentId) return updater(item);
    if (item.children) {
      return {
        ...item,
        children: updateItem(item.children, parentId, updater),
      };
    }
    return item;
  });
}

const tree = document.querySelector('modus-wc-content-tree');
tree.items = initialItems;

tree.addEventListener('itemExpand', async (event) => {
  const itemId = event.detail;

  const findItem = (items) => {
    for (const item of items) {
      if (item.id === itemId) return item;
      if (item.children) {
        const found = findItem(item.children);
        if (found) return found;
      }
    }
  };

  const item = findItem(tree.items);
  if (item?.children?.length) return;

  const children = await new Promise((resolve) =>
    setTimeout(() => resolve(mockData[itemId] ?? []), 1500)
  );

  tree.items = updateItem(tree.items, itemId, (item) => ({
    ...item,
    children,
    hasChildren: children.length > 0,
  }));
});
</script>

<modus-wc-content-tree search-placeholder="Search..." include-search="true"></modus-wc-content-tree>
`,
      },
    },
    actions: {
      handles: ['itemExpand'],
    },
  },
  render: (args) => {
    const initialItems: ITreeItemData[] = [
      { id: 'documents', label: 'Documents', hasChildren: true },
      { id: 'projects', label: 'Projects', hasChildren: true },
      { id: 'resources', label: 'Resources', hasChildren: true },
    ];

    const mockData: Record<string, ITreeItemData[]> = {
      documents: [
        { id: 'report', label: 'Report.pdf' },
        { id: 'proposal', label: 'Proposal.docx' },
        { id: 'notes', label: 'Meeting Notes.txt' },
      ],
      projects: [
        { id: 'website', label: 'Website Redesign', hasChildren: true },
        { id: 'mobile', label: 'Mobile App' },
        { id: 'api', label: 'API Integration' },
      ],
      resources: [
        { id: 'templates', label: 'Templates' },
        { id: 'guide', label: 'Style Guide' },
      ],
      website: [
        { id: 'design', label: 'Design Mockups' },
        { id: 'dev', label: 'Development' },
      ],
    };

    const updateItem = (
      items: ITreeItemData[],
      parentId: string,
      updater: (item: ITreeItemData) => ITreeItemData
    ): ITreeItemData[] =>
      items.map((item) => {
        if (item.id === parentId) return updater(item);
        if (item.children)
          return {
            ...item,
            children: updateItem(item.children, parentId, updater),
          };
        return item;
      });

    const findItem = (
      items: ITreeItemData[],
      id: string
    ): ITreeItemData | undefined => {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.children) {
          const found = findItem(item.children, id);
          if (found) return found;
        }
      }
      return undefined;
    };

    const handleItemExpand = async (event: CustomEvent<string>) => {
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      const itemId = event.detail;
      const current = tree.items ?? initialItems;
      const item = findItem(current, itemId);
      if (item?.children?.length) return;

      const children = await new Promise<ITreeItemData[]>((resolve) =>
        setTimeout(() => resolve(mockData[itemId] ?? []), 1500)
      );

      tree.items = updateItem(current, itemId, (i) => ({
        ...i,
        children,
        hasChildren: children.length > 0,
      }));
    };

    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        .includeSearch=${args['include-search']}
        .includeActions=${false}
        .items=${initialItems}
        @itemExpand=${handleItemExpand}
      ></modus-wc-content-tree>
    `;
  },
};

export const WithBuiltInActions: Story = {
  name: 'With Built-in Actions',
  parameters: {
    docs: {
      description: {
        story: `Demonstrates built-in Add Child, Add Above, Add Below, Duplicate, and Delete actions.
When the \`items\` prop is used, every node automatically receives default action buttons.
The tree emits \`itemAdded\`, \`itemDeleted\`, or \`itemDuplicated\` with the proposed new \`items\` array.
The consumer updates \`tree.items\` to apply the change -- this is the single source of truth.
No \`treeItemActions\` configuration is required -- action buttons appear out of the box.`,
      },
      source: {
        code: `
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');

  tree.items = [
    { id: 'root-1', label: 'Design System', children: [
      { id: 'child-1', label: 'Components' },
      { id: 'child-2', label: 'Tokens' },
    ]},
    { id: 'root-2', label: 'Documentation', children: [
      { id: 'child-3', label: 'Getting Started' },
    ]},
    { id: 'root-3', label: 'Changelog' },
  ];

  // Single source of truth: update tree.items from event payload.
  const applyUpdate = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', applyUpdate);
  tree.addEventListener('itemDeleted', applyUpdate);
  tree.addEventListener('itemDuplicated', applyUpdate);
</script>`,
      },
    },
    actions: {
      handles: ['itemAdded', 'itemDeleted', 'itemDuplicated', 'itemsReordered'],
    },
  },
  render: (args) => {
    const initialItems: ITreeItemData[] = [
      {
        id: 'root-1',
        label: 'Design System',
        children: [
          { id: 'child-1', label: 'Components' },
          { id: 'child-2', label: 'Tokens' },
        ],
      },
      {
        id: 'root-2',
        label: 'Documentation',
        children: [{ id: 'child-3', label: 'Getting Started' }],
      },
      { id: 'root-3', label: 'Changelog' },
    ];

    const applyUpdate = (e: CustomEvent<{ items: ITreeItemData[] }>) => {
      const tree = e.currentTarget as HTMLElement & { items: ITreeItemData[] };
      tree.items = e.detail.items;
    };

    return html`
      <div style="width: 320px">
        <modus-wc-content-tree
          search-placeholder=${args['search-placeholder']}
          .includeSearch=${args['include-search']}
          .includeActions=${true}
          .items=${initialItems}
          @itemAdded=${applyUpdate}
          @itemDeleted=${applyUpdate}
          @itemDuplicated=${applyUpdate}
        ></modus-wc-content-tree>
      </div>
    `;
  },
};

export const WithBuiltInActionsAndLazyLoading: Story = {
  name: 'With Built-in Actions + Lazy Loading',
  parameters: {
    docs: {
      description: {
        story: `Demonstrates lazy loading with built-in actions using a controlled pattern.

**During lazy loading**, the consumer disables actions on the loading node via \`treeItemActions\` to prevent data merge conflicts. Once children arrive and the spinner clears, actions are re-enabled.

The consumer controls the spinner via the \`lazyLoading\` field on \`ITreeItemData\` -- set it to \`true\` when fetching starts, then provide \`children\` and set it to \`false\` once data arrives.

The consumer owns all state: every \`itemAdded\`, \`itemDeleted\`, or \`itemDuplicated\` event is applied by setting \`tree.items = e.detail.items\`.

Expand "Projects" or "Resources" to trigger the 2-second lazy load, then observe the disabled actions.`,
      },
      source: {
        code: `
<modus-wc-content-tree id="lazy-actions-tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#lazy-actions-tree');

  const setItem = (items, id, patch) =>
    items.map(item =>
      item.id === id
        ? { ...item, ...patch }
        : { ...item, children: item.children ? setItem(item.children, id, patch) : undefined }
    );

  const disabledActions = [
    { id: 'add-child', icon: 'add', label: 'Add Child', disabled: true },
    { id: 'add-above', icon: 'arrow_upward', label: 'Add Above', disabled: true },
    { id: 'add-below', icon: 'arrow_downward', label: 'Add Below', disabled: true },
    { id: 'duplicate', icon: 'content_copy', label: 'Duplicate', disabled: true },
    { id: 'delete', icon: 'delete', label: 'Delete' },
  ];

  tree.items = [
    { id: 'design', label: 'Design System', children: [
      { id: 'components', label: 'Components' },
      { id: 'tokens', label: 'Tokens' },
    ]},
    { id: 'projects', label: 'Projects', hasChildren: true },
    { id: 'resources', label: 'Resources', hasChildren: true },
  ];

  const loadedIds = new Set();

  tree.addEventListener('itemExpand', async (e) => {
    const id = e.detail;
    const found = tree.items.find(i => i.id === id);
    if (!found?.hasChildren || loadedIds.has(id)) return;
    if (found.children?.length) return;

    loadedIds.add(id);

    tree.items = setItem(tree.items, id, {
      lazyLoading: true,
      treeItemActions: disabledActions,
    });

    await new Promise(r => setTimeout(r, 2000));

    tree.items = setItem(tree.items, id, current => ({
      lazyLoading: false,
      hasChildren: true,
      treeItemActions: undefined,
      children: [
        ...(current.children ?? []),
        { id: id + '-server-1', label: 'Server Item 1' },
        { id: id + '-server-2', label: 'Server Item 2' },
      ],
    }));
  });

  // Consumer owns the state: apply every action by updating tree.items.
  const applyUpdate = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', applyUpdate);
  tree.addEventListener('itemDeleted', applyUpdate);
  tree.addEventListener('itemDuplicated', applyUpdate);
</script>`,
      },
    },
    actions: {
      handles: ['itemAdded', 'itemDeleted', 'itemDuplicated', 'itemExpand'],
    },
  },
  render: (args) => {
    const setItem = (
      items: ITreeItemData[],
      id: string,
      patch:
        | Partial<ITreeItemData>
        | ((current: ITreeItemData) => Partial<ITreeItemData>)
    ): ITreeItemData[] =>
      items.map((item) => {
        if (item.id === id) {
          const resolved = typeof patch === 'function' ? patch(item) : patch;
          return { ...item, ...resolved };
        }
        return {
          ...item,
          children: item.children
            ? setItem(item.children, id, patch)
            : undefined,
        };
      });

    const initialItems: ITreeItemData[] = [
      {
        id: 'design',
        label: 'Design System',
        children: [
          { id: 'components', label: 'Components' },
          { id: 'tokens', label: 'Tokens' },
        ],
      },
      { id: 'projects', label: 'Projects', hasChildren: true },
      { id: 'resources', label: 'Resources', hasChildren: true },
    ];

    const loadedIds = new Set<string>();

    const findItem = (
      items: ITreeItemData[],
      id: string
    ): ITreeItemData | null => {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.children) {
          const found = findItem(item.children, id);
          if (found) return found;
        }
      }
      return null;
    };

    // Actions with all non-delete actions disabled -- used while a node is loading.
    const disabledActions = [
      { id: 'add-child', icon: 'add', label: 'Add Child', disabled: true },
      {
        id: 'add-above',
        icon: 'arrow_upward',
        label: 'Add Above',
        disabled: true,
      },
      {
        id: 'add-below',
        icon: 'arrow_downward',
        label: 'Add Below',
        disabled: true,
      },
      {
        id: 'duplicate',
        icon: 'content_copy',
        label: 'Duplicate',
        disabled: true,
      },
      { id: 'delete', icon: 'delete', label: 'Delete' },
    ];

    const handleItemExpand = async (e: CustomEvent<string>) => {
      const tree = e.currentTarget as HTMLElement & { items: ITreeItemData[] };
      const id = e.detail;

      const item = findItem(tree.items, id);
      if (!item?.hasChildren || loadedIds.has(id)) return;
      if (item.children && item.children.length > 0) return;

      loadedIds.add(id);

      tree.items = setItem(tree.items, id, {
        lazyLoading: true,
        treeItemActions: disabledActions,
      });

      await new Promise((r) => setTimeout(r, 2000));

      tree.items = setItem(tree.items, id, (current: ITreeItemData) => ({
        lazyLoading: false,
        hasChildren: true,
        treeItemActions: undefined,
        children: [
          ...(current.children ?? []),
          { id: `${id}-child-1`, label: 'Server Item 1' },
          { id: `${id}-child-2`, label: 'Server Item 2' },
        ],
      }));
    };

    const applyUpdate = (e: CustomEvent<{ items: ITreeItemData[] }>) => {
      const tree = e.currentTarget as HTMLElement & { items: ITreeItemData[] };
      tree.items = e.detail.items;
    };

    return html`
      <div style="width: 320px">
        <modus-wc-content-tree
          search-placeholder=${args['search-placeholder']}
          .includeSearch=${args['include-search']}
          .includeActions=${true}
          .items=${initialItems}
          @itemExpand=${handleItemExpand}
          @itemAdded=${applyUpdate}
          @itemDeleted=${applyUpdate}
          @itemDuplicated=${applyUpdate}
        ></modus-wc-content-tree>
      </div>
    `;
  },
};

export const LazyLoadingWithActionsEnabled: Story = {
  name: 'Lazy Loading - Actions Enabled During Load',
  parameters: {
    docs: {
      description: {
        story: `Demonstrates the case where all actions remain enabled while a node is lazy loading.
The user can add/delete/duplicate nodes while the spinner is showing.
When server data arrives, the consumer merges the server children with any user-added children so nothing is lost.

The consumer owns all state via \`tree.items\`. Every \`itemAdded\`, \`itemDeleted\`, or \`itemDuplicated\` event is applied by setting \`tree.items = e.detail.items\`.
When lazy load completes, \`tree.items\` already reflects all user changes, so the merge just appends server data.

This approach gives maximum flexibility at the cost of the consumer handling the merge logic.
Compare with the "With Built-in Actions + Lazy Loading" story where actions are disabled during loading.`,
      },
      source: {
        code: `
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');

  // Patch a single item by id. Accepts a patch object or a function receiving the current item.
  const setItem = (items, id, patch) =>
    items.map(item => {
      if (item.id === id) {
        const resolved = typeof patch === 'function' ? patch(item) : patch;
        return { ...item, ...resolved };
      }
      return { ...item, children: item.children ? setItem(item.children, id, patch) : undefined };
    });

  tree.items = [
    { id: 'design', label: 'Design System', children: [
      { id: 'components', label: 'Components' },
      { id: 'tokens', label: 'Tokens' },
    ]},
    { id: 'projects', label: 'Projects', hasChildren: true },
    { id: 'resources', label: 'Resources', hasChildren: true },
  ];

  const loadedIds = new Set();

  tree.addEventListener('itemExpand', async (e) => {
    const id = e.detail;
    const item = tree.items.find(i => i.id === id);
    if (!item?.hasChildren || loadedIds.has(id)) return;
    if (item.children?.length) return;

    loadedIds.add(id);
    tree.items = setItem(tree.items, id, { lazyLoading: true });
    await new Promise(r => setTimeout(r, 3000));

    // tree.items already reflects all user changes made during loading
    // because syncItems kept it up to date. Append server data after.
    tree.items = setItem(tree.items, id, current => ({
      lazyLoading: false,
      hasChildren: true,
      children: [
        ...(current.children ?? []),
        { id: id + '-server-1', label: 'Server Item 1' },
        { id: id + '-server-2', label: 'Server Item 2' },
      ],
    }));
  });

  // Keep tree.items in sync after every action.
  // This ensures lazy load merge always works off the latest state.
  const syncItems = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', syncItems);
  tree.addEventListener('itemDeleted', syncItems);
  tree.addEventListener('itemDuplicated', syncItems);
</script>`,
      },
    },
    actions: {
      handles: ['itemAdded', 'itemDeleted', 'itemDuplicated', 'itemExpand'],
    },
  },
  render: (args) => {
    const setItem = (
      items: ITreeItemData[],
      id: string,
      patch:
        | Partial<ITreeItemData>
        | ((current: ITreeItemData) => Partial<ITreeItemData>)
    ): ITreeItemData[] =>
      items.map((item) => {
        if (item.id === id) {
          const resolved = typeof patch === 'function' ? patch(item) : patch;
          return { ...item, ...resolved };
        }
        return {
          ...item,
          children: item.children
            ? setItem(item.children, id, patch)
            : undefined,
        };
      });

    const initialItems: ITreeItemData[] = [
      {
        id: 'design',
        label: 'Design System',
        children: [
          { id: 'components', label: 'Components' },
          { id: 'tokens', label: 'Tokens' },
        ],
      },
      { id: 'projects', label: 'Projects', hasChildren: true },
      { id: 'resources', label: 'Resources', hasChildren: true },
    ];

    const loadedIds = new Set<string>();

    const findItem = (
      items: ITreeItemData[],
      id: string
    ): ITreeItemData | null => {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.children) {
          const found = findItem(item.children, id);
          if (found) return found;
        }
      }
      return null;
    };

    const handleItemExpand = async (e: CustomEvent<string>) => {
      const tree = e.currentTarget as HTMLElement & { items: ITreeItemData[] };
      const id = e.detail;

      const item = findItem(tree.items, id);
      if (!item?.hasChildren || loadedIds.has(id)) return;
      if (item.children && item.children.length > 0) return;

      loadedIds.add(id);
      tree.items = setItem(tree.items, id, { lazyLoading: true });
      await new Promise((r) => setTimeout(r, 3000));

      // tree.items already reflects any adds/deletes the user did while loading
      // because itemAdded/Deleted/Duplicated handlers below kept it in sync.
      // Append server data after the current children.
      tree.items = setItem(tree.items, id, (current: ITreeItemData) => ({
        lazyLoading: false,
        hasChildren: true,
        children: [
          ...(current.children ?? []),
          { id: `${id}-server-1`, label: 'Server Item 1' },
          { id: `${id}-server-2`, label: 'Server Item 2' },
        ],
      }));
    };

    // Keep tree.items in sync after every action so lazy load merges correctly.
    const syncItems = (e: CustomEvent<{ items: ITreeItemData[] }>) => {
      const tree = e.currentTarget as HTMLElement & { items: ITreeItemData[] };
      tree.items = e.detail.items;
    };

    return html`
      <div style="width: 320px">
        <modus-wc-content-tree
          search-placeholder=${args['search-placeholder']}
          .includeSearch=${args['include-search']}
          .includeActions=${true}
          .items=${initialItems}
          @itemExpand=${handleItemExpand}
          @itemAdded=${syncItems}
          @itemDeleted=${syncItems}
          @itemDuplicated=${syncItems}
        ></modus-wc-content-tree>
      </div>
    `;
  },
};

export const WithManualActions: Story = {
  name: 'Manual Control via @Method()',
  parameters: {
    docs: {
      description: {
        story: `Demonstrates the "State Manager pattern" where the consumer has full control.

\`includeActions\` is set to \`false\` -- no built-in action buttons render on tree nodes.
The consumer provides their own external toolbar and calls the element's public \`@Method()\` utilities
to compute a new items array, then sets \`tree.items\` to apply the change.

Available methods on the element:
- \`tree.addChild(parentId, newItem)\` — adds a new child under the given parent
- \`tree.addAbove(siblingId, newItem)\` — inserts a new item above the given sibling
- \`tree.addBelow(siblingId, newItem)\` — inserts a new item below the given sibling
- \`tree.deleteItem(itemId)\` — removes the item from the tree
- \`tree.duplicateItem(itemId)\` — clones the item (and all its children) after itself

All methods return a \`Promise<ITreeItemData[] | null>\` with the proposed new items array.
The consumer decides whether to apply it by setting \`tree.items = result\`.`,
      },
      source: {
        code: `
<div style="display: flex; flex-direction: column; gap: 8px; width: 320px">
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <modus-wc-button id="btn-add-child">Add Child</modus-wc-button>
    <modus-wc-button id="btn-add-above">Add Above</modus-wc-button>
    <modus-wc-button id="btn-add-below">Add Below</modus-wc-button>
    <modus-wc-button id="btn-duplicate">Duplicate</modus-wc-button>
    <modus-wc-button id="btn-delete">Delete</modus-wc-button>
  </div>
  <modus-wc-content-tree id="tree" include-actions="false"></modus-wc-content-tree>
</div>
<script>
  const tree = document.querySelector('#tree');
  let selectedId = null;

  tree.items = [
    { id: 'root-1', label: 'Design System', children: [
      { id: 'child-1', label: 'Components' },
      { id: 'child-2', label: 'Tokens' },
    ]},
    { id: 'root-2', label: 'Documentation' },
    { id: 'root-3', label: 'Changelog' },
  ];

  tree.addEventListener('itemSelect', (e) => {
    selectedId = e.detail.value;
  });

  document.querySelector('#btn-add-child').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.addChild(selectedId, { id: crypto.randomUUID(), label: 'New Child' });
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-add-above').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.addAbove(selectedId, { id: crypto.randomUUID(), label: 'New Item' });
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-add-below').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.addBelow(selectedId, { id: crypto.randomUUID(), label: 'New Item' });
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-duplicate').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.duplicateItem(selectedId);
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-delete').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.deleteItem(selectedId);
    tree.items = newItems;
    selectedId = null;
  });
</script>`,
      },
    },
  },
  render: (args) => {
    type TreeEl = HTMLElement & {
      items: ITreeItemData[];
      addChild: (
        parentId: string,
        newItem: ITreeItemData
      ) => Promise<ITreeItemData[] | null>;
      addAbove: (
        siblingId: string,
        newItem: ITreeItemData
      ) => Promise<ITreeItemData[] | null>;
      addBelow: (
        siblingId: string,
        newItem: ITreeItemData
      ) => Promise<ITreeItemData[] | null>;
      deleteItem: (itemId: string) => Promise<ITreeItemData[]>;
      duplicateItem: (itemId: string) => Promise<ITreeItemData[] | null>;
    };

    const initialItems: ITreeItemData[] = [
      {
        id: 'root-1',
        label: 'Design System',
        treeItemActions: [],
        children: [
          { id: 'child-1', label: 'Components', treeItemActions: [] },
          { id: 'child-2', label: 'Tokens', treeItemActions: [] },
        ],
      },
      { id: 'root-2', label: 'Documentation', treeItemActions: [] },
      { id: 'root-3', label: 'Changelog', treeItemActions: [] },
    ];

    const treeId = 'manual-actions-tree';
    let selectedId: string | null = null;

    const getTree = (): TreeEl | null =>
      document.getElementById(treeId) as TreeEl | null;

    const onItemSelect = (e: CustomEvent<{ value: string }>) => {
      selectedId = e.detail.value;
    };

    const onAddChild = async () => {
      if (!selectedId) return;
      const tree = getTree();
      if (!tree) return;
      const newItems = await tree.addChild(selectedId, {
        id: crypto.randomUUID(),
        label: 'New Child',
        treeItemActions: [],
      });
      if (newItems) tree.items = newItems;
    };

    const onAddAbove = async () => {
      if (!selectedId) return;
      const tree = getTree();
      if (!tree) return;
      const newItems = await tree.addAbove(selectedId, {
        id: crypto.randomUUID(),
        label: 'New Item',
        treeItemActions: [],
      });
      if (newItems) tree.items = newItems;
    };

    const onAddBelow = async () => {
      if (!selectedId) return;
      const tree = getTree();
      if (!tree) return;
      const newItems = await tree.addBelow(selectedId, {
        id: crypto.randomUUID(),
        label: 'New Item',
        treeItemActions: [],
      });
      if (newItems) tree.items = newItems;
    };

    const onDuplicate = async () => {
      if (!selectedId) return;
      const tree = getTree();
      if (!tree) return;
      const newItems = await tree.duplicateItem(selectedId);
      if (newItems) tree.items = newItems;
    };

    const onDelete = async () => {
      if (!selectedId) return;
      const tree = getTree();
      if (!tree) return;
      const newItems = await tree.deleteItem(selectedId);
      tree.items = newItems;
      selectedId = null;
    };

    return html`
      <div style="height: 50px">
        <modus-wc-typography>
          Select a node to complete an action
        </modus-wc-typography>
      </div>
      <div
        style="display: flex; flex-direction: column; gap: 8px; width: 320px"
      >
        <div style="display: flex; gap: 8px; flex-wrap: wrap">
          <modus-wc-button @buttonClick=${onAddChild}
            >Add Child</modus-wc-button
          >
          <modus-wc-button @buttonClick=${onAddAbove}
            >Add Above</modus-wc-button
          >
          <modus-wc-button @buttonClick=${onAddBelow}
            >Add Below</modus-wc-button
          >
          <modus-wc-button @buttonClick=${onDuplicate}
            >Duplicate</modus-wc-button
          >
          <modus-wc-button @buttonClick=${onDelete}>Delete</modus-wc-button>
        </div>
        <modus-wc-content-tree
          id=${treeId}
          search-placeholder=${args['search-placeholder']}
          .includeSearch=${args['include-search']}
          .includeActions=${false}
          .items=${initialItems}
          @itemSelect=${onItemSelect}
        ></modus-wc-content-tree>
      </div>
    `;
  },
};

export const WithManualActionsViaEvents: Story = {
  name: 'Manual Control via @Method() + treeActionClick',
  parameters: {
    docs: {
      description: {
        story: `Same as "Manual Control via @Method()" but the actions are triggered from \`treeActionClick\` events on the tree nodes rather than an external toolbar.

\`includeActions\` is \`true\` and each item has \`treeItemActions\` with custom IDs that the built-in handler ignores.
The consumer listens to \`treeActionClick\`, reads the item id from the event, calls the element's \`@Method()\` utility, and sets \`tree.items = result\`.

This is the "State Manager pattern": action buttons on nodes, consumer intercepts every action, calls utility functions, owns the final state.

Note: "Add Above" is intentionally omitted from the action list here to demonstrate that the consumer has full control over which actions to expose -- you only show what makes sense for your use case.`,
      },
      source: {
        code: `
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');

  const actions = [
    { id: 'my-add-child', icon: 'add', label: 'Add Child' },
    { id: 'my-add-below', icon: 'arrow_downward', label: 'Add Below' },
    { id: 'my-duplicate', icon: 'content_copy', label: 'Duplicate' },
    { id: 'my-delete', icon: 'delete', label: 'Delete' },
  ];

  tree.items = [
    { id: 'root-1', label: 'Design System', treeItemActions: actions, children: [
      { id: 'child-1', label: 'Components', treeItemActions: actions },
      { id: 'child-2', label: 'Tokens', treeItemActions: actions },
    ]},
    { id: 'root-2', label: 'Documentation', treeItemActions: actions },
    { id: 'root-3', label: 'Changelog', treeItemActions: actions },
  ];

  tree.addEventListener('treeActionClick', async (e) => {
    const itemEl = e.target.closest('modus-wc-tree-item');
    const itemId = itemEl?.getAttribute('data-key');
    if (!itemId) return;

    const { actionId } = e.detail;
    let newItems = null;

    if (actionId === 'my-add-child') {
      newItems = await tree.addChild(itemId, { id: crypto.randomUUID(), label: 'New Child', treeItemActions: actions });
    } else if (actionId === 'my-add-below') {
      newItems = await tree.addBelow(itemId, { id: crypto.randomUUID(), label: 'New Item', treeItemActions: actions });
    } else if (actionId === 'my-duplicate') {
      newItems = await tree.duplicateItem(itemId);
    } else if (actionId === 'my-delete') {
      newItems = await tree.deleteItem(itemId);
    }

    if (newItems) tree.items = newItems;
  });
</script>`,
      },
    },
  },
  render: (args) => {
    type TreeEl = HTMLElement & {
      items: ITreeItemData[];
      addChild: (
        parentId: string,
        newItem: ITreeItemData
      ) => Promise<ITreeItemData[] | null>;
      addBelow: (
        siblingId: string,
        newItem: ITreeItemData
      ) => Promise<ITreeItemData[] | null>;
      deleteItem: (itemId: string) => Promise<ITreeItemData[]>;
      duplicateItem: (itemId: string) => Promise<ITreeItemData[] | null>;
    };

    const treeId = 'manual-events-tree';

    const actions = [
      { id: 'my-add-child', icon: 'add', label: 'Add Child' },
      { id: 'my-add-below', icon: 'arrow_downward', label: 'Add Below' },
      { id: 'my-duplicate', icon: 'content_copy', label: 'Duplicate' },
      { id: 'my-delete', icon: 'delete', label: 'Delete' },
    ];

    const withActions = (item: ITreeItemData): ITreeItemData => ({
      ...item,
      treeItemActions: actions,
      children: item.children?.map(withActions),
    });

    const initialItems: ITreeItemData[] = [
      {
        id: 'root-1',
        label: 'Design System',
        children: [
          { id: 'child-1', label: 'Components' },
          { id: 'child-2', label: 'Tokens' },
        ],
      },
      { id: 'root-2', label: 'Documentation' },
      { id: 'root-3', label: 'Changelog' },
    ].map(withActions);

    const handleActionClick = async (e: CustomEvent<{ actionId: string }>) => {
      const tree = document.getElementById(treeId) as TreeEl | null;
      if (!tree) return;

      const itemEl = (e.target as HTMLElement).closest('modus-wc-tree-item');
      const itemId = itemEl?.getAttribute('data-key');
      if (!itemId) return;

      const { actionId } = e.detail;
      let newItems: ITreeItemData[] | null = null;

      if (actionId === 'my-add-child') {
        newItems = await tree.addChild(itemId, {
          id: crypto.randomUUID(),
          label: 'New Child',
          treeItemActions: actions,
        });
      } else if (actionId === 'my-add-below') {
        newItems = await tree.addBelow(itemId, {
          id: crypto.randomUUID(),
          label: 'New Item',
          treeItemActions: actions,
        });
      } else if (actionId === 'my-duplicate') {
        newItems = await tree.duplicateItem(itemId);
      } else if (actionId === 'my-delete') {
        newItems = await tree.deleteItem(itemId);
      }

      if (newItems) tree.items = newItems;
    };

    return html`
      <div style="height: 100px; text-align: center; width: 320px;">
        <modus-wc-typography>
          Note: "Add Above" is intentionally omitted from the action list here
          to demonstrate that the consumer has full control over which actions
          to expose
        </modus-wc-typography>
      </div>
      <div style="width: 320px; text-align: center;">
        <modus-wc-content-tree
          id=${treeId}
          search-placeholder=${args['search-placeholder']}
          .includeSearch=${args['include-search']}
          .includeActions=${true}
          .items=${initialItems}
          @treeActionClick=${handleActionClick}
        ></modus-wc-content-tree>
      </div>
    `;
  },
};

export const WithMixedActions: Story = {
  name: 'Mixed Built-in + Custom Actions',
  parameters: {
    docs: {
      description: {
        story: `Demonstrates mixing built-in actions with a consumer-defined custom action on the same node.
Each item has \`treeItemActions\` containing both built-in IDs (\`add-child\`, \`delete\`) and a custom ID (\`my-rename\`).
The component handles \`add-child\` and \`delete\` automatically and emits \`itemAdded\` / \`itemDeleted\`.
The custom \`my-rename\` action reaches the consumer via \`treeActionClick\` and triggers inline label editing.
Built-in actions use \`stopPropagation\` so they never appear in \`treeActionClick\` -- the consumer only sees their own custom IDs.`,
      },
      source: {
        code: `
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');
  const actions = [
    { id: 'add-child', icon: 'add', label: 'Add Child' },
    { id: 'my-rename', icon: 'edit', label: 'Rename' },
    { id: 'delete', icon: 'delete', label: 'Delete' },
  ];
  tree.items = [
    { id: 'root-1', label: 'Design System', treeItemActions: actions, children: [
      { id: 'child-1', label: 'Components', treeItemActions: actions },
      { id: 'child-2', label: 'Tokens', treeItemActions: actions },
    ]},
    { id: 'root-2', label: 'Documentation', treeItemActions: actions },
    { id: 'root-3', label: 'Changelog', treeItemActions: actions },
  ];
  // built-in actions (add-child, delete) are handled by the component automatically
  const applyUpdate = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', applyUpdate);
  tree.addEventListener('itemDeleted', applyUpdate);
  // custom action -- only my-rename reaches here
  tree.addEventListener('treeActionClick', (e) => {
    if (e.detail.actionId !== 'my-rename') return;
    const itemEl = e.target.closest('modus-wc-tree-item');
    if (itemEl) itemEl.inlineLabelEdit = true;
  });
</script>`,
      },
    },
  },
  render: (args) => {
    const treeId = 'mixed-actions-tree';
    const actions = [
      { id: 'add-child', icon: 'add', label: 'Add Child' },
      { id: 'my-rename', icon: 'edit', label: 'Rename' },
      { id: 'delete', icon: 'delete', label: 'Delete' },
    ];
    const withActions = (item: ITreeItemData): ITreeItemData => ({
      ...item,
      treeItemActions: actions,
      children: item.children?.map(withActions),
    });
    const initialItems: ITreeItemData[] = [
      {
        id: 'root-1',
        label: 'Design System',
        children: [
          { id: 'child-1', label: 'Components' },
          { id: 'child-2', label: 'Tokens' },
        ],
      },
      { id: 'root-2', label: 'Documentation' },
      { id: 'root-3', label: 'Changelog' },
    ].map(withActions);
    const applyUpdate = (e: CustomEvent<{ items: ITreeItemData[] }>) => {
      const tree = document.getElementById(treeId) as HTMLElement & {
        items: ITreeItemData[];
      };
      if (tree) tree.items = e.detail.items;
    };
    const handleActionClick = (e: CustomEvent<{ actionId: string }>) => {
      if (e.detail.actionId !== 'my-rename') return;
      const itemEl = (e.target as HTMLElement).closest('modus-wc-tree-item') as
        | (HTMLElement & { inlineLabelEdit: boolean })
        | null;
      if (itemEl) itemEl.inlineLabelEdit = true;
    };
    return html`
      <div style="height: 70px; text-align: center; width: 320px;">
        <modus-wc-typography>
          This demonstrates mixing built-in actions with a consumer-defined
          custom action. <br />
          Built-in: Add Child, Delete ; Consumer: Rename
        </modus-wc-typography>
      </div>
      <div style="width: 320px">
        <modus-wc-content-tree
          id=${treeId}
          search-placeholder=${args['search-placeholder']}
          .includeSearch=${args['include-search']}
          .includeActions=${true}
          .items=${initialItems}
          @itemAdded=${applyUpdate}
          @itemDeleted=${applyUpdate}
          @treeActionClick=${handleActionClick}
        ></modus-wc-content-tree>
      </div>
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
| items             | \`ITreeItemData[]\` | - | Data-driven tree data used to render items and nested children |
| itemsReordering   | \`boolean\` | \`false\` | Enables drag-and-drop reordering for data-driven trees |

#### Events

| Name           | Payload                                                         | Description |
|----------------|------------------------------------------------------------------|-------------|
| itemsReordered | \`{ items: ITreeItemData[]; parameters: ITreeItemReorderParameters }\` | Emitted after a successful drag reorder with updated tree data and reorder metadata |
| itemAdded      | \`{ item: ITreeItemData; targetItemId: string; position: 'child' \\| 'above' \\| 'below'; items: ITreeItemData[] }\` | Emitted when a built-in add action completes. Set \`tree.items = e.detail.items\` to apply. |
| itemDeleted    | \`{ itemId: string; items: ITreeItemData[] }\` | Emitted when a built-in delete action completes. Set \`tree.items = e.detail.items\` to apply. |
| itemDuplicated | \`{ item: ITreeItemData; itemId: string; items: ITreeItemData[] }\` | Emitted when a built-in duplicate action completes. Set \`tree.items = e.detail.items\` to apply. |

#### Methods

| Name            | Signature                                                              | Description |
|-----------------|------------------------------------------------------------------------|-------------|
| \`addChild\`    | \`(parentId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] \\| null>\` | Returns updated items with \`newItem\` added as a child of \`parentId\`. |
| \`addAbove\`    | \`(siblingId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] \\| null>\` | Returns updated items with \`newItem\` inserted above \`siblingId\`. |
| \`addBelow\`    | \`(siblingId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] \\| null>\` | Returns updated items with \`newItem\` inserted below \`siblingId\`. |
| \`deleteItem\`  | \`(itemId: string) => Promise<ITreeItemData[]>\` | Returns updated items with the specified item removed. |
| \`duplicateItem\` | \`(itemId: string) => Promise<ITreeItemData[] \\| null>\` | Returns updated items with a clone of the item inserted after it. |

---

### Tree View

#### Props

| Name        | Type       | Default   | Description                                           |
|-------------|------------|-----------|-------------------------------------------------------|
| customClass | \`string\` | \`''\`    | Additional CSS class to apply to the tree view        |
| isSubList   | \`boolean\` | \`false\` | Whether the tree view is a sublist of another tree item |
| multiSelect | \`boolean\` | \`false\` | Enables additive (Ctrl/Cmd) and range (Shift) selection behavior |
| showConnectorLine | \`boolean\` | \`true\` | Shows or hides connector lines for nested sublists |

#### Events

| Name                | Payload                          | Description |
|---------------------|----------------------------------|-------------|
| itemSelectionChange | \`{ selectedValues: string[] }\` | Emitted when selected tree item values change |

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
| inlineLabelEdit | \`boolean\`                            | \`false\` | Enables inline text editing for the item label               |
| itemsReordering | \`boolean\`                            | \`false\` | Shows drag handle and enables drag/drop item reordering      |
| size            | \`'xs' | 'sm' | 'md' | 'lg'\`    | \`'xs'\`  | The size of the tree item                                    |
| customClass     | \`string\`                             | \`''\`    | Additional CSS class to apply to the tree item               |
| lazyLoading     | \`boolean\`                            | \`false\` | When \`true\` and the item is expanded, shows a spinner in place of children. Managed automatically by the content tree when \`getChildren\` is provided. |
| hasChildren     | \`boolean\`                            | -         | Hint that the item has unloaded children. Used with \`getChildren\` on the content tree to show the expand chevron before children are fetched. |

#### Events

| Name             | Payload                          | Description                                     |
|------------------|----------------------------------|-------------------------------------------------|
| itemSelect       | \`{ value: string }\`            | Emitted when a tree item is selected            |
| selectionsChange | \`{ selectedValues: string[] }\` | Emitted when the selection state changes        |
| itemExpand       | \`string\`                       | Emitted with the item's \`value\` when it is expanded. Use this to trigger lazy data loading. |
| itemLabelChange  | \`string\`                       | Emitted when inline label editing is committed |
| itemReordered    | \`ITreeItemReorderedEventDetail\` | Emitted when a drag/drop reorder operation completes for the item |

#### Methods

| Name            | Type                      | Description                |
|-----------------|---------------------------|----------------------------|
| collapseSubTree | \`() => Promise<void>\`   | Collapses the subtree      |
| expandSubTree   | \`() => Promise<void>\`   | Expands the subtree        |
| setIndeterminateState | \`(indeterminate: boolean) => Promise<void>\` | Sets checkbox indeterminate state |

---

### Tree Actions

#### Props

| Name    | Type                                | Default  | Description                          |
|---------|-------------------------------------|----------|--------------------------------------|
| actions | \`ITreeItemActions[]\`              | -        | Array of actions to display          |
| size    | \`'xs' | 'sm' | 'md' | 'lg'\` | \`'xs'\` | The size of the action buttons       |

#### Behavior

- Renders the first action as a direct icon button for fast access.
- Renders remaining actions in a "More actions" dropdown menu.
- When the \`delete\` action is clicked, a confirmation UI is shown before emitting \`treeActionClick\`.
- Automatically closes other open tree-action dropdowns when a new one opens.

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
