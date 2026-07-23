import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import {
  IContentTreeToolbar,
  ITreeNode,
  ITreeNodeIcon,
  ModusSize,
  SelectionMode,
} from '../types';
import {
  contentTreeBuildSourceCode,
  contentTreeDefaultSourceCode,
  contentTreeDragAndDropSourceCode,
  contentTreeLazyLoadingSourceCode,
  contentTreeMultiSelectSourceCode,
  contentTreeSearchFilterSourceCode,
  contentTreeToolbarSourceCode,
  contentTreeTransactionalMenuSourceCode,
} from './modus-wc-content-tree-story-source';
import {
  addNode,
  deleteNode,
  deleteNodes,
  duplicateNode,
  findNode,
  getExpandableNodeIds,
  getNodeLocation,
  moveNodeRelative,
  setNodeChecked,
  setNodeDisabled,
  updateNode,
} from './tree-state-manager';

interface ContentTreeArgs {
  bordered?: boolean;
  'custom-class'?: string;
  'selection-mode'?: SelectionMode;
  size?: ModusSize;
  searchable?: boolean;
  filter?: string;
  toolbar?: IContentTreeToolbar;
  'allow-drag-drop'?: boolean;
}

// The controlled props are set imperatively (objects/arrays), so type the host loosely.
type ContentTreeElement = HTMLElement & {
  nodes?: ITreeNode[];
  expandedNodeIds?: string[];
  selectedNodeId?: string;
  checkedNodeIds?: string[];
  filter?: string;
  editingNodeId?: string;
  allowDragDrop?: boolean;
  toolbar?: IContentTreeToolbar;
  searchable?: boolean;
};

/** Log to the Actions panel without stacking duplicate decorator listeners. */
const withStoryAction =
  <T>(
    name: string,
    handler: (e: CustomEvent<T>) => void
  ): ((e: CustomEvent<T>) => void) =>
  (e) => {
    action(name)(e);
    handler(e);
  };

const sameIdList = (a: string[], b: string[]): boolean => {
  if (a.length !== b.length) return false;
  const setB = new Set(b);
  return a.every((id) => setB.has(id));
};

const syncExpandedNodeIds = (
  treeEl: ContentTreeElement,
  ids: string[]
): void => {
  const current = treeEl.expandedNodeIds;
  if (Array.isArray(current) && sameIdList(current, ids)) return;
  treeEl.expandedNodeIds = [...ids];
};

const applyControlArgs = (
  treeEl: ContentTreeElement,
  args: ContentTreeArgs
): void => {
  if (args.searchable !== undefined) treeEl.searchable = args.searchable;
  if (args.toolbar !== undefined) treeEl.toolbar = args.toolbar;
  if (args.filter !== undefined) treeEl.filter = args.filter;
  if (args['allow-drag-drop'] !== undefined) {
    treeEl.allowDragDrop = args['allow-drag-drop'];
  }
};

const treeIcon = (
  name: string,
  variant: 'outlined' | 'solid' = 'solid'
): ITreeNodeIcon => ({ name, variant });

