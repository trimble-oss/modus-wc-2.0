import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import { ITreeNode, ModusSize, SelectionMode } from '../types';
import {
  contentTreeDefaultSourceCode,
  contentTreeMultiSelectSourceCode,
  contentTreeSearchFilterSourceCode,
  contentTreeTransactionalMenuSourceCode,
} from './modus-wc-content-tree-story-source';
import {
  addNode,
  deleteNode,
  duplicateNode,
  getNodeLocation,
  setNodeChecked,
  updateNode,
} from './tree-state-manager';

interface ContentTreeArgs {
  bordered?: boolean;
  'custom-class'?: string;
  'selection-mode'?: SelectionMode;
  size?: ModusSize;
}

// The controlled props are set imperatively (objects/arrays), so type the host loosely.
type ContentTreeElement = HTMLElement & {
  nodes?: ITreeNode[];
  expandedNodeIds?: string[];
  selectedNodeId?: string;
  checkedNodeIds?: string[];
  filter?: string;
  editingNodeId?: string;
};

const sampleNodes: ITreeNode[] = [
  {
    id: '1',
    label: 'Project Files',
    icon: 'folder_closed',
    children: [
      { id: '1-1', label: 'Overview', icon: 'info' },
      {
        id: '1-2',
        label: 'Resources',
        icon: 'folder_closed',
        children: [
          { id: '1-2-1', label: 'Specifications', icon: 'info' },
          { id: '1-2-2', label: 'Search Index', icon: 'search' },
        ],
      },
      { id: '1-3', label: 'Archived', icon: 'alert' },
    ],
  },
  { id: '2', label: 'Settings', icon: 'settings' },
  { id: '3', label: 'Notifications', icon: 'info' },
];

const meta: Meta<ContentTreeArgs> = {
  title: 'Components/Content Tree',
  component: 'modus-wc-content-tree',
  args: {
    'selection-mode': 'single',
    size: 'md',
  },
  argTypes: {
    'selection-mode': {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: [
        'nodeSelect',
        'nodeExpandChange',
        'nodeCheckChange',
        'nodeEdit',
        'nodeDuplicate',
        'nodeAdd',
        'nodeDelete',
        'nodeRename',
        'nodeEditCancel',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<ContentTreeArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: contentTreeDefaultSourceCode,
      },
    },
  },
  render: (args) => {
    let treeEl: ContentTreeElement | undefined;
    let selectedNodeId = '1-1';
    let expandedNodeIds: string[] = ['1'];

    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = sampleNodes;
      treeEl.selectedNodeId = selectedNodeId;
      treeEl.expandedNodeIds = [...expandedNodeIds];
    };

    const handleSelect = (e: CustomEvent<{ id: string }>) => {
      selectedNodeId = e.detail.id;
      sync();
    };

    const handleExpandChange = (
      e: CustomEvent<{ id: string; expanded: boolean }>
    ) => {
      const { id, expanded } = e.detail;
      expandedNodeIds = expanded
        ? [...expandedNodeIds, id]
        : expandedNodeIds.filter((x) => x !== id);
      sync();
    };

    // prettier-ignore
    return html`
    <modus-wc-content-tree
      ${ref((el) => {
        treeEl = (el as ContentTreeElement) ?? undefined;
        sync();
      })}
      aria-label="Content tree"
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      selection-mode=${ifDefined(args['selection-mode'])}
      size=${ifDefined(args.size)}
      @nodeSelect=${handleSelect}
      @nodeExpandChange=${handleExpandChange}
    ></modus-wc-content-tree>`;
  },
};

