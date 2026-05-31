# modus-wc-tree-view



<!-- Auto Generated Below -->


## Overview

A customizable tree view component used to display a list of li elements vertically or horizontally.

The component supports a `<slot>` for injecting custom li elements inside the ul element.

## Properties

| Property        | Attribute        | Description                                            | Type                                      | Default      |
| --------------- | ---------------- | ------------------------------------------------------ | ----------------------------------------- | ------------ |
| `bordered`      | `bordered`       | Indicates that the tree view should have a border.     | `boolean \| undefined`                    | `undefined`  |
| `customClass`   | `custom-class`   | Custom CSS class to apply to the ul element.           | `string \| undefined`                     | `''`         |
| `isSubMenu`     | `is-sub-menu`    | Indicates that this tree view is a submenu (dropdown). | `boolean \| undefined`                    | `undefined`  |
| `orientation`   | `orientation`    | The orientation of the tree view.                      | `"horizontal" \| "vertical" \| undefined` | `'vertical'` |
| `selectionMode` | `selection-mode` | The selection mode of the tree view.                   | `"multiple" \| "single" \| undefined`     | `'single'`   |
| `size`          | `size`           | The size of the tree view.                             | `"lg" \| "md" \| "sm" \| undefined`       | `'md'`       |


## Events

| Event                 | Description                                                                                                                    | Type                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| `menuFocusout`        | Event emitted when the tree view loses focus.                                                                                  | `CustomEvent<FocusEvent>`                        |
| `menuSelectionChange` | Event emitted when the selection changes in multiple selection mode. Emits the array of currently selected tree item elements. | `CustomEvent<{ selectedItems: HTMLElement[]; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
