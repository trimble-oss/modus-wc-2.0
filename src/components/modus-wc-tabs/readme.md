# modus-wc-avatar



<!-- Auto Generated Below -->


## Overview

A customizable tabs component used to create groups of tabs.

Adheres to WCAG 2.2 standards.

## Properties

| Property         | Attribute          | Description                                 | Type                                                       | Default      |
| ---------------- | ------------------ | ------------------------------------------- | ---------------------------------------------------------- | ------------ |
| `activeTabIndex` | `active-tab-index` | The current active tab                      | `number`                                                   | `0`          |
| `customClass`    | `custom-class`     | Custom CSS class to apply to the inner div. | `string \| undefined`                                      | `''`         |
| `size`           | `size`             | The size of the tabs.                       | `"lg" \| "md" \| "sm" \| undefined`                        | `'md'`       |
| `tabStyle`       | `tab-style`        | Additional styling for the tabs.            | `"bordered" \| "boxed" \| "lifted" \| "none" \| undefined` | `'bordered'` |
| `tabs`           | --                 | The tabs to display.                        | `ITab[]`                                                   | `[]`         |


## Events

| Event       | Description                                                        | Type                                                    |
| ----------- | ------------------------------------------------------------------ | ------------------------------------------------------- |
| `tabChange` | When a tab is switched to, this event outputs the relevant indices | `CustomEvent<{ previousTab: number; newTab: number; }>` |


## Dependencies

### Depends on

- [modus-wc-icon](../modus-wc-icon)

### Graph
```mermaid
graph TD;
  modus-wc-tabs --> modus-wc-icon
  style modus-wc-tabs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