export const MultiSelect: Story = {
  args: {
    'selection-mode': 'multiple',
  },
  parameters: {
    docs: {
      source: {
        code: contentTreeMultiSelectSourceCode,
      },
    },
  },
  render: (args) => {
    let treeEl: ContentTreeElement | undefined;
    let selectedNodeId = '1-1';
    let expandedNodeIds: string[] = ['1', '1-2'];
    let checkedNodeIds: string[] = ['1-2-1'];

    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = sampleNodes;
      treeEl.selectedNodeId = selectedNodeId;
      treeEl.expandedNodeIds = [...expandedNodeIds];
      treeEl.checkedNodeIds = [...checkedNodeIds];
    };

    const handleSelect = (e: CustomEvent<{ id: string }>) => {
      selectedNodeId = e.detail.id;
      sync();
    };

    const handleExpandChange = (
      e: CustomEvent<{ id: string; expanded: boolean }>
    ) => {
      const { id, expanded } = e.detail;
      expandedNodeIds = expanded
        ? [...expandedNodeIds, id]
        : expandedNodeIds.filter((x) => x !== id);
      sync();
    };

    const handleCheckChange = (
      e: CustomEvent<{ id: string; checked: boolean }>
    ) => {
      const { id, checked } = e.detail;
      checkedNodeIds = setNodeChecked(sampleNodes, checkedNodeIds, id, checked);
      sync();
    };

    // prettier-ignore
    return html`
    <modus-wc-content-tree
      ${ref((el) => {
        treeEl = (el as ContentTreeElement) ?? undefined;
        sync();
      })}
      aria-label="Content tree"
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      selection-mode=${ifDefined(args['selection-mode'])}
      size=${ifDefined(args.size)}
      @nodeSelect=${handleSelect}
      @nodeExpandChange=${handleExpandChange}
      @nodeCheckChange=${handleCheckChange}
    ></modus-wc-content-tree>`;
  },
};

export const SearchFilter: Story = {
  parameters: {
    docs: {
      source: {
        code: contentTreeSearchFilterSourceCode,
      },
    },
  },
  render: (args) => {
    let treeEl: ContentTreeElement | undefined;
    let selectedNodeId = '1-2-2';
    let expandedNodeIds: string[] = ['1', '1-2'];
    let filter = '';

    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = sampleNodes;
      treeEl.selectedNodeId = selectedNodeId;
      treeEl.expandedNodeIds = [...expandedNodeIds];
      treeEl.filter = filter;
    };

    const handleSelect = (e: CustomEvent<{ id: string }>) => {
      selectedNodeId = e.detail.id;
      sync();
    };

    const handleExpandChange = (
      e: CustomEvent<{ id: string; expanded: boolean }>
    ) => {
      const { id, expanded } = e.detail;
      expandedNodeIds = expanded
        ? [...expandedNodeIds, id]
        : expandedNodeIds.filter((x) => x !== id);
      sync();
    };

    const handleFilter = (e: CustomEvent<InputEvent>) => {
      filter = (e.detail?.target as HTMLInputElement)?.value ?? '';
      sync();
    };

    const handleClear = () => {
      filter = '';
      sync();
    };

    // prettier-ignore
    return html`
    <style>
      .modus-wc-content-tree-search-demo {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: 20rem;
      }
    </style>
    <div class="modus-wc-content-tree-search-demo">
      <modus-wc-text-input
        aria-label="Filter tree"
        include-clear
        include-search
        placeholder="Filter nodes…"
        size=${ifDefined(args.size)}
        type="text"
        @inputChange=${handleFilter}
        @clearClick=${handleClear}
      ></modus-wc-text-input>
      <modus-wc-content-tree
        ${ref((el) => {
          treeEl = (el as ContentTreeElement) ?? undefined;
          sync();
        })}
        aria-label="Content tree"
        ?bordered=${args.bordered}
        selection-mode=${ifDefined(args['selection-mode'])}
        size=${ifDefined(args.size)}
      @nodeSelect=${handleSelect}
      @nodeExpandChange=${handleExpandChange}
    ></modus-wc-content-tree>
    </div>`;
  },
};

