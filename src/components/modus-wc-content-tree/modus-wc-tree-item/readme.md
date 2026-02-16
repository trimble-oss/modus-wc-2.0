# modus-wc-content-tree-item



<!-- Auto Generated Below -->


## Overview

A tree item component that represents a single node in a hierarchical tree structure.

## Properties

| Property             | Attribute      | Description                                                                                                         | Type                   | Default     |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| `checkbox`           | `checkbox`     | If true, renders a checkbox at the start of the tree item.                                                          | `boolean \| undefined` | `false`     |
| `customClass`        | `custom-class` | Custom CSS class to apply to the li element.                                                                        | `string \| undefined`  | `''`        |
| `disabled`           | `disabled`     | The disabled state of the tree item.                                                                                | `boolean \| undefined` | `undefined` |
| `dragHandle`         | `drag-handle`  | If true, renders a drag handle icon at the start of the tree item.                                                  | `boolean \| undefined` | `false`     |
| `hasSubtree`         | `has-subtree`  | Whether this tree item has a collapsible subtree. When true, the item will show a caret and handle toggle behavior. | `boolean \| undefined` | `undefined` |
| `label` _(required)_ | `label`        | The text label displayed for the tree item.                                                                         | `string`               | `undefined` |
| `selected`           | `selected`     | The selected state of the tree item.                                                                                | `boolean \| undefined` | `undefined` |
| `value`              | `value`        | The unique identifying value of the tree item.                                                                      | `string`               | `''`        |


## Events

| Event        | Description                                 | Type                              |
| ------------ | ------------------------------------------- | --------------------------------- |
| `itemSelect` | Event emitted when a tree item is selected. | `CustomEvent<{ value: string; }>` |


## Dependencies

### Depends on

- [modus-wc-icon](../../modus-wc-icon)
- [modus-wc-checkbox](../../modus-wc-checkbox)

### Graph
```mermaid
graph TD;
  modus-wc-tree-item --> modus-wc-icon
  modus-wc-tree-item --> modus-wc-checkbox
  modus-wc-checkbox --> modus-wc-input-label
  style modus-wc-tree-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
