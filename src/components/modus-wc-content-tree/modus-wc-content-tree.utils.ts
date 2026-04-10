import {
  ITreeItemData,
  ITreeItemReorderParameters,
} from './modus-wc-tree-item/modus-wc-tree-item';

/** Returns the parent ID of the item with the given ID, or null if it is a root item. Returns undefined if not found. */
export const findItemParentId = (
  items: ITreeItemData[],
  itemId: string,
  parentId: string | null = null
): string | null | undefined => {
  for (const item of items) {
    if (item.id === itemId) return parentId;
    if (item.children?.length) {
      const found = findItemParentId(item.children, itemId, item.id);
      if (found !== undefined) return found;
    }
  }
  return undefined;
};

/** Adds a new child node to the item with the given parentId. */
export const addChildToTree = (
  items: ITreeItemData[],
  parentId: string,
  newItem: ITreeItemData
): ITreeItemData[] => {
  return items.map((item) => {
    if (item.id === parentId) {
      return { ...item, children: [...(item.children ?? []), newItem] };
    }
    if (item.children?.length) {
      return {
        ...item,
        children: addChildToTree(item.children, parentId, newItem),
      };
    }
    return item;
  });
};

/** Inserts a new item immediately above the item with the given siblingId. */
export const addAboveInTree = (
  items: ITreeItemData[],
  siblingId: string,
  newItem: ITreeItemData
): ITreeItemData[] => {
  const idx = items.findIndex((i) => i.id === siblingId);
  if (idx !== -1) {
    const updated = [...items];
    updated.splice(idx, 0, newItem);
    return updated;
  }
  return items.map((item) => {
    if (item.children?.length) {
      return {
        ...item,
        children: addAboveInTree(item.children, siblingId, newItem),
      };
    }
    return item;
  });
};

/** Inserts a new item immediately below the item with the given siblingId. */
export const addBelowInTree = (
  items: ITreeItemData[],
  siblingId: string,
  newItem: ITreeItemData
): ITreeItemData[] => {
  const idx = items.findIndex((i) => i.id === siblingId);
  if (idx !== -1) {
    const updated = [...items];
    updated.splice(idx + 1, 0, newItem);
    return updated;
  }
  return items.map((item) => {
    if (item.children?.length) {
      return {
        ...item,
        children: addBelowInTree(item.children, siblingId, newItem),
      };
    }
    return item;
  });
};

/** Removes the item with the given ID from the tree. */
export const deleteFromTree = (
  items: ITreeItemData[],
  itemId: string
): ITreeItemData[] => {
  return items
    .filter((item) => item.id !== itemId)
    .map((item) => {
      if (item.children?.length) {
        return { ...item, children: deleteFromTree(item.children, itemId) };
      }
      return item;
    });
};

/** Recursively assigns new unique IDs to a node and all its descendants. */
const assignNewIds = (item: ITreeItemData): ITreeItemData => {
  const updated: ITreeItemData = { ...item, id: crypto.randomUUID() };
  if (updated.children?.length) {
    updated.children = updated.children.map(assignNewIds);
  }
  return updated;
};

/** Deep-clones the item with the given ID, assigns new IDs to the clone and all its descendants, and inserts it below the original. */
export const duplicateInTree = (
  items: ITreeItemData[],
  itemId: string
): ITreeItemData[] => {
  const idx = items.findIndex((i) => i.id === itemId);
  if (idx !== -1) {
    const clone = assignNewIds(
      JSON.parse(JSON.stringify(items[idx])) as ITreeItemData
    );
    const updated = [...items];
    updated.splice(idx + 1, 0, clone);
    return updated;
  }
  return items.map((item) => {
    if (item.children?.length) {
      return {
        ...item,
        children: duplicateInTree(item.children, itemId),
      };
    }
    return item;
  });
};

export const getReorderSignature = (
  parameters: ITreeItemReorderParameters
): string => JSON.stringify(parameters);

