# modus-wc-menu



<!-- Auto Generated Below -->


## Overview

A customizable menu component used to display a list of links vertically or horizontally.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute           | Description                                                                                                                                                                           | Type                                      | Default      |
| ------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------ |
| `a11yLabel` _(required)_ | `a-1-1y-label`      | The aria-label attribute used to define a string that labels the current element (accessibility). This property name is reserved by HTMLElement and omitted in the React integration. | `string`                                  | `undefined`  |
| `activeItemValue`        | `active-item-value` | The active menu item value, used to show an item as selected.                                                                                                                         | `string \| undefined`                     | `undefined`  |
| `bordered`               | `bordered`          | Indicates that the menu should have a border.                                                                                                                                         | `boolean \| undefined`                    | `true`       |
| `customClass`            | `custom-class`      | Custom CSS class to apply to the ul element.                                                                                                                                          | `string \| undefined`                     | `''`         |
| `items`                  | --                  | The items to display in the menu.                                                                                                                                                     | `IMenuItem[]`                             | `[]`         |
| `menuTitle`              | `menu-title`        | The menu title, rendered as the first item (disabled).                                                                                                                                | `string \| undefined`                     | `undefined`  |
| `orientation`            | `orientation`       | The orientation of the menu.                                                                                                                                                          | `"horizontal" \| "vertical" \| undefined` | `'vertical'` |
| `size`                   | `size`              | The size of the menu.                                                                                                                                                                 | `"lg" \| "md" \| "sm" \| undefined`       | `'md'`       |


## Events

| Event        | Description                                 | Type                     |
| ------------ | ------------------------------------------- | ------------------------ |
| `itemSelect` | Event emitted when a menu item is selected. | `CustomEvent<IMenuItem>` |


## Dependencies

### Used by

 - [modus-wc-autocomplete](../../molecules/modus-wc-autocomplete)

### Graph
```mermaid
graph TD;
  modus-wc-autocomplete --> modus-wc-menu
  style modus-wc-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