export const TransactionalMenu: Story = {
  parameters: {
    docs: {
      source: {
        code: contentTreeTransactionalMenuSourceCode,
      },
    },
  },
  render: (args) => {
    let treeEl: ContentTreeElement | undefined;
    // A private copy so the shared sampleNodes stays untouched across stories.
    let nodes: ITreeNode[] = structuredClone(sampleNodes);
    let selectedNodeId = '1-1';
    let expandedNodeIds: string[] = ['1', '1-2'];
    let editingNodeId: string | undefined;
    // Ids assigned to nodes created via the menu; used to discard empty cancels.
    const freshIds = new Set<string>();
    let idCounter = 0;
    const makeId = () => `new-${Date.now()}-${idCounter++}`;

    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = nodes;
      treeEl.selectedNodeId = selectedNodeId;
      treeEl.expandedNodeIds = [...expandedNodeIds];
      treeEl.editingNodeId = editingNodeId;
    };

    const startEditing = (id: string, fresh: boolean) => {
      editingNodeId = id;
      if (fresh) freshIds.add(id);
      sync();
    };

    const handleSelect = (e: CustomEvent<{ id: string }>) => {
      selectedNodeId = e.detail.id;
      sync();
    };

    const handleExpandChange = (
      e: CustomEvent<{ id: string; expanded: boolean }>
    ) => {
      const { id, expanded } = e.detail;
      expandedNodeIds = expanded
        ? [...expandedNodeIds, id]
        : expandedNodeIds.filter((x) => x !== id);
      sync();
    };

    const handleEdit = (e: CustomEvent<{ id: string }>) => {
      startEditing(e.detail.id, false);
    };

    const handleDuplicate = (e: CustomEvent<{ id: string }>) => {
      const result = duplicateNode(nodes, e.detail.id, makeId);
      nodes = result.nodes;
      if (result.newId) startEditing(result.newId, false);
      else sync();
    };

    const handleAdd = (
      e: CustomEvent<{
        referenceId: string;
        position: 'above' | 'below' | 'child';
      }>
    ) => {
      const { referenceId, position } = e.detail;
      const newId = makeId();
      const newNode: ITreeNode = { id: newId, label: '' };

      if (position === 'child') {
        nodes = addNode(nodes, newNode, { parentId: referenceId });
        if (!expandedNodeIds.includes(referenceId)) {
          expandedNodeIds = [...expandedNodeIds, referenceId];
        }
      } else {
        const loc = getNodeLocation(nodes, referenceId);
        const index = (loc?.index ?? 0) + (position === 'below' ? 1 : 0);
        nodes = addNode(nodes, newNode, { parentId: loc?.parentId, index });
      }
      startEditing(newId, true);
    };

    const handleDelete = (e: CustomEvent<{ id: string }>) => {
      nodes = deleteNode(nodes, e.detail.id);
      freshIds.delete(e.detail.id);
      sync();
    };

    const handleRename = (e: CustomEvent<{ id: string; label: string }>) => {
      const { id, label } = e.detail;
      // An empty name on a brand-new node discards it; otherwise apply the label.
      if (!label && freshIds.has(id)) {
        nodes = deleteNode(nodes, id);
      } else {
        nodes = updateNode(nodes, id, { label: label || 'Untitled' });
      }
      freshIds.delete(id);
      editingNodeId = undefined;
      sync();
    };

    const handleEditCancel = (e: CustomEvent<{ id: string }>) => {
      const { id } = e.detail;
      // Discard a freshly added node that was never named.
      if (freshIds.has(id)) nodes = deleteNode(nodes, id);
      freshIds.delete(id);
      editingNodeId = undefined;
      sync();
    };

    // prettier-ignore
    return html`
    <modus-wc-content-tree
      ${ref((el) => {
        treeEl = (el as ContentTreeElement) ?? undefined;
        sync();
      })}
      aria-label="Content tree"
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      selection-mode=${ifDefined(args['selection-mode'])}
      size=${ifDefined(args.size)}
      @nodeSelect=${handleSelect}
      @nodeExpandChange=${handleExpandChange}
      @nodeEdit=${handleEdit}
      @nodeDuplicate=${handleDuplicate}
      @nodeAdd=${handleAdd}
      @nodeDelete=${handleDelete}
      @nodeRename=${handleRename}
      @nodeEditCancel=${handleEditCancel}
    ></modus-wc-content-tree>`;
  },
};
