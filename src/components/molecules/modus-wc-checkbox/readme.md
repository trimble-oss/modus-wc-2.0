# modus-wc-checkbox



<!-- Auto Generated Below -->


## Overview

A customizable checkbox component.

Adheres to WCAG 2.2 standards.

## Properties

| Property        | Attribute         | Description                                                                     | Type                                          | Default     |
| --------------- | ----------------- | ------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `customClass`   | `custom-class`    | Custom CSS class to apply to the inner div.                                     | `string \| undefined`                         | `''`        |
| `disabled`      | `disabled`        | The disabled state of the checkbox.                                             | `boolean \| undefined`                        | `false`     |
| `indeterminate` | `indeterminate`   | The indeterminate state of the checkbox.                                        | `boolean`                                     | `false`     |
| `inputDir`      | `input-dir`       | Specifies the text direction of the input content.                              | `"" \| "auto" \| "ltr" \| "rtl" \| undefined` | `undefined` |
| `inputId`       | `input-id`        | The ID of the input element.                                                    | `string \| undefined`                         | `undefined` |
| `inputTabIndex` | `input-tab-index` | The tabindex of the input.                                                      | `number \| undefined`                         | `undefined` |
| `label`         | `label`           | The text to display within the label.                                           | `string \| undefined`                         | `undefined` |
| `name`          | `name`            | Name of the form control. Submitted with the form as part of a name/value pair. | `string \| undefined`                         | `''`        |
| `required`      | `required`        | A value is required for the form to be submittable.                             | `boolean \| undefined`                        | `false`     |
| `size`          | `size`            | The size of the input.                                                          | `"lg" \| "md" \| "sm" \| "xs" \| undefined`   | `'md'`      |
| `value`         | `value`           | The value of the checkbox.                                                      | `boolean`                                     | `false`     |


## Events

| Event         | Description                           | Type                      |
| ------------- | ------------------------------------- | ------------------------- |
| `inputBlur`   | Emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Emitted when the input value changes. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


## Dependencies

### Depends on

- [modus-wc-input-label](../../atoms/modus-wc-input-label)

### Graph
```mermaid
graph TD;
  modus-wc-checkbox --> modus-wc-input-label
  style modus-wc-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
