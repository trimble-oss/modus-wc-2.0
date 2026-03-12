import {
  ITreeItemData,
  ITreeItemReorderParameters,
} from './modus-wc-tree-item/modus-wc-tree-item';

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
