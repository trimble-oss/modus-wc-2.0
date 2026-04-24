import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  addTreeItemAdjacentData,
  addTreeItemData,
  deleteTreeItemData,
  duplicateTreeItemData,
  updateTreeItemData,
} from './modus-wc-content-tree.utils';
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
    clientId: 'phase-1-client',
    label: 'Phase 1',
    children: [
      { id: 'backlog', clientId: 'backlog-client', label: 'Backlog' },
      {
        id: 'in-progress',
        clientId: 'in-progress-client',
        label: 'In Progress',
      },
      { id: 'review', clientId: 'review-client', label: 'Review' },
    ],
  },
  {
    id: 'phase-2',
    clientId: 'phase-2-client',
    label: 'Phase 2',
    children: [
      { id: 'qa', clientId: 'qa-client', label: 'QA' },
      { id: 'uat', clientId: 'uat-client', label: 'UAT' },
      { id: 'done', clientId: 'done-client', label: 'Done' },
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
          'This example starts with a custom slot-based empty state and transitions to data-driven mode after creating the first node. Consumers can provide a custom empty state through the default slot.',
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
  const id = 'new-item-' + Date.now();
  tree.querySelector('.modus-wc-content-tree-empty-story')?.remove();
  tree.items = [{
    id,
    clientId: id,
    label: 'New Item',
    inlineLabelEdit: true,
  }];
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

    const handleAddNewItem = (event: Event) => {
      const contentTree = (event.currentTarget as HTMLElement)?.closest(
        'modus-wc-content-tree'
      ) as ContentTreeElement | null;

      if (!contentTree) return;

      const newId = `new-item-${Date.now()}`;
      contentTree.querySelector('.modus-wc-content-tree-empty-story')?.remove();
      contentTree.items = [
        {
          id: newId,
          clientId: newId,
          label: 'New Item',
          inlineLabelEdit: true,
        },
      ];
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
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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

export const MultiSelect: Story = {
  name: 'Multi-selection',
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

export const CheckboxSelection: Story = {
  name: 'Checkbox Selection',
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates a data-driven tree with checkboxes for multi-selection. Selecting a parent item selects its descendants, and descendant selections update parent indeterminate/checked states.',
      },
      source: {
        code: `
<script>
const items = [
  {
    id: 'documents',
    clientId: 'documents-node',
    label: 'Documents',
    checkbox: true,
    children: [
      { id: 'report', clientId: 'report-node', label: 'Report.pdf', checkbox: true },
      { id: 'proposal', clientId: 'proposal-node', label: 'Proposal.docx', checkbox: true },
    ],
  },
  {
    id: 'projects',
    clientId: 'projects-node',
    label: 'Projects',
    checkbox: true,
    children: [
      { id: 'alpha', clientId: 'alpha-node', label: 'Project Alpha', checkbox: true },
      { id: 'beta', clientId: 'beta-node', label: 'Project Beta', checkbox: true },
    ],
  },
  { id: 'archive', clientId: 'archive-node', label: 'Archive', checkbox: true },
];
</script>

<modus-wc-content-tree
  search-placeholder="Search..."
  include-search="true"
  include-actions="true"
  .items="items"
></modus-wc-content-tree>
`,
      },
    },
  },
  render: (args) => {
    const checkboxItems: ITreeItemData[] = [
      {
        id: 'documents',
        clientId: 'documents-node',
        label: 'Documents',
        checkbox: true,
        children: [
          {
            id: 'report',
            clientId: 'report-node',
            label: 'Report.pdf',
            checkbox: true,
          },
          {
            id: 'proposal',
            clientId: 'proposal-node',
            label: 'Proposal.docx',
            checkbox: true,
          },
        ],
      },
      {
        id: 'projects',
        clientId: 'projects-node',
        label: 'Projects',
        checkbox: true,
        children: [
          {
            id: 'alpha',
            clientId: 'alpha-node',
            label: 'Project Alpha',
            checkbox: true,
          },
          {
            id: 'beta',
            clientId: 'beta-node',
            label: 'Project Beta',
            checkbox: true,
          },
        ],
      },
      {
        id: 'archive',
        clientId: 'archive-node',
        label: 'Archive',
        checkbox: true,
      },
    ];

    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        customClass=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
        .items=${checkboxItems}
      ></modus-wc-content-tree>
    `;
  },
};

export const WithActions: Story = {
  name: 'With Actions',
  args: {
    'include-search': false,
    'include-actions': false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A compact stateless example using `addTreeItemData`, `duplicateTreeItemData`, `updateTreeItemData`, and `deleteTreeItemData`. The consumer reads `event.detail.itemId` on `treeActionClick`, calls a utility, and assigns the result back to `tree.items`.',
      },
      source: {
        code: `
<script>
  const actions = [
    { id: 'add-child', label: 'Add Child', icon: 'subdirectory_arrow_right' },
    { id: 'duplicate', label: 'Duplicate', icon: 'copy_content' },
    { id: 'edit-label', label: 'Edit Label', icon: 'pencil' },
    { id: 'delete', label: 'Delete', icon: 'delete' },
  ];

  let counter = 1;
  let items = [
    { id: 'roadmap', clientId: 'roadmap', label: 'Roadmap', treeItemActions: actions },
    { id: 'backlog', clientId: 'backlog', label: 'Backlog', treeItemActions: actions },
  ];

  const tree = document.querySelector('modus-wc-content-tree');
  tree.items = items;

  const apply = (next) => { if (next) { items = next; tree.items = items; } };

  tree.addEventListener('treeActionClick', (event) => {
    const { actionId, itemId } = event.detail;
    if (!itemId) return;

    if (actionId === 'add-child') {
      const id = 'child-' + counter++;
      apply(addTreeItemData(items, {
        parentId: itemId,
        item: { id, clientId: id, label: 'New Child', treeItemActions: actions },
      }));
    } else if (actionId === 'duplicate') {
      apply(duplicateTreeItemData(items, { itemId }));
    } else if (actionId === 'edit-label') {
      apply(updateTreeItemData(items, { itemId, patch: { inlineLabelEdit: true } }));
    } else if (actionId === 'delete') {
      apply(deleteTreeItemData(items, { itemId }));
    }
  });

  tree.addEventListener('itemLabelChange', (event) => {
    const treeItem = event.target.closest('modus-wc-tree-item');
    if (!treeItem) return;
    apply(updateTreeItemData(items, {
      itemId: treeItem.value,
      patch: { label: event.detail, inlineLabelEdit: false },
    }));
  });
</script>

<modus-wc-content-tree></modus-wc-content-tree>
`,
      },
    },
  },
  render: () => {
    const actions = [
      { id: 'add-child', label: 'Add Child', icon: 'subdirectory_arrow_right' },
      { id: 'duplicate', label: 'Duplicate', icon: 'copy_content' },
      { id: 'edit-label', label: 'Edit Label', icon: 'pencil' },
      { id: 'delete', label: 'Delete', icon: 'delete' },
    ];

    let counter = 1;
    let items: ITreeItemData[] = [
      {
        id: 'roadmap',
        clientId: 'roadmap',
        label: 'Roadmap',
        treeItemActions: actions,
      },
      {
        id: 'backlog',
        clientId: 'backlog',
        label: 'Backlog',
        treeItemActions: actions,
      },
    ];

    const apply = (
      tree: HTMLElement & { items?: ITreeItemData[] },
      next: ITreeItemData[] | null
    ) => {
      if (!next) return;
      items = next;
      tree.items = items;
    };

    const handleTreeActionClick = (
      event: CustomEvent<{ actionId: string; itemId: string | null }>
    ) => {
      const { actionId, itemId } = event.detail;
      if (!itemId) return;
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };

      if (actionId === 'add-child') {
        const id = `child-${counter++}`;
        apply(
          tree,
          addTreeItemData(items, {
            parentId: itemId,
            item: {
              id,
              clientId: id,
              label: 'New Child',
              treeItemActions: actions,
            },
          })
        );
      } else if (actionId === 'duplicate') {
        apply(tree, duplicateTreeItemData(items, { itemId }));
      } else if (actionId === 'edit-label') {
        apply(
          tree,
          updateTreeItemData(items, {
            itemId,
            patch: { inlineLabelEdit: true },
          })
        );
      } else if (actionId === 'delete') {
        apply(tree, deleteTreeItemData(items, { itemId }));
      }
    };

    const handleItemLabelChange = (event: CustomEvent<string>) => {
      const treeItem = (event.target as HTMLElement).closest(
        'modus-wc-tree-item'
      ) as ITreeItemElement | null;
      if (!treeItem) return;
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      apply(
        tree,
        updateTreeItemData(items, {
          itemId: treeItem.value,
          patch: { label: event.detail, inlineLabelEdit: false },
        })
      );
    };

    return html`
      <modus-wc-content-tree
        .items=${items}
        @treeActionClick=${handleTreeActionClick}
        @itemLabelChange=${handleItemLabelChange}
      ></modus-wc-content-tree>
    `;
  },
};

export const ControlledActionsWithUtilities: Story = {
  name: 'Controlled Actions With Utilities',
  args: {
    'include-search': false,
    'include-actions': false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Full stateless example covering every mutation utility: `addTreeItemData`, `addTreeItemAdjacentData`, `duplicateTreeItemData`, `updateTreeItemData`, and `deleteTreeItemData`. The consumer reads `event.detail.itemId` on `treeActionClick`, picks the matching utility, and assigns the returned array back to `tree.items`.',
      },
      source: {
        code: `
<script>
  const treeActions = [
    { id: 'add-node-above', label: 'Add Node Above', icon: 'add', ariaLabel: 'Add node above' },
    { id: 'add-node-below', label: 'Add Node Below', icon: 'add', ariaLabel: 'Add node below' },
    { id: 'add-child', label: 'Add Child', icon: 'subdirectory_arrow_right', ariaLabel: 'Add child node' },
    { id: 'duplicate', label: 'Duplicate', icon: 'copy_content', ariaLabel: 'Duplicate node' },
    { id: 'edit-label', label: 'Edit Label', icon: 'pencil', ariaLabel: 'Edit label' },
    { id: 'delete', label: 'Delete', icon: 'delete', ariaLabel: 'Delete node' },
  ];

  const withTreeActions = (items) =>
    items.map((item) => ({
      ...item,
      treeItemActions: treeActions,
      children: item.children ? withTreeActions(item.children) : undefined,
    }));

  let itemCounter = 1;
  let items = withTreeActions([
    {
      id: 'roadmap',
      clientId: 'roadmap-client',
      label: 'Roadmap',
      children: [{ id: 'milestone-1', clientId: 'milestone-1-client', label: 'Milestone 1' }],
    },
    { id: 'backlog', clientId: 'backlog-client', label: 'Backlog' },
  ]);

  const tree = document.querySelector('modus-wc-content-tree');
  tree.items = items;

  const apply = (next) => { if (next) { items = next; tree.items = items; } };

  tree.addEventListener('treeActionClick', (event) => {
    const { actionId, itemId } = event.detail;
    if (!itemId) return;

    if (actionId === 'add-node-above' || actionId === 'add-node-below') {
      const id = 'new-node-' + itemCounter++;
      apply(addTreeItemAdjacentData(items, {
        referenceItemId: itemId,
        item: { id, clientId: id + '-client', label: 'New Node', treeItemActions: treeActions },
        placement: actionId === 'add-node-above' ? 'above' : 'below',
      }));
    } else if (actionId === 'add-child') {
      const id = 'new-child-' + itemCounter++;
      apply(addTreeItemData(items, {
        parentId: itemId,
        item: { id, clientId: id + '-client', label: 'New Child', treeItemActions: treeActions },
      }));
    } else if (actionId === 'duplicate') {
      apply(duplicateTreeItemData(items, { itemId }));
    } else if (actionId === 'edit-label') {
      apply(updateTreeItemData(items, { itemId, patch: { inlineLabelEdit: true } }));
    } else if (actionId === 'delete') {
      apply(deleteTreeItemData(items, { itemId }));
    }
  });

  tree.addEventListener('itemLabelChange', (event) => {
    const treeItem = event.target.closest('modus-wc-tree-item');
    if (!treeItem) return;
    apply(updateTreeItemData(items, {
      itemId: treeItem.value,
      patch: { label: event.detail, inlineLabelEdit: false },
    }));
  });
</script>

<modus-wc-content-tree include-search="false" include-actions="false"></modus-wc-content-tree>
`,
      },
    },
  },
  render: () => {
    const treeActions = [
      {
        id: 'add-node-above',
        label: 'Add Node Above',
        icon: 'add',
        ariaLabel: 'Add node above',
      },
      {
        id: 'add-node-below',
        label: 'Add Node Below',
        icon: 'add',
        ariaLabel: 'Add node below',
      },
      {
        id: 'add-child',
        label: 'Add Child',
        icon: 'subdirectory_arrow_right',
        ariaLabel: 'Add child node',
      },
      {
        id: 'duplicate',
        label: 'Duplicate',
        icon: 'copy_content',
        ariaLabel: 'Duplicate node',
      },
      {
        id: 'edit-label',
        label: 'Edit Label',
        icon: 'pencil',
        ariaLabel: 'Edit label',
      },
      {
        id: 'delete',
        label: 'Delete',
        icon: 'delete',
        ariaLabel: 'Delete node',
      },
    ];

    const withTreeActions = (items: ITreeItemData[]): ITreeItemData[] =>
      items.map((item) => ({
        ...item,
        treeItemActions: treeActions,
        children: item.children ? withTreeActions(item.children) : undefined,
      }));

    let itemCounter = 1;
    let items: ITreeItemData[] = withTreeActions([
      {
        id: 'roadmap',
        clientId: 'roadmap-client',
        label: 'Roadmap',
        children: [
          {
            id: 'milestone-1',
            clientId: 'milestone-1-client',
            label: 'Milestone 1',
          },
        ],
      },
      { id: 'backlog', clientId: 'backlog-client', label: 'Backlog' },
    ]);

    const apply = (
      tree: HTMLElement & { items?: ITreeItemData[] },
      next: ITreeItemData[] | null
    ) => {
      if (!next) return;
      items = next;
      tree.items = items;
    };

    const handleTreeActionClick = (
      event: CustomEvent<{
        actionId: string;
        actionName: string;
        itemId: string | null;
        parentItemId: string | null;
      }>
    ) => {
      const { actionId, itemId } = event.detail;
      if (!itemId) return;
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };

      switch (actionId) {
        case 'add-node-above':
        case 'add-node-below': {
          const id = `new-node-${itemCounter++}`;
          apply(
            tree,
            addTreeItemAdjacentData(items, {
              referenceItemId: itemId,
              item: {
                id,
                clientId: `${id}-client`,
                label: 'New Node',
                treeItemActions: treeActions,
              },
              placement: actionId === 'add-node-above' ? 'above' : 'below',
            })
          );
          return;
        }
        case 'add-child': {
          const id = `new-child-${itemCounter++}`;
          apply(
            tree,
            addTreeItemData(items, {
              parentId: itemId,
              item: {
                id,
                clientId: `${id}-client`,
                label: 'New Child',
                treeItemActions: treeActions,
              },
            })
          );
          return;
        }
        case 'duplicate':
          apply(tree, duplicateTreeItemData(items, { itemId }));
          return;
        case 'edit-label':
          apply(
            tree,
            updateTreeItemData(items, {
              itemId,
              patch: { inlineLabelEdit: true },
            })
          );
          return;
        case 'delete':
          apply(tree, deleteTreeItemData(items, { itemId }));
          return;
      }
    };

    const handleItemLabelChange = (event: CustomEvent<string>) => {
      const treeItem = (event.target as HTMLElement).closest(
        'modus-wc-tree-item'
      ) as ITreeItemElement | null;
      if (!treeItem) return;
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      apply(
        tree,
        updateTreeItemData(items, {
          itemId: treeItem.value,
          patch: { label: event.detail, inlineLabelEdit: false },
        })
      );
    };

    return html`
      <modus-wc-content-tree
        .includeSearch=${false}
        .includeActions=${false}
        .items=${items}
        @treeActionClick=${handleTreeActionClick}
        @itemLabelChange=${handleItemLabelChange}
      >
      </modus-wc-content-tree>
    `;
  },
};

export const ItemsReordering: Story = {
  name: 'Items Reordering',
  args: {
    'include-search': false,
    'include-actions': false,
    'items-reordering': true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Enables drag-and-drop reordering with top/bottom drop-line indicators for data-driven `items` in the same level.',
      },
      source: {
        code: `
<script>
let items = [
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

const tree = document.querySelector('modus-wc-content-tree');
tree.items = items;

tree.addEventListener('itemsReordered', (event) => {
  // Use clientId as stable UI identity while backend IDs can change.
  items = [...event.detail.items];
  tree.items = items;
});
</script>

<modus-wc-content-tree
  include-search="false"
  include-actions="false"
  items-reordering="true"
></modus-wc-content-tree>
`,
      },
    },
  },
  render: (args) => {
    const initialItems = [...(args.items ?? nestedItemsReorderingData)];

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
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      tree.items = [...event.detail.items];
    };

    return html`
      <modus-wc-content-tree
        search-placeholder=${args['search-placeholder']}
        customClass=${args['custom-class']}
        .includeSearch=${args['include-search']}
        .includeActions=${args['include-actions']}
        .itemsReordering=${args['items-reordering']}
        .items=${initialItems}
        @itemsReordered=${handleItemsReordered}
      ></modus-wc-content-tree>
    `;
  },
};

export const LazyLoading: Story = {
  name: 'Lazy Loading',
  parameters: {
    docs: {
      description: {
        story: `Demonstrates lazy loading using the data-driven \`items\` prop and \`itemExpand\` event with stable \`clientId\` identity. Items with \`hasChildren: true\` and no \`children\` show an expand chevron; when expanded, the tree shows a loader until the consumer provides children by updating \`items\`.`,
      },
      source: {
        code: `
<script>
const initialItems = [
  { id: 'db-101', clientId: 'documents-node', label: 'Documents', hasChildren: true },
  { id: 'db-102', clientId: 'projects-node', label: 'Projects', hasChildren: true },
  { id: 'db-103', clientId: 'resources-node', label: 'Resources', hasChildren: true },
];

const mockData = {
  'documents-node': [
    { id: 'db-201', clientId: 'report-node', label: 'Report.pdf' },
    { id: 'db-202', clientId: 'proposal-node', label: 'Proposal.docx' },
    { id: 'db-203', clientId: 'notes-node', label: 'Meeting Notes.txt' },
  ],
  'projects-node': [
    { id: 'db-301', clientId: 'website-node', label: 'Website Redesign', hasChildren: true },
    { id: 'db-302', clientId: 'mobile-node', label: 'Mobile App' },
    { id: 'db-303', clientId: 'api-node', label: 'API Integration' },
  ],
  'resources-node': [
    { id: 'db-401', clientId: 'templates-node', label: 'Templates' },
    { id: 'db-402', clientId: 'guide-node', label: 'Style Guide' },
  ],
  'website-node': [
    { id: 'db-501', clientId: 'design-node', label: 'Design Mockups' },
    { id: 'db-502', clientId: 'dev-node', label: 'Development' },
  ],
};

const getIdentity = (item) => item.clientId ?? item.id;

const tree = document.querySelector('modus-wc-content-tree');
tree.items = initialItems;

tree.addEventListener('itemExpand', async (event) => {
  const itemIdentity = event.detail;

  const findItem = (items) => {
    for (const item of items) {
      if (getIdentity(item) === itemIdentity) return item;
      if (item.children) {
        const found = findItem(item.children);
        if (found) return found;
      }
    }
  };

  const item = findItem(tree.items);
  if (item?.children?.length) return;

  const children = await new Promise((resolve) =>
    setTimeout(() => resolve(mockData[itemIdentity] ?? []), 1500)
  );

  const nextItems = updateTreeItemData(tree.items, {
    itemId: itemIdentity,
    patch: {
      children,
      hasChildren: children.length > 0,
    },
  });

  if (nextItems) {
    tree.items = nextItems;
  }
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
      {
        id: 'db-101',
        clientId: 'documents-node',
        label: 'Documents',
        hasChildren: true,
      },
      {
        id: 'db-102',
        clientId: 'projects-node',
        label: 'Projects',
        hasChildren: true,
      },
      {
        id: 'db-103',
        clientId: 'resources-node',
        label: 'Resources',
        hasChildren: true,
      },
    ];

    const mockData: Record<string, ITreeItemData[]> = {
      'documents-node': [
        { id: 'db-201', clientId: 'report-node', label: 'Report.pdf' },
        { id: 'db-202', clientId: 'proposal-node', label: 'Proposal.docx' },
        { id: 'db-203', clientId: 'notes-node', label: 'Meeting Notes.txt' },
      ],
      'projects-node': [
        {
          id: 'db-301',
          clientId: 'website-node',
          label: 'Website Redesign',
          hasChildren: true,
        },
        { id: 'db-302', clientId: 'mobile-node', label: 'Mobile App' },
        { id: 'db-303', clientId: 'api-node', label: 'API Integration' },
      ],
      'resources-node': [
        { id: 'db-401', clientId: 'templates-node', label: 'Templates' },
        { id: 'db-402', clientId: 'guide-node', label: 'Style Guide' },
      ],
      'website-node': [
        { id: 'db-501', clientId: 'design-node', label: 'Design Mockups' },
        { id: 'db-502', clientId: 'dev-node', label: 'Development' },
      ],
    };

    const getIdentity = (item: ITreeItemData): string =>
      item.clientId ?? item.id;

    const findItem = (
      items: ITreeItemData[],
      identity: string
    ): ITreeItemData | undefined => {
      for (const item of items) {
        if (getIdentity(item) === identity) return item;
        if (item.children) {
          const found = findItem(item.children, identity);
          if (found) return found;
        }
      }
      return undefined;
    };

    const handleItemExpand = async (event: CustomEvent<string>) => {
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      const itemIdentity = event.detail;
      const current = tree.items ?? initialItems;
      const item = findItem(current, itemIdentity);
      if (item?.children?.length) return;

      const children = await new Promise<ITreeItemData[]>((resolve) =>
        setTimeout(() => resolve(mockData[itemIdentity] ?? []), 1500)
      );

      const nextItems = updateTreeItemData(current, {
        itemId: itemIdentity,
        patch: {
          children,
          hasChildren: children.length > 0,
        },
      });

      if (nextItems) {
        tree.items = nextItems;
      }
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

export const ApiReference: Story = {
  name: 'API Reference',
  parameters: {
    docs: {
      description: {
        story: `
### Support Model

| Mode | Supported Scope |
|------|------------------|
| Slot-based (no \`items\`) | Basic nested rendering, basic expand/collapse and selection UX, basic action buttons/events, styling/composition flexibility |
| Data-driven (\`items\`) | Controlled/stateless updates, mutation utilities, lazy loading orchestration, and drag/drop reordering |

> Use the data-driven \`items\` model for controlled application state. Treat slot-based usage as basic/uncontrolled mode.

### Props

| Name              | Type       | Default      | Description                                       |
|-------------------|------------|--------------|---------------------------------------------------|
| customClass       | \`string\` | \`''\`       | Additional CSS class to apply to the component    |
| searchPlaceholder | \`string\` | \`'Search...'\` | Placeholder text for the search input          |
| includeSearch     | \`boolean\` | \`true\`    | Whether to display the search functionality       |
| includeActions    | \`boolean\` | \`true\`    | Whether to display action buttons for tree items  |
| items             | \`ITreeItemData[]\` | - | Data-driven tree data used to render items and nested children. If omitted, slotted content is rendered in basic/uncontrolled mode. |
| itemsReordering   | \`boolean\` | \`false\` | Enables drag-and-drop reordering for data-driven trees only (not slot-based trees). |

#### Events

| Name           | Payload                                                         | Description |
|----------------|------------------------------------------------------------------|-------------|
| itemsReordered | \`{ items: ITreeItemData[]; parameters: ITreeItemReorderParameters }\` | Emitted after a successful drag reorder with updated tree data and reorder metadata in data-driven mode only |

---

### State Manager Utilities

Use these helpers to keep tree updates controlled/stateless in data-driven mode. Each utility returns \`nextItems\`; your application decides whether to apply it.

| Utility | Parameters | Description |
|---------|------------|-------------|
| \`addTreeItemData\` | \`(items, { parentId, item, index? })\` | Adds an item at root or as a child under \`parentId\`. |
| \`addTreeItemAdjacentData\` | \`(items, { referenceItemId, item, placement })\` | Inserts a sibling above or below an existing item. |
| \`deleteTreeItemData\` | \`(items, { itemId })\` | Removes an item by identity. |
| \`duplicateTreeItemData\` | \`(items, { itemId, parentId?, index? })\` | Duplicates an item/subtree with regenerated IDs. |
| \`updateTreeItemData\` | \`(items, { itemId, patch })\` | Updates an existing item by identity using a partial patch. |
| \`reorderTreeItemsData\` | \`(items, parameters)\` | Computes reordered tree data for drag/drop operations. |

#### Built-in Action Mapping

| Action ID | Recommended Utility |
|-----------|----------------------|
| \`add-node-above\` | \`addTreeItemAdjacentData(..., { placement: 'above' })\` |
| \`add-node-below\` | \`addTreeItemAdjacentData(..., { placement: 'below' })\` |
| \`add-child\` | \`addTreeItemData\` |
| \`duplicate\` | \`duplicateTreeItemData\` |
| \`edit-label\` | \`updateTreeItemData\` |
| \`delete\` | \`deleteTreeItemData\` |

#### Controlled Update Flow

1. Handle \`treeActionClick\` or \`itemsReordered\`.
2. Call the mapped utility to compute \`nextItems\`.
3. Optionally validate/persist with your backend.
4. Apply \`nextItems\` by updating \`items\`.

> The controlled flow above applies to data-driven mode. Slot-based mode is intentionally limited to basic UI behavior.

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

#### ITreeItemData

\`\`\`typescript
interface ITreeItemData {
  id: string;                // Backend/persistent identifier
  clientId?: string;         // Optional stable client-generated identifier (for example UUID)
  label: string;
  checkbox?: boolean;
  startIcon?: string;
  treeItemActions?: ITreeItemActions[];
  children?: ITreeItemData[];
  hasChildren?: boolean;
}
\`\`\`

---

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
