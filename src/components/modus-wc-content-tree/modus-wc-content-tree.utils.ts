import {
  ITreeItemData,
  ITreeItemReorderParameters,
} from './modus-wc-tree-item/modus-wc-tree-item';

const getTreeItemIdentity = (item: ITreeItemData): string =>
  item.clientId ?? item.id;

export const getReorderSignature = (
  parameters: ITreeItemReorderParameters
): string => JSON.stringify(parameters);

export interface ITreeItemAddParameters {
  parentId: string | null;
  item: ITreeItemData;
  index?: number;
}

export interface ITreeItemDeleteParameters {
  itemId: string;
}

export interface ITreeItemDuplicateParameters {
  itemId: string;
  parentId?: string | null;
  index?: number;
}

export interface ITreeItemAddAdjacentParameters {
  referenceItemId: string;
  item: ITreeItemData;
  placement: 'above' | 'below';
}

export interface ITreeItemUpdateParameters {
  itemId: string;
  patch: Partial<ITreeItemData>;
}

interface ITreeItemRemovalResult {
  list: ITreeItemData[];
  removedItem: ITreeItemData;
  parentId: string | null;
  index: number;
}

interface ITreeItemLocationResult {
  item: ITreeItemData;
  parentId: string | null;
  index: number;
}

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

  if (getTreeItemIdentity(list[oldIndex]) !== itemId) {
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
    const oldIndex = list.findIndex(
      (item) => getTreeItemIdentity(item) === itemId
    );
    if (oldIndex === -1) {
      return null;
    }

    const updated = [...list];
    const [removedItem] = updated.splice(oldIndex, 1);
    return { list: updated, removedItem, oldIndex };
  }

  for (let i = 0; i < list.length; i++) {
    const current = list[i];

    if (getTreeItemIdentity(current) === parentId) {
      const children = current.children ?? [];
      const oldIndex = children.findIndex(
        (child) => getTreeItemIdentity(child) === itemId
      );
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

    if (getTreeItemIdentity(current) === parentId) {
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

const removeByIdentity = (
  list: ITreeItemData[],
  itemId: string,
  parentId: string | null = null
): ITreeItemRemovalResult | null => {
  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    if (getTreeItemIdentity(current) === itemId) {
      const updated = [...list];
      const [removedItem] = updated.splice(i, 1);
      return { list: updated, removedItem, parentId, index: i };
    }

    if (!current.children?.length) {
      continue;
    }

    const nested = removeByIdentity(
      current.children,
      itemId,
      getTreeItemIdentity(current)
    );
    if (!nested) {
      continue;
    }

    const updated = [...list];
    updated[i] = { ...current, children: nested.list };
    return {
      ...nested,
      list: updated,
    };
  }

  return null;
};

const findByIdentity = (
  list: ITreeItemData[],
  itemId: string,
  parentId: string | null = null
): ITreeItemLocationResult | null => {
  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    if (getTreeItemIdentity(current) === itemId) {
      return { item: current, parentId, index: i };
    }

    if (!current.children?.length) {
      continue;
    }

    const nested = findByIdentity(
      current.children,
      itemId,
      getTreeItemIdentity(current)
    );
    if (nested) {
      return nested;
    }
  }

  return null;
};

const cloneTreeItemForDuplicate = (
  item: ITreeItemData,
  sequence: { current: number }
): ITreeItemData => {
  const nextSequence = sequence.current;
  sequence.current += 1;
  const nextId = `${item.id}-copy-${nextSequence}`;
  const nextClientId = item.clientId
    ? `${item.clientId}-copy-${nextSequence}`
    : undefined;

  return {
    ...item,
    id: nextId,
    clientId: nextClientId,
    children: item.children?.map((child) =>
      cloneTreeItemForDuplicate(child, sequence)
    ),
  };
};

const updateByIdentity = (
  list: ITreeItemData[],
  itemId: string,
  patch: Partial<ITreeItemData>
): { list: ITreeItemData[]; updated: boolean } => {
  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    if (getTreeItemIdentity(current) === itemId) {
      const updatedList = [...list];
      updatedList[i] = { ...current, ...patch };
      return { list: updatedList, updated: true };
    }

    if (!current.children?.length) {
      continue;
    }

    const nested = updateByIdentity(current.children, itemId, patch);
    if (!nested.updated) {
      continue;
    }

    const updatedList = [...list];
    updatedList[i] = { ...current, children: nested.list };
    return { list: updatedList, updated: true };
  }

  return { list, updated: false };
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

export const addTreeItemData = (
  items: ITreeItemData[],
  parameters: ITreeItemAddParameters
): ITreeItemData[] | null => {
  const { parentId, item, index } = parameters;
  const targetIndex = index ?? Number.MAX_SAFE_INTEGER;

  return insertIntoParent(items, parentId, item, targetIndex);
};

export const deleteTreeItemData = (
  items: ITreeItemData[],
  parameters: ITreeItemDeleteParameters
): ITreeItemData[] | null => {
  const removal = removeByIdentity(items, parameters.itemId);
  if (!removal) {
    return null;
  }
  return removal.list;
};

export const duplicateTreeItemData = (
  items: ITreeItemData[],
  parameters: ITreeItemDuplicateParameters
): ITreeItemData[] | null => {
  const located = findByIdentity(items, parameters.itemId);
  if (!located) {
    return null;
  }

  const sequence = { current: 1 };
  const duplicatedItem = cloneTreeItemForDuplicate(located.item, sequence);
  const targetParentId =
    parameters.parentId === undefined ? located.parentId : parameters.parentId;
  const targetIndex =
    parameters.index === undefined ? located.index + 1 : parameters.index;

  return insertIntoParent(items, targetParentId, duplicatedItem, targetIndex);
};

export const addTreeItemAdjacentData = (
  items: ITreeItemData[],
  parameters: ITreeItemAddAdjacentParameters
): ITreeItemData[] | null => {
  const located = findByIdentity(items, parameters.referenceItemId);
  if (!located) {
    return null;
  }

  const indexOffset = parameters.placement === 'above' ? 0 : 1;
  const targetIndex = located.index + indexOffset;

  return insertIntoParent(
    items,
    located.parentId,
    parameters.item,
    targetIndex
  );
};

export const updateTreeItemData = (
  items: ITreeItemData[],
  parameters: ITreeItemUpdateParameters
): ITreeItemData[] | null => {
  const updated = updateByIdentity(items, parameters.itemId, parameters.patch);
  return updated.updated ? updated.list : null;
};
