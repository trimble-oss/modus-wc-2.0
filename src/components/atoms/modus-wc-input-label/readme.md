# modus-wc-input-label



<!-- Auto Generated Below -->


## Overview

A customizable input label component.

The component supports a `<slot>` for injecting additional custom content inside the label, such as icons or formatted text.

Adheres to WCAG 2.2 standards.

## Properties

| Property      | Attribute      | Description                                                                  | Type                                          | Default     |
| ------------- | -------------- | ---------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `customClass` | `custom-class` | Additional classes for custom styling.                                       | `string \| undefined`                         | `''`        |
| `forId`       | `for-id`       | The `for` attribute of the label, matching the `id` of the associated input. | `string \| undefined`                         | `undefined` |
| `labelDir`    | `label-dir`    | Specifies the text direction of the label content.                           | `"" \| "auto" \| "ltr" \| "rtl" \| undefined` | `undefined` |
| `labelText`   | `label-text`   | The text to display within the label.                                        | `string \| undefined`                         | `undefined` |
| `required`    | `required`     | Whether the label indicates a required field.                                | `boolean \| undefined`                        | `false`     |
| `size`        | `size`         | The size of the label.                                                       | `"lg" \| "md" \| "sm" \| undefined`           | `'md'`      |


## Dependencies

### Used by

 - [modus-wc-autocomplete](../../molecules/modus-wc-autocomplete)
 - [modus-wc-checkbox](../../molecules/modus-wc-checkbox)
 - [modus-wc-date](../../molecules/modus-wc-date)
 - [modus-wc-number-input](../../molecules/modus-wc-number-input)
 - [modus-wc-radio](../../molecules/modus-wc-radio)
 - [modus-wc-select](../../molecules/modus-wc-select)
 - [modus-wc-slider](../../molecules/modus-wc-slider)
 - [modus-wc-text-input](../../molecules/modus-wc-text-input)
 - [modus-wc-textarea](../../molecules/modus-wc-textarea)

### Graph
```mermaid
graph TD;
  modus-wc-autocomplete --> modus-wc-input-label
  modus-wc-checkbox --> modus-wc-input-label
  modus-wc-date --> modus-wc-input-label
  modus-wc-number-input --> modus-wc-input-label
  modus-wc-radio --> modus-wc-input-label
  modus-wc-select --> modus-wc-input-label
  modus-wc-slider --> modus-wc-input-label
  modus-wc-text-input --> modus-wc-input-label
  modus-wc-textarea --> modus-wc-input-label
  style modus-wc-input-label fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