const reorderListByIndex = (
  list: ITreeItemData[],
  oldIndex: number,
  newIndex: number,
  itemId: string
): ITreeItemData[] | null => {
  if (
    oldIndex < 0 ||
    newIndex < 0 ||
    oldIndex >= list.length ||
    newIndex >= list.length
  ) {
    return null;
  }

  if (oldIndex === newIndex) {
    return list;
  }

  if (list[oldIndex].id !== itemId) {
    return null;
  }

  const updated = [...list];
  const [moved] = updated.splice(oldIndex, 1);
  updated.splice(newIndex, 0, moved);
  return updated;
};

const removeFromParent = (
  list: ITreeItemData[],
  parentId: string | null,
  itemId: string
): {
  list: ITreeItemData[];
  removedItem: ITreeItemData;
  oldIndex: number;
} | null => {
  if (parentId === null) {
    const oldIndex = list.findIndex((item) => item.id === itemId);
    if (oldIndex === -1) {
      return null;
    }

    const updated = [...list];
    const [removedItem] = updated.splice(oldIndex, 1);
    return { list: updated, removedItem, oldIndex };
  }

  for (let i = 0; i < list.length; i++) {
    const current = list[i];

    if (current.id === parentId) {
      const children = current.children ?? [];
      const oldIndex = children.findIndex((child) => child.id === itemId);
      if (oldIndex === -1) {
        return null;
      }

      const updatedChildren = [...children];
      const [removedItem] = updatedChildren.splice(oldIndex, 1);
      const updated = [...list];
      updated[i] = { ...current, children: updatedChildren };
      return { list: updated, removedItem, oldIndex };
    }

    if (!current.children?.length) continue;

    const nested = removeFromParent(current.children, parentId, itemId);
    if (!nested) continue;

    const updated = [...list];
    updated[i] = { ...current, children: nested.list };
    return {
      list: updated,
      removedItem: nested.removedItem,
      oldIndex: nested.oldIndex,
    };
  }

  return null;
};

const insertIntoParent = (
  list: ITreeItemData[],
  parentId: string | null,
  item: ITreeItemData,
  index: number
): ITreeItemData[] | null => {
  if (parentId === null) {
    const safeIndex = Math.max(0, Math.min(index, list.length));
    const updated = [...list];
    updated.splice(safeIndex, 0, item);
    return updated;
  }

  for (let i = 0; i < list.length; i++) {
    const current = list[i];

    if (current.id === parentId) {
      const children = current.children ?? [];
      const safeIndex = Math.max(0, Math.min(index, children.length));
      const updatedChildren = [...children];
      updatedChildren.splice(safeIndex, 0, item);
      const updated = [...list];
      updated[i] = { ...current, children: updatedChildren };
      return updated;
    }

    if (!current.children?.length) continue;

    const nested = insertIntoParent(current.children, parentId, item, index);
    if (!nested) continue;

    const updated = [...list];
    updated[i] = { ...current, children: nested };
    return updated;
  }

  return null;
};

export const reorderTreeItemsData = (
  items: ITreeItemData[],
  parameters: ITreeItemReorderParameters
): ITreeItemData[] | null => {
  const { itemId, oldPosition, newPosition } = parameters;

  if (oldPosition.parentId === null) {
    if (newPosition.parentId === null) {
      return reorderListByIndex(
        items,
        oldPosition.index,
        newPosition.index,
        itemId
      );
    }

    const removed = removeFromParent(items, oldPosition.parentId, itemId);
    if (!removed || removed.oldIndex !== oldPosition.index) {
      return null;
    }

    return insertIntoParent(
      removed.list,
      newPosition.parentId,
      removed.removedItem,
      newPosition.index
    );
  }

  if (oldPosition.parentId === newPosition.parentId) {
    const removeResult = removeFromParent(items, oldPosition.parentId, itemId);
    if (!removeResult || removeResult.oldIndex !== oldPosition.index) {
      return null;
    }

    return insertIntoParent(
      removeResult.list,
      newPosition.parentId,
      removeResult.removedItem,
      newPosition.index
    );
  }

  const removed = removeFromParent(items, oldPosition.parentId, itemId);
  if (!removed || removed.oldIndex !== oldPosition.index) {
    return null;
  }

  return insertIntoParent(
    removed.list,
    newPosition.parentId,
    removed.removedItem,
    newPosition.index
  );
};
