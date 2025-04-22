# modus-wc-input-label



<!-- Auto Generated Below -->


## Overview

A customizable input label component.

The component supports a `<slot>` for injecting additional custom content inside the label, such as icons or formatted text.

Adheres to WCAG 2.2 standards.

## Properties

| Property       | Attribute        | Description                                                                  | Type                                | Default     |
| -------------- | ---------------- | ---------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `customClass`  | `custom-class`   | Additional classes for custom styling.                                       | `string \| undefined`               | `''`        |
| `forId`        | `for-id`         | The `for` attribute of the label, matching the `id` of the associated input. | `string \| undefined`               | `undefined` |
| `labelText`    | `label-text`     | The text to display within the label.                                        | `string \| undefined`               | `undefined` |
| `required`     | `required`       | Whether the label indicates a required field.                                | `boolean \| undefined`              | `false`     |
| `size`         | `size`           | The size of the label.                                                       | `"lg" \| "md" \| "sm" \| undefined` | `'md'`      |
| `subLabelText` | `sub-label-text` | The text rendered beneath the label.                                         | `string \| undefined`               | `undefined` |


## Dependencies

### Used by

 - [modus-wc-autocomplete](../modus-wc-autocomplete)
 - [modus-wc-checkbox](../modus-wc-checkbox)
 - [modus-wc-date](../modus-wc-date)
 - [modus-wc-number-input](../modus-wc-number-input)
 - [modus-wc-radio](../modus-wc-radio)
 - [modus-wc-select](../modus-wc-select)
 - [modus-wc-slider](../modus-wc-slider)
 - [modus-wc-text-input](../modus-wc-text-input)
 - [modus-wc-textarea](../modus-wc-textarea)
 - [modus-wc-time-input](../modus-wc-time-input)
 - [modus-wc-toggle](../modus-wc-toggle)

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
  modus-wc-time-input --> modus-wc-input-label
  modus-wc-toggle --> modus-wc-input-label
  style modus-wc-input-label fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
