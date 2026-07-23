/**
 * TreeStateManager — a set of pure, immutable helpers for working with
 * `ITreeNode[]` data outside of the `modus-wc-content-tree` component.
 *
 * The content tree is stateless/controlled: the consuming application owns the
 * data (the single source of truth). These utilities never mutate the input.
 * Helpers that transform the tree return updated copies so the application stays
 * in full control of when (and whether) the UI updates after intercepting,
 * validating, or cancelling an action.
 */
import { ITreeNode } from '../types';

/** Options describing where a node should be inserted. */
export interface IAddNodeOptions {
  /** The id of the parent to insert under. When omitted, the node is added at the root. */
  parentId?: string;
  /** The index to insert at within the target level. When omitted, the node is appended. */
  index?: number;
}

/** Find a node anywhere in the tree by its id. Returns `undefined` when not found. */
export const findNode = (
  nodes: ITreeNode[],
  id: string
): ITreeNode | undefined => {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children?.length) {
      const found = findNode(node.children, id);
      if (found) return found;
    }
  }
  return undefined;
};

/** Insert `newNode` into the tree, returning a new tree. */
export const addNode = (
  nodes: ITreeNode[],
  newNode: ITreeNode,
  options: IAddNodeOptions = {}
): ITreeNode[] => {
  const { parentId, index } = options;

  if (!parentId) {
    const next = [...nodes];
    next.splice(index ?? next.length, 0, newNode);
    return next;
  }

  return nodes.map((node) => {
    if (node.id === parentId) {
      const children = node.children ? [...node.children] : [];
      children.splice(index ?? children.length, 0, newNode);
      return { ...node, children };
    }
    if (node.children?.length) {
      const nextChildren = addNode(node.children, newNode, options);
      if (nextChildren === node.children) return node;
      return { ...node, children: nextChildren };
    }
    return node;
  });
};

/** Apply `changes` to the node with the given id, returning a new tree. */
export const updateNode = (
  nodes: ITreeNode[],
  id: string,
  changes: Partial<Omit<ITreeNode, 'id'>>
): ITreeNode[] => {
  let changed = false;
  const next = nodes.map((node) => {
    if (node.id === id) {
      changed = true;
      return { ...node, ...changes };
    }
    if (node.children?.length) {
      const nextChildren = updateNode(node.children, id, changes);
      if (nextChildren === node.children) return node;
      changed = true;
      return { ...node, children: nextChildren };
    }
    return node;
  });
  return changed ? next : nodes;
};

/** Remove the node with the given id (and its descendants), returning a new tree. */
export const deleteNode = (nodes: ITreeNode[], id: string): ITreeNode[] =>
  nodes
    .filter((node) => node.id !== id)
    .map((node) => {
      if (!node.children?.length) return node;
      const nextChildren = deleteNode(node.children, id);
      if (nextChildren === node.children) return node;
      return { ...node, children: nextChildren };
    });

/**
 * Remove every node in `ids` (and their descendants), returning a new tree. Safe
 * for ids that overlap (e.g. a parent and one of its children): once an ancestor
 * is removed, deleting a descendant id is simply a no-op. Use this to apply the
 * content tree's `nodesDelete` event.
 */
export const deleteNodes = (nodes: ITreeNode[], ids: string[]): ITreeNode[] =>
  ids.reduce((acc, id) => deleteNode(acc, id), nodes);

/** Move an existing node to a new parent and/or index, returning a new tree. */
export const moveNode = (
  nodes: ITreeNode[],
  id: string,
  target: IAddNodeOptions = {}
): ITreeNode[] => {
  const node = findNode(nodes, id);
  if (!node) return nodes;

  const without = deleteNode(nodes, id);
  return addNode(without, node, target);
};

/** Locate a node's parent id (undefined at the root) and its index among its siblings. */
export const getNodeLocation = (
  nodes: ITreeNode[],
  id: string,
  parentId?: string
): { parentId?: string; index: number } | undefined => {
  const index = nodes.findIndex((n) => n.id === id);
  if (index !== -1) return { parentId, index };

  for (const node of nodes) {
    if (node.children?.length) {
      const found = getNodeLocation(node.children, id, node.id);
      if (found) return found;
    }
  }
  return undefined;
};

/** Where a dragged node is dropped relative to a target node. */
export type TreeDropPosition = 'before' | 'after' | 'inside';

/**
 * Whether `nodeId` is `ancestorId` itself or lives anywhere in its subtree. Use
 * this to reject a drag-and-drop move that would drop a node into its own
 * descendants (which would orphan the branch).
 */
export const isDescendant = (
  nodes: ITreeNode[],
  ancestorId: string,
  nodeId: string
): boolean => {
  if (ancestorId === nodeId) return true;
  const ancestor = findNode(nodes, ancestorId);
  if (!ancestor?.children?.length) return false;
  return !!findNode(ancestor.children, nodeId);
};

/**
 * Resolve a relative drag-and-drop drop into an immutable move, returning a new
 * tree. `before`/`after` place the node among the target's siblings; `inside`
 * nests it as the target's first child. Invalid moves (dropping onto itself, a
 * missing node/target, or into its own subtree) return the input unchanged, so
 * the consuming application can pass the result straight back to `nodes`.
 */
export const moveNodeRelative = (
  nodes: ITreeNode[],
  id: string,
  targetId: string,
  position: TreeDropPosition
): ITreeNode[] => {
  if (id === targetId) return nodes;
  const node = findNode(nodes, id);
  if (!node || !findNode(nodes, targetId)) return nodes;
  if (isDescendant(nodes, id, targetId)) return nodes;

  if (position === 'inside') {
    return moveNode(nodes, id, { parentId: targetId, index: 0 });
  }

  // Remove first, then locate the target in the pruned tree so the insertion
  // index accounts for the removal shift when both share a parent.
  const without = deleteNode(nodes, id);
  const location = getNodeLocation(without, targetId);
  if (!location) return nodes;

  const index = location.index + (position === 'after' ? 1 : 0);
  return addNode(without, node, { parentId: location.parentId, index });
};

