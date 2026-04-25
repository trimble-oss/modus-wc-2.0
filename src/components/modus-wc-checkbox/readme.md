# modus-wc-checkbox



<!-- Auto Generated Below -->


## Overview

A customizable checkbox component

## Properties

| Property        | Attribute         | Description                                                                     | Type                                | Default     |
| --------------- | ----------------- | ------------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `customClass`   | `custom-class`    | Custom CSS class to apply to the inner div.                                     | `string \| undefined`               | `''`        |
| `disabled`      | `disabled`        | The disabled state of the checkbox.                                             | `boolean \| undefined`              | `false`     |
| `indeterminate` | `indeterminate`   | The indeterminate state of the checkbox.                                        | `boolean`                           | `false`     |
| `inputId`       | `input-id`        | The ID of the input element.                                                    | `string \| undefined`               | `undefined` |
| `inputTabIndex` | `input-tab-index` | The tabindex of the input.                                                      | `number \| undefined`               | `undefined` |
| `label`         | `label`           | The text to display within the label.                                           | `string \| undefined`               | `undefined` |
| `name`          | `name`            | Name of the form control. Submitted with the form as part of a name/value pair. | `string \| undefined`               | `''`        |
| `required`      | `required`        | A value is required for the form to be submittable.                             | `boolean \| undefined`              | `false`     |
| `size`          | `size`            | The size of the input.                                                          | `"lg" \| "md" \| "sm" \| undefined` | `'md'`      |
| `value`         | `value`           | The value of the checkbox.                                                      | `boolean`                           | `false`     |


## Events

| Event         | Description                           | Type                      |
| ------------- | ------------------------------------- | ------------------------- |
| `inputBlur`   | Emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Emitted when the input value changes. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


## Dependencies

### Used by

 - [modus-wc-menu-item](../modus-wc-menu-item)
 - [modus-wc-table](../modus-wc-table)
 - [modus-wc-tree-item](../modus-wc-content-tree/modus-wc-tree-item)

### Depends on

- [modus-wc-input-label](../modus-wc-input-label)

### Graph
```mermaid
graph TD;
  modus-wc-checkbox --> modus-wc-input-label
  modus-wc-menu-item --> modus-wc-checkbox
  modus-wc-table --> modus-wc-checkbox
  modus-wc-tree-item --> modus-wc-checkbox
  style modus-wc-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
