# modus-wc-button-group



<!-- Auto Generated Below -->


## Overview

A customizable button group component used to group related buttons together with built-in selection management.

The component supports single select, multiple select, or no selection modes and automatically handles
button styling, spacing, and accessibility features.

## Properties

| Property        | Attribute        | Description                                           | Type                                                                           | Default        |
| --------------- | ---------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------ | -------------- |
| `color`         | `color`          | The color of buttons in the group                     | `"danger" \| "primary" \| "secondary" \| "tertiary" \| "warning" \| undefined` | `'primary'`    |
| `customClass`   | `custom-class`   | Custom CSS class to apply to the button group element | `string \| undefined`                                                          | `''`           |
| `disabled`      | `disabled`       | Whether the button group is disabled                  | `boolean \| undefined`                                                         | `false`        |
| `orientation`   | `orientation`    | The orientation of the button group                   | `"horizontal" \| "vertical" \| undefined`                                      | `'horizontal'` |
| `selectionMode` | `selection-mode` | The selection behavior mode                           | `"multiple" \| "none" \| "single" \| undefined`                                | `'single'`     |
| `size`          | `size`           | The size of buttons in the group                      | `"lg" \| "md" \| "sm" \| undefined`                                            | `'md'`         |
| `spaced`        | `spaced`         | Whether buttons should be spaced apart                | `boolean \| undefined`                                                         | `false`        |
| `variant`       | `variant`        | The variant of buttons in the group                   | `"borderless" \| "outlined" \| undefined`                                      | `'outlined'`   |


## Events

| Event                        | Description                          | Type                                                               |
| ---------------------------- | ------------------------------------ | ------------------------------------------------------------------ |
| `buttonGroupSelectionChange` | Event emitted when selection changes | `CustomEvent<{ value: string \| string[]; source: HTMLElement; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
