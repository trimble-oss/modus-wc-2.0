# modus-wc-tree-actions



<!-- Auto Generated Below -->


## Overview

ModusWcTreeActions is a component that renders action buttons for tree items in the Modus content tree.
It supports displaying a primary action and grouping additional actions in a dropdown menu if there are more than two actions.

## Properties

| Property  | Attribute | Description                               | Type                              | Default     |
| --------- | --------- | ----------------------------------------- | --------------------------------- | ----------- |
| `actions` | `actions` | List of actions to display                | `ITreeItemActions[] \| undefined` | `undefined` |
| `size`    | `size`    | The size of the action buttons and icons. | `"lg" \| "md" \| "sm" \| "xs"`    | `'xs'`      |


## Events

| Event             | Description                             | Type                                                     |
| ----------------- | --------------------------------------- | -------------------------------------------------------- |
| `dropdownOpened`  | Event emitted when a dropdown is opened                                                                                                                                                                                                                                                                                                                                                                   | `CustomEvent<HTMLElement>`                                                                      |
| `treeActionClick` | Event emitted when an action is clicked. Includes the clicked action's `actionId` and `actionName`, along with the owning tree item's `itemId` (its `value`) and its `parentItemId` (the `value` of the closest ancestor `modus-wc-tree-item`, or `null` if the item is at the tree root). The IDs let consumers locate the target item without traversing the DOM themselves.                            | `CustomEvent<{ actionId: string; actionName: string; itemId: string \| null; parentItemId: string \| null; }>` |


## Dependencies

### Used by

 - [modus-wc-tree-item](../modus-wc-tree-item)

### Depends on

- [modus-wc-button](../../modus-wc-button)
- [modus-wc-icon](../../modus-wc-icon)

### Graph
```mermaid
graph TD;
  modus-wc-tree-actions --> modus-wc-button
  modus-wc-tree-actions --> modus-wc-icon
  modus-wc-tree-item --> modus-wc-tree-actions
  style modus-wc-tree-actions fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
