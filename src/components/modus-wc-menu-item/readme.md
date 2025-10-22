# modus-wc-menu-item



<!-- Auto Generated Below -->


## Overview

A customizable menu item component used to display the item portion of a menu

## Properties

| Property          | Attribute          | Description                                                   | Type                                                            | Default     |
| ----------------- | ------------------ | ------------------------------------------------------------- | --------------------------------------------------------------- | ----------- |
| `bordered`        | `bordered`         |                                                               | `boolean \| undefined`                                          | `undefined` |
| `checkbox`        | `checkbox`         | If true, renders a checkbox at the start of the menu item.    | `boolean \| undefined`                                          | `undefined` |
| `customClass`     | `custom-class`     | Custom CSS class to apply to the li element.                  | `string \| undefined`                                           | `''`        |
| `disabled`        | `disabled`         | The disabled state of the menu item.                          | `boolean \| undefined`                                          | `undefined` |
| `focused`         | `focused`          | The focused state of the menu item.                           | `boolean \| undefined`                                          | `undefined` |
| `label`           | `label`            | The text rendered in the menu item.                           | `string`                                                        | `''`        |
| `selected`        | `selected`         | The selected state of the menu item.                          | `boolean \| undefined`                                          | `undefined` |
| `size`            | `size`             | The size of the menu item.                                    | `"lg" \| "md" \| "sm" \| undefined`                             | `'md'`      |
| `startIcon`       | `start-icon`       | The modus icon name to render on the start of the menu item.  | `string \| undefined`                                           | `undefined` |
| `subLabel`        | `sub-label`        | The text rendered beneath the label.                          | `string \| undefined`                                           | `undefined` |
| `tooltipContent`  | `tooltip-content`  | The tooltip text to display when hovering over the menu item. | `string \| undefined`                                           | `undefined` |
| `tooltipPosition` | `tooltip-position` | The position of the tooltip relative to the menu item.        | `"auto" \| "bottom" \| "left" \| "right" \| "top" \| undefined` | `'auto'`    |
| `value`           | `value`            | The unique identifying value of the menu item.                | `string`                                                        | `''`        |


## Events

| Event        | Description                                 | Type                              |
| ------------ | ------------------------------------------- | --------------------------------- |
| `itemSelect` | Event emitted when a menu item is selected. | `CustomEvent<{ value: string; }>` |


## Dependencies

### Used by

 - [modus-wc-autocomplete](../modus-wc-autocomplete)
 - [modus-wc-navbar](../modus-wc-navbar)

### Depends on

- [modus-wc-checkbox](../modus-wc-checkbox)
- [modus-wc-tooltip](../modus-wc-tooltip)
- [modus-wc-icon](../modus-wc-icon)

### Graph
```mermaid
graph TD;
  modus-wc-menu-item --> modus-wc-checkbox
  modus-wc-menu-item --> modus-wc-tooltip
  modus-wc-menu-item --> modus-wc-icon
  modus-wc-checkbox --> modus-wc-input-label
  modus-wc-autocomplete --> modus-wc-menu-item
  modus-wc-navbar --> modus-wc-menu-item
  style modus-wc-menu-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
