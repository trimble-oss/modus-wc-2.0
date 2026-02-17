# modus-wc-tree-actions



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                               | Type                                  | Default     |
| --------- | --------- | ----------------------------------------- | ------------------------------------- | ----------- |
| `actions` | `actions` | List of actions to display                | `ModusTreeItemActions[] \| undefined` | `undefined` |
| `size`    | `size`    | The size of the action buttons and icons. | `"md" \| "sm" \| "xs"`                | `'xs'`      |


## Events

| Event             | Description                             | Type                                                     |
| ----------------- | --------------------------------------- | -------------------------------------------------------- |
| `dropdownOpened`  | Event emitted when a dropdown is opened | `CustomEvent<HTMLElement>`                               |
| `treeActionClick` | Event emitted when an action is clicked | `CustomEvent<{ actionId: string; actionName: string; }>` |


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
