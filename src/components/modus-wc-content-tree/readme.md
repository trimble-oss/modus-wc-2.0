# modus-wc-content-tree



<!-- Auto Generated Below -->


## Overview

A customizable content tree component used to display hierarchical data in a tree structure.
Uses menu items to create the tree structure with support for expanding/collapsing nodes and selection.

## Properties

| Property            | Attribute            | Description                                                                | Type                   | Default       |
| ------------------- | -------------------- | -------------------------------------------------------------------------- | ---------------------- | ------------- |
| `customClass`       | `custom-class`       | Custom CSS class to apply to the component.                                | `string \| undefined`  | `''`          |
| `searchPlaceholder` | `search-placeholder` | Placeholder text for the search input.                                     | `string \| undefined`  | `'Search...'` |
| `showActions`       | `show-actions`       | Whether to show the action bar with add, delete, and collapse all buttons. | `boolean \| undefined` | `false`       |
| `showSearch`        | `show-search`        | Whether to show the search input.                                          | `boolean \| undefined` | `false`       |


## Dependencies

### Depends on

- [modus-wc-text-input](../modus-wc-text-input)
- [modus-wc-button](../modus-wc-button)
- [modus-wc-icon](../modus-wc-icon)

### Graph
```mermaid
graph TD;
  modus-wc-content-tree --> modus-wc-text-input
  modus-wc-content-tree --> modus-wc-button
  modus-wc-content-tree --> modus-wc-icon
  modus-wc-text-input --> modus-wc-input-label
  modus-wc-text-input --> modus-wc-input-feedback
  modus-wc-input-feedback --> modus-wc-icon
  style modus-wc-content-tree fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
