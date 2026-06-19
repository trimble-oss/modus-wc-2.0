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
      return { ...node, children: addNode(node.children, newNode, options) };
    }
    return node;
  });
};

/** Apply `changes` to the node with the given id, returning a new tree. */
export const updateNode = (
  nodes: ITreeNode[],
  id: string,
  changes: Partial<Omit<ITreeNode, 'id'>>
): ITreeNode[] =>
  nodes.map((node) => {
    if (node.id === id) {
      return { ...node, ...changes };
    }
    if (node.children?.length) {
      return { ...node, children: updateNode(node.children, id, changes) };
    }
    return node;
  });

/** Remove the node with the given id (and its descendants), returning a new tree. */
export const deleteNode = (nodes: ITreeNode[], id: string): ITreeNode[] =>
  nodes
    .filter((node) => node.id !== id)
    .map((node) =>
      node.children?.length
        ? { ...node, children: deleteNode(node.children, id) }
        : node
    );

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

/** Collect the ids of every leaf under `node` (or the node itself when it is a leaf). */
export const collectLeafIds = (node: ITreeNode): string[] =>
  node.children?.length ? node.children.flatMap(collectLeafIds) : [node.id];

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
        acc.push(node);
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