/** Deep-clone a node and its subtree, assigning a fresh id to every node via `makeId`. */
const cloneSubtree = (node: ITreeNode, makeId: () => string): ITreeNode => ({
  ...node,
  id: makeId(),
  children: node.children?.map((child) => cloneSubtree(child, makeId)),
});

/**
 * Duplicate a node (and its subtree) directly below the original, returning the
 * new tree along with the id assigned to the top-level clone (so the app can put
 * it straight into edit mode). `makeId` supplies unique ids for the clones.
 */
export const duplicateNode = (
  nodes: ITreeNode[],
  id: string,
  makeId: () => string
): { nodes: ITreeNode[]; newId?: string } => {
  const original = findNode(nodes, id);
  const location = getNodeLocation(nodes, id);
  if (!original || !location) return { nodes };

  const clone = cloneSubtree(original, makeId);
  return {
    nodes: addNode(nodes, clone, {
      parentId: location.parentId,
      index: location.index + 1,
    }),
    newId: clone.id,
  };
};

/** Whether a lazy node is expandable but its `children` have not been loaded yet. */
export const isLazyUnloaded = (node: ITreeNode): boolean =>
  !!node.hasChildren && node.children === undefined;

/** Collect the ids of every leaf under `node` (or the node itself when it is a leaf). */
export const collectLeafIds = (node: ITreeNode): string[] => {
  if (isLazyUnloaded(node)) return [];
  return node.children?.length
    ? node.children.flatMap(collectLeafIds)
    : [node.id];
};

/**
 * Collect the ids of every expandable node (any node that has children) across
 * the whole tree. Use this to drive "expand all" by setting `expandedNodeIds` to
 * the result, and "collapse all" by setting it to an empty array.
 */
export const getExpandableNodeIds = (nodes: ITreeNode[]): string[] =>
  nodes.reduce<string[]>((acc, node) => {
    const isLazyExpandable = !!node.hasChildren && node.children === undefined;
    const hasLoadedChildren = !!node.children?.length;

    if (hasLoadedChildren || isLazyExpandable) {
      acc.push(node.id);
      if (hasLoadedChildren) {
        acc.push(...getExpandableNodeIds(node.children!));
      }
    }

    return acc;
  }, []);

/**
 * Prune the tree to branches relevant to `query` (case-insensitive label match).
 * A node is kept when it matches (its full subtree is revealed so the contents of
 * a matching parent stay visible) or when one of its descendants matches (only the
 * matching branch is kept), preserving the navigation path to every match. Returns
 * a new tree; never mutates the input.
 */
export const filterTree = (nodes: ITreeNode[], query: string): ITreeNode[] => {
  const q = query.trim().toLowerCase();
  if (!q) return nodes;

  const matches = (node: ITreeNode): boolean =>
    node.label.toLowerCase().includes(q);

  const prune = (list: ITreeNode[]): ITreeNode[] =>
    list.reduce<ITreeNode[]>((acc, node) => {
      if (matches(node)) {
        // Reveal the matching node's full subtree: copy the node but keep its
        // original `children` untouched (no pruning).
        acc.push({ ...node });
      } else {
        const children = node.children?.length ? prune(node.children) : [];
        if (children.length) acc.push({ ...node, children });
      }
      return acc;
    }, []);

  return prune(nodes);
};

/**
 * Check or uncheck a node and cascade to all of its descendant leaves, returning
 * the new set of checked leaf ids. Parent checked/indeterminate state is derived
 * from these leaf ids by the component, so only leaves are ever stored.
 */
export const setNodeChecked = (
  nodes: ITreeNode[],
  checkedIds: string[],
  id: string,
  checked: boolean
): string[] => {
  const node = findNode(nodes, id);
  if (!node) return checkedIds;

  const next = new Set(checkedIds);
  collectLeafIds(node).forEach((leafId) =>
    checked ? next.add(leafId) : next.delete(leafId)
  );
  return [...next];
};

/**
 * Set a single node's own `disabled` (lock) state, returning a new tree. The
 * change is intentionally NOT cascaded into descendants' data: a locked ancestor
 * already disables its whole subtree via the component's effective-disabled
 * computation, while each node keeps its own lock state. This way, unlocking a
 * parent restores its children to whatever lock state they had before.
 */
export const setNodeDisabled = (
  nodes: ITreeNode[],
  id: string,
  disabled: boolean
): ITreeNode[] =>
  nodes.map((node) => {
    if (node.id === id) return { ...node, disabled };
    if (node.children?.length) {
      const nextChildren = setNodeDisabled(node.children, id, disabled);
      if (nextChildren === node.children) return node;
      return { ...node, children: nextChildren };
    }
    return node;
  });

/**
 * Whether any ANCESTOR of `id` is disabled (locked). The node itself is not
 * considered. Used to prevent unlocking a child while a parent is locked.
 * Returns `false` when the node is not found or has no locked ancestor.
 */
export const hasDisabledAncestor = (
  nodes: ITreeNode[],
  id: string
): boolean => {
  const walk = (
    list: ITreeNode[],
    ancestorDisabled: boolean
  ): boolean | null => {
    for (const node of list) {
      if (node.id === id) return ancestorDisabled;
      if (node.children?.length) {
        const result = walk(node.children, ancestorDisabled || !!node.disabled);
        if (result !== null) return result;
      }
    }
    return null;
  };

  return walk(nodes, false) ?? false;
};