const sampleNodes: ITreeNode[] = [
  {
    id: '1',
    label: 'Project Files',
    icon: treeIcon('folder_closed'),
    children: [
      { id: '1-1', label: 'Overview', icon: treeIcon('info') },
      {
        id: '1-2',
        label: 'Resources',
        icon: treeIcon('folder_closed'),
        children: [
          { id: '1-2-1', label: 'Specifications', icon: treeIcon('info') },
          { id: '1-2-2', label: 'Search Index', icon: treeIcon('search') },
        ],
      },
      { id: '1-3', label: 'Archived', icon: treeIcon('alert') },
    ],
  },
  { id: '2', label: 'Settings', icon: treeIcon('settings') },
  { id: '3', label: 'Notifications', icon: treeIcon('info') },
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
    bordered: { control: 'boolean' },
    searchable: { control: 'boolean' },
    filter: { control: 'text' },
    toolbar: {
      description: 'Configures the optional toolbar rendered above the tree.',
      table: {
        type: {
          detail: `
            Interface: IContentTreeToolbar
            Properties:
            - expandCollapse (boolean, optional): Show the expand-all / collapse-all toggle button
            - delete (boolean, optional): Show the delete button (enabled only when nodes are checked in multi-select)
          `,
        },
      },
    },
    'allow-drag-drop': { control: 'boolean' },
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
      syncExpandedNodeIds(treeEl, expandedNodeIds);
    };

    const handleSelect = withStoryAction(
      'nodeSelect',
      (e: CustomEvent<{ id: string }>) => {
        selectedNodeId = e.detail.id;
        sync();
      }
    );

    const handleExpandChange = withStoryAction(
      'nodeExpandChange',
      (e: CustomEvent<{ id: string; expanded: boolean }>) => {
        const { id, expanded } = e.detail;
        expandedNodeIds = expanded
          ? [...expandedNodeIds, id]
          : expandedNodeIds.filter((x) => x !== id);
        sync();
      }
    );

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

/** Persists Build Tree story data across Storybook control updates (re-renders). */
const buildTreeStoryState = {
  nodes: [] as ITreeNode[],
  selectedNodeId: undefined as string | undefined,
  expandedNodeIds: [] as string[],
  editingNodeId: undefined as string | undefined,
  freshIds: new Set<string>(),
  idCounter: 0,
};

