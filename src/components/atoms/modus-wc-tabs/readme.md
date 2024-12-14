# modus-wc-avatar



<!-- Auto Generated Below -->


## Overview

A customizable tabs component used to create groups of tabs.

Adheres to WCAG 2.2 standards.

## Properties

| Property      | Attribute      | Description                                 | Type                                             | Default     |
| ------------- | -------------- | ------------------------------------------- | ------------------------------------------------ | ----------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div. | `string`                                         | `''`        |
| `selected`    | `selected`     | Default tab selected by index.              | `number`                                         | `0`         |
| `size`        | `size`         | The size of the tabs.                       | `"lg" \| "md" \| "sm" \| "xs" \| undefined`      | `'md'`      |
| `tabStyle`    | `tab-style`    | Additional styling for the tabs.            | `"bordered" \| "boxed" \| "lifted" \| undefined` | `undefined` |


## Events

| Event       | Description                                         | Type                  |
| ----------- | --------------------------------------------------- | --------------------- |
| `tabChange` | Event emitted when the `selected` property changes. | `CustomEvent<number>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