export const BuildTree: Story = {
  args: {
    searchable: true,
    toolbar: { expandCollapse: true },
  },
  parameters: {
    docs: {
      source: {
        code: contentTreeBuildSourceCode,
      },
    },
  },
  render: (args) => {
    let treeEl: ContentTreeElement | undefined;
    let shellEl: HTMLElement | undefined;
    let emptyPanelEl: HTMLElement | undefined;
    const state = buildTreeStoryState;
    const makeId = () => `new-${Date.now()}-${state.idCounter++}`;

    const sync = () => {
      const isEmpty = state.nodes.length === 0;
      shellEl?.classList.toggle('is-empty', isEmpty);
      if (emptyPanelEl) emptyPanelEl.hidden = !isEmpty;
      if (!treeEl) return;
      treeEl.nodes = state.nodes;
      treeEl.selectedNodeId = state.selectedNodeId;
      syncExpandedNodeIds(treeEl, state.expandedNodeIds);
      treeEl.editingNodeId = state.editingNodeId;
      applyControlArgs(treeEl, args);
    };

    const startEditing = (id: string, fresh: boolean) => {
      state.editingNodeId = id;
      if (fresh) state.freshIds.add(id);
      sync();
    };

    const createFirstNode = () => {
      const newId = makeId();
      state.nodes = [
        {
          id: newId,
          label: '',
          icon: treeIcon('folder_closed'),
        },
      ];
      state.selectedNodeId = newId;
      startEditing(newId, true);
    };

    const handleSelect = withStoryAction(
      'nodeSelect',
      (e: CustomEvent<{ id: string }>) => {
        state.selectedNodeId = e.detail.id;
        sync();
      }
    );

    const handleExpandChange = withStoryAction(
      'nodeExpandChange',
      (e: CustomEvent<{ id: string; expanded: boolean }>) => {
        const { id, expanded } = e.detail;
        state.expandedNodeIds = expanded
          ? [...new Set([...state.expandedNodeIds, id])]
          : state.expandedNodeIds.filter((x) => x !== id);
        sync();
      }
    );

    const handleExpandAll = withStoryAction(
      'expandAllChange',
      (e: CustomEvent<{ expanded: boolean }>) => {
        state.expandedNodeIds = e.detail.expanded
          ? getExpandableNodeIds(state.nodes)
          : [];
        sync();
      }
    );

    const handleEdit = withStoryAction(
      'nodeEdit',
      (e: CustomEvent<{ id: string }>) => {
        startEditing(e.detail.id, false);
      }
    );

    const handleDuplicate = withStoryAction(
      'nodeDuplicate',
      (e: CustomEvent<{ id: string }>) => {
        const result = duplicateNode(state.nodes, e.detail.id, makeId);
        state.nodes = result.nodes;
        if (result.newId) startEditing(result.newId, false);
        else sync();
      }
    );

    const handleAdd = withStoryAction(
      'nodeAdd',
      (
        e: CustomEvent<{
          referenceId: string;
          position: 'above' | 'below' | 'child';
        }>
      ) => {
        const { referenceId, position } = e.detail;
        const newId = makeId();
        const newNode: ITreeNode = { id: newId, label: '' };

        if (position === 'child') {
          state.nodes = addNode(state.nodes, newNode, {
            parentId: referenceId,
          });
          if (!state.expandedNodeIds.includes(referenceId)) {
            state.expandedNodeIds = [...state.expandedNodeIds, referenceId];
          }
        } else {
          const loc = getNodeLocation(state.nodes, referenceId);
          const index = (loc?.index ?? 0) + (position === 'below' ? 1 : 0);
          state.nodes = addNode(state.nodes, newNode, {
            parentId: loc?.parentId,
            index,
          });
        }
        startEditing(newId, true);
      }
    );

    const handleDelete = withStoryAction(
      'nodeDelete',
      (e: CustomEvent<{ id: string }>) => {
        state.nodes = deleteNode(state.nodes, e.detail.id);
        state.freshIds.delete(e.detail.id);
        if (!findNode(state.nodes, state.selectedNodeId ?? '')) {
          state.selectedNodeId = state.nodes[0]?.id;
        }
        sync();
      }
    );

    const handleRename = withStoryAction(
      'nodeRename',
      (e: CustomEvent<{ id: string; label: string }>) => {
        const { id, label } = e.detail;
        state.nodes = updateNode(state.nodes, id, {
          label: label || 'Untitled',
        });
        state.freshIds.delete(id);
        state.editingNodeId = undefined;
        sync();
      }
    );

    const handleEditCancel = withStoryAction(
      'nodeEditCancel',
      (e: CustomEvent<{ id: string }>) => {
        const { id } = e.detail;
        if (state.freshIds.has(id)) state.nodes = deleteNode(state.nodes, id);
        state.freshIds.delete(id);
        state.editingNodeId = undefined;
        if (!findNode(state.nodes, state.selectedNodeId ?? '')) {
          state.selectedNodeId = state.nodes[0]?.id;
        }
        sync();
      }
    );

    const handleVisibilityChange = withStoryAction(
      'nodeVisibilityChange',
      (e: CustomEvent<{ id: string; disabled: boolean }>) => {
        const { id, disabled } = e.detail;
        state.nodes = setNodeDisabled(state.nodes, id, disabled);
        sync();
      }
    );

    // prettier-ignore
    return html`
    <style>
      .modus-wc-content-tree-empty-story {
        background-color: var(--modus-wc-color-base-page);
        display: flex;
        flex-direction: column;
        min-height: 24rem;
        width: 18rem;
      }

      .modus-wc-content-tree-empty-story.is-empty modus-wc-content-tree > modus-wc-tree-menu {
        display: none;
      }

      .modus-wc-content-tree-empty-story.is-empty modus-wc-content-tree {
        flex: 0 0 auto;
      }

      .modus-wc-content-tree-empty-story.is-empty .modus-wc-content-tree-empty-story-panel {
        align-items: center;
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        gap: var(--modus-wc-spacing-md);
        justify-content: center;
        padding: var(--modus-wc-spacing-lg);
      }

      .modus-wc-content-tree-empty-story:not(.is-empty) .modus-wc-content-tree-empty-story-panel {
        display: none;
      }

      .modus-wc-content-tree-empty-story-icon {
        color: var(--modus-wc-color-base-content-low-contrast);
        font-size: 4rem;
        line-height: 1;
        opacity: 0.6;
      }

      .modus-wc-content-tree-empty-story-title {
        color: var(--modus-wc-color-base-content-low-contrast);
        margin: 0;
        text-align: center;
      }
    </style>
    <div
      class="modus-wc-content-tree-empty-story is-empty"
      ${ref((el) => {
        shellEl = (el as HTMLElement | undefined) ?? undefined;
        sync();
      })}
    >
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
        @expandAllChange=${handleExpandAll}
        @nodeEdit=${handleEdit}
        @nodeDuplicate=${handleDuplicate}
        @nodeAdd=${handleAdd}
        @nodeDelete=${handleDelete}
        @nodeRename=${handleRename}
        @nodeEditCancel=${handleEditCancel}
        @nodeVisibilityChange=${handleVisibilityChange}
      ></modus-wc-content-tree>
      <div
        class="modus-wc-content-tree-empty-story-panel"
        ${ref((el) => {
          emptyPanelEl = (el as HTMLElement | undefined) ?? undefined;
          sync();
        })}
      >
        <modus-wc-icon
          custom-class="modus-wc-content-tree-empty-story-icon"
          decorative
          name="box_select"
          size="lg"
        ></modus-wc-icon>
        <modus-wc-typography
          custom-class="modus-wc-content-tree-empty-story-title"
          hierarchy="p"
          label="Empty content tree"
          size="lg"
        ></modus-wc-typography>
        <modus-wc-button
          color="primary"
          size="sm"
          variant="filled"
          @buttonClick=${createFirstNode}
        >
          <modus-wc-icon decorative name="add" size="xs"></modus-wc-icon>
          Create node
        </modus-wc-button>
      </div>
    </div>`;
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
      syncExpandedNodeIds(treeEl, expandedNodeIds);
      treeEl.checkedNodeIds = [...checkedNodeIds];
    };

    const handleSelect = withStoryAction(
      'nodeSelect',
      (e: CustomEvent<{ id: string }>) => {
        selectedNodeId = e.detail.id;
        sync();
      }
    );

    const handleExpandChange = withStoryAction(
      'nodeExpandChange',
      (e: CustomEvent<{ id: string; expanded: boolean }>) => {
        const { id, expanded } = e.detail;
        expandedNodeIds = expanded
          ? [...expandedNodeIds, id]
          : expandedNodeIds.filter((x) => x !== id);
        sync();
      }
    );

    const handleCheckChange = withStoryAction(
      'nodeCheckChange',
      (e: CustomEvent<{ id: string; checked: boolean }>) => {
        const { id, checked } = e.detail;
        checkedNodeIds = setNodeChecked(
          sampleNodes,
          checkedNodeIds,
          id,
          checked
        );
        sync();
      }
    );

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

export const Toolbar: Story = {
  args: {
    'selection-mode': 'multiple',
    searchable: true,
    toolbar: { expandCollapse: true, delete: true },
  },
  parameters: {
    docs: {
      source: {
        code: contentTreeToolbarSourceCode,
      },
    },
  },
  render: (args) => {
    let treeEl: ContentTreeElement | undefined;
    // A private copy so bulk deletes never mutate the shared sampleNodes.
    let nodes: ITreeNode[] = structuredClone(sampleNodes);
    let selectedNodeId = '1-1';
    let expandedNodeIds: string[] = ['1', '1-2'];
    let checkedNodeIds: string[] = ['1-2-1'];

    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = nodes;
      treeEl.selectedNodeId = selectedNodeId;
      syncExpandedNodeIds(treeEl, expandedNodeIds);
      treeEl.checkedNodeIds = [...checkedNodeIds];
      applyControlArgs(treeEl, args);
    };

    const handleSelect = withStoryAction(
      'nodeSelect',
      (e: CustomEvent<{ id: string }>) => {
        selectedNodeId = e.detail.id;
        sync();
      }
    );

    const handleExpandChange = withStoryAction(
      'nodeExpandChange',
      (e: CustomEvent<{ id: string; expanded: boolean }>) => {
        const { id, expanded } = e.detail;
        expandedNodeIds = expanded
          ? [...new Set([...expandedNodeIds, id])]
          : expandedNodeIds.filter((x) => x !== id);
        sync();
      }
    );

    const handleCheckChange = withStoryAction(
      'nodeCheckChange',
      (e: CustomEvent<{ id: string; checked: boolean }>) => {
        const { id, checked } = e.detail;
        checkedNodeIds = setNodeChecked(nodes, checkedNodeIds, id, checked);
        sync();
      }
    );

    // Expand-all / collapse-all: set every expandable id, or clear to collapse.
    const handleExpandAll = withStoryAction(
      'expandAllChange',
      (e: CustomEvent<{ expanded: boolean }>) => {
        expandedNodeIds = e.detail.expanded ? getExpandableNodeIds(nodes) : [];
        sync();
      }
    );

    // Bulk delete: remove the checked branches, then drop any now-missing ids
    // from the checked set so the selection stays consistent.
    const handleNodesDelete = withStoryAction(
      'nodesDelete',
      (e: CustomEvent<{ ids: string[] }>) => {
        nodes = deleteNodes(nodes, e.detail.ids);
        checkedNodeIds = checkedNodeIds.filter((id) => !!findNode(nodes, id));
        sync();
      }
    );

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
      @expandAllChange=${handleExpandAll}
      @nodesDelete=${handleNodesDelete}
    ></modus-wc-content-tree>`;
  },
};

export const SearchFilter: Story = {
  args: {
    searchable: true,
    toolbar: { expandCollapse: true },
  },
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

    // Search is handled by the component itself (`searchable`); the app only
    // owns node/selection/expansion state. The toolbar's expand/collapse toggle
    // renders on its own row below the search box.
    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = sampleNodes;
      treeEl.selectedNodeId = selectedNodeId;
      syncExpandedNodeIds(treeEl, expandedNodeIds);
      applyControlArgs(treeEl, args);
    };

    const handleSelect = withStoryAction(
      'nodeSelect',
      (e: CustomEvent<{ id: string }>) => {
        selectedNodeId = e.detail.id;
        sync();
      }
    );

    const handleExpandChange = withStoryAction(
      'nodeExpandChange',
      (e: CustomEvent<{ id: string; expanded: boolean }>) => {
        const { id, expanded } = e.detail;
        expandedNodeIds = expanded
          ? [...new Set([...expandedNodeIds, id])]
          : expandedNodeIds.filter((x) => x !== id);
        sync();
      }
    );

    // The toolbar's single expand/collapse-all toggle emits `expandAllChange`;
    // the app applies it to its own expansion state.
    const handleExpandAll = withStoryAction(
      'expandAllChange',
      (e: CustomEvent<{ expanded: boolean }>) => {
        expandedNodeIds = e.detail.expanded
          ? getExpandableNodeIds(sampleNodes)
          : [];
        sync();
      }
    );

    // prettier-ignore
    return html`
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
      @expandAllChange=${handleExpandAll}
    ></modus-wc-content-tree>`;
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
      syncExpandedNodeIds(treeEl, expandedNodeIds);
      treeEl.editingNodeId = editingNodeId;
    };

    const startEditing = (id: string, fresh: boolean) => {
      editingNodeId = id;
      if (fresh) freshIds.add(id);
      sync();
    };

    const handleSelect = withStoryAction(
      'nodeSelect',
      (e: CustomEvent<{ id: string }>) => {
        selectedNodeId = e.detail.id;
        sync();
      }
    );

    const handleExpandChange = withStoryAction(
      'nodeExpandChange',
      (e: CustomEvent<{ id: string; expanded: boolean }>) => {
        const { id, expanded } = e.detail;
        expandedNodeIds = expanded
          ? [...expandedNodeIds, id]
          : expandedNodeIds.filter((x) => x !== id);
        sync();
      }
    );

    const handleEdit = withStoryAction(
      'nodeEdit',
      (e: CustomEvent<{ id: string }>) => {
        startEditing(e.detail.id, false);
      }
    );

    const handleDuplicate = withStoryAction(
      'nodeDuplicate',
      (e: CustomEvent<{ id: string }>) => {
        const result = duplicateNode(nodes, e.detail.id, makeId);
        nodes = result.nodes;
        if (result.newId) startEditing(result.newId, false);
        else sync();
      }
    );

    const handleAdd = withStoryAction(
      'nodeAdd',
      (
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
      }
    );

    const handleDelete = withStoryAction(
      'nodeDelete',
      (e: CustomEvent<{ id: string }>) => {
        nodes = deleteNode(nodes, e.detail.id);
        freshIds.delete(e.detail.id);
        sync();
      }
    );

    const handleRename = withStoryAction(
      'nodeRename',
      (e: CustomEvent<{ id: string; label: string }>) => {
        const { id, label } = e.detail;
        nodes = updateNode(nodes, id, { label: label || 'Untitled' });
        freshIds.delete(id);
        editingNodeId = undefined;
        sync();
      }
    );

    const handleEditCancel = withStoryAction(
      'nodeEditCancel',
      (e: CustomEvent<{ id: string }>) => {
        const { id } = e.detail;
        // Discard a freshly added node that was never named.
        if (freshIds.has(id)) nodes = deleteNode(nodes, id);
        freshIds.delete(id);
        editingNodeId = undefined;
        sync();
      }
    );

    // The eye toggle flips the node's OWN lock state; a locked parent disables
    // its subtree via the component's effective-disabled inheritance, while each
    // node keeps its own state (so unlocking a parent restores the children).
    const handleVisibilityChange = withStoryAction(
      'nodeVisibilityChange',
      (e: CustomEvent<{ id: string; disabled: boolean }>) => {
        const { id, disabled } = e.detail;
        nodes = setNodeDisabled(nodes, id, disabled);
        sync();
      }
    );

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
      @nodeVisibilityChange=${handleVisibilityChange}
    ></modus-wc-content-tree>`;
  },
};

export const DragAndDrop: Story = {
  args: {
    'allow-drag-drop': true,
  },
  parameters: {
    docs: {
      source: {
        code: contentTreeDragAndDropSourceCode,
      },
    },
  },
  render: (args) => {
    let treeEl: ContentTreeElement | undefined;
    // A private copy so the shared sampleNodes stays untouched across stories.
    let nodes: ITreeNode[] = structuredClone(sampleNodes);
    let selectedNodeId = '1-1';
    let expandedNodeIds: string[] = ['1', '1-2'];

    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = nodes;
      treeEl.selectedNodeId = selectedNodeId;
      syncExpandedNodeIds(treeEl, expandedNodeIds);
      applyControlArgs(treeEl, args);
    };

    const handleSelect = withStoryAction(
      'nodeSelect',
      (e: CustomEvent<{ id: string }>) => {
        selectedNodeId = e.detail.id;
        sync();
      }
    );

    const handleExpandChange = withStoryAction(
      'nodeExpandChange',
      (e: CustomEvent<{ id: string; expanded: boolean }>) => {
        const { id, expanded } = e.detail;
        expandedNodeIds = expanded
          ? [...new Set([...expandedNodeIds, id])]
          : expandedNodeIds.filter((x) => x !== id);
        sync();
      }
    );

    // Apply the move to the app-owned data, then keep a reparented target open
    // so the moved node is visible inside it.
    const handleMove = withStoryAction(
      'nodeMove',
      (
        e: CustomEvent<{
          id: string;
          targetId: string;
          position: 'before' | 'after' | 'inside';
        }>
      ) => {
        const { id, targetId, position } = e.detail;
        nodes = moveNodeRelative(nodes, id, targetId, position);
        if (position === 'inside' && !expandedNodeIds.includes(targetId)) {
          expandedNodeIds = [...expandedNodeIds, targetId];
        }
        sync();
      }
    );

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
      @nodeMove=${handleMove}
    ></modus-wc-content-tree>`;
  },
};

/** Persists Lazy Loading story data across Storybook control updates (re-renders). */
const lazyLoadingStoryNodes = (): ITreeNode[] => [
  {
    id: 'documents',
    label: 'Documents',
    icon: treeIcon('folder_closed'),
    hasChildren: true,
  },
  {
    id: 'media',
    label: 'Media',
    icon: treeIcon('folder_closed'),
    hasChildren: true,
  },
  {
    id: 'empty',
    label: 'Empty Folder',
    icon: treeIcon('folder_closed'),
    hasChildren: true,
  },
  { id: 'readme', label: 'Read Me', icon: treeIcon('info') },
];

const lazyLoadingStoryState = {
  nodes: lazyLoadingStoryNodes(),
  selectedNodeId: 'readme',
  expandedNodeIds: [] as string[],
  pendingLoadIds: new Set<string>(),
};

const lazyLoadChildren = (id: string): ITreeNode[] =>
  id === 'empty'
    ? []
    : [
        { id: `${id}-1`, label: 'First item', icon: treeIcon('info') },
        {
          id: `${id}-2`,
          label: 'Subfolder',
          icon: treeIcon('folder_closed'),
          hasChildren: true,
        },
        { id: `${id}-3`, label: 'Last item', icon: treeIcon('info') },
      ];

export const LazyLoading: Story = {
  parameters: {
    docs: {
      source: {
        code: contentTreeLazyLoadingSourceCode,
      },
    },
  },
  render: (args) => {
    let treeEl: ContentTreeElement | undefined;
    const state = lazyLoadingStoryState;

    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = state.nodes;
      treeEl.selectedNodeId = state.selectedNodeId;
      syncExpandedNodeIds(treeEl, state.expandedNodeIds);
    };

    const handleSelect = withStoryAction(
      'nodeSelect',
      (e: CustomEvent<{ id: string }>) => {
        state.selectedNodeId = e.detail.id;
        sync();
      }
    );

    const handleExpandChange = withStoryAction(
      'nodeExpandChange',
      (e: CustomEvent<{ id: string; expanded: boolean }>) => {
        const { id, expanded } = e.detail;
        state.expandedNodeIds = expanded
          ? [...new Set([...state.expandedNodeIds, id])]
          : state.expandedNodeIds.filter((x) => x !== id);
        sync();
      }
    );

    // Fetch children on first expand, with a deliberate delay so the spinner is
    // visible. Assigning `children` (even `[]`) ends the loading state.
    const handleLoadChildren = withStoryAction(
      'nodeLoadChildren',
      (e: CustomEvent<{ id: string }>) => {
        const { id } = e.detail;
        if (state.pendingLoadIds.has(id)) return;
        state.pendingLoadIds.add(id);
        window.setTimeout(() => {
          state.nodes = updateNode(state.nodes, id, {
            children: lazyLoadChildren(id),
          });
          state.pendingLoadIds.delete(id);
          sync();
        }, 1200);
      }
    );

    // prettier-ignore
    return html`
    <modus-wc-content-tree
      ${ref((el) => {
        if (!el) {
          treeEl = undefined;
          return;
        }
        const next = el as ContentTreeElement;
        if (treeEl !== next) {
          treeEl = next;
          sync();
        }
      })}
      aria-label="Content tree"
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      selection-mode=${ifDefined(args['selection-mode'])}
      size=${ifDefined(args.size)}
      @nodeSelect=${handleSelect}
      @nodeExpandChange=${handleExpandChange}
      @nodeLoadChildren=${handleLoadChildren}
    ></modus-wc-content-tree>`;
  },
};
