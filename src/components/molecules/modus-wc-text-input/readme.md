# modus-wc-text-input



<!-- Auto Generated Below -->


## Overview

A customizable input component used to create text inputs with types.

Adheres to WCAG 2.2 standards.

## Properties

| Property         | Attribute         | Description                                                                                                                                                              | Type                                                                                                                                                  | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `autoCapitalize` | `auto-capitalize` | Controls automatic capitalization in inputted text.                                                                                                                      | `"characters" \| "none" \| "off" \| "on" \| "sentences" \| "words" \| undefined`                                                                      | `undefined` |
| `autoComplete`   | `auto-complete`   | Hint for form autofill feature.                                                                                                                                          | `AutocompleteTypes \| undefined`                                                                                                                      | `undefined` |
| `autocorrect`    | `autocorrect`     | Controls automatic correction in inputted text. Support by browser varies.                                                                                               | `"off" \| "on" \| undefined`                                                                                                                          | `undefined` |
| `bordered`       | `bordered`        | Indicates that the input should have a border.                                                                                                                           | `boolean \| undefined`                                                                                                                                | `true`      |
| `customClass`    | `custom-class`    | Custom CSS class to apply to the input.                                                                                                                                  | `string \| undefined`                                                                                                                                 | `''`        |
| `disabled`       | `disabled`        | Whether the form control is disabled.                                                                                                                                    | `boolean \| undefined`                                                                                                                                | `false`     |
| `enterkeyhint`   | `enterkeyhint`    | A hint to the browser for which enter key to display.                                                                                                                    | `"done" \| "enter" \| "go" \| "next" \| "previous" \| "search" \| "send" \| undefined`                                                                | `undefined` |
| `inputId`        | `input-id`        | The ID of the input element.                                                                                                                                             | `string \| undefined`                                                                                                                                 | `undefined` |
| `inputMode`      | `input-mode`      | Hints at the type of data that might be entered by the user while editing the element or its contents. This allows a browser to display an appropriate virtual keyboard. | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"`                                                                 | `'text'`    |
| `inputTabIndex`  | `input-tab-index` | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).                                                                  | `number \| undefined`                                                                                                                                 | `undefined` |
| `label`          | `label`           | The text to display within the label.                                                                                                                                    | `string \| undefined`                                                                                                                                 | `undefined` |
| `maxLength`      | `max-length`      | Maximum length (number of characters) of value.                                                                                                                          | `number \| undefined`                                                                                                                                 | `undefined` |
| `minLength`      | `min-length`      | Minimum length (number of characters) of value.                                                                                                                          | `number \| undefined`                                                                                                                                 | `undefined` |
| `name`           | `name`            | Name of the form control. Submitted with the form as part of a name/value pair.                                                                                          | `string \| undefined`                                                                                                                                 | `undefined` |
| `pattern`        | `pattern`         | Pattern the value must match to be valid                                                                                                                                 | `string \| undefined`                                                                                                                                 | `undefined` |
| `placeholder`    | `placeholder`     | Text that appears in the form control when it has no value set.                                                                                                          | `string \| undefined`                                                                                                                                 | `''`        |
| `readOnly`       | `read-only`       | Whether the value is editable.                                                                                                                                           | `boolean \| undefined`                                                                                                                                | `false`     |
| `required`       | `required`        | A value is required for the form to be submittable.                                                                                                                      | `boolean \| undefined`                                                                                                                                | `false`     |
| `size`           | `size`            | The size of the input.                                                                                                                                                   | `"lg" \| "md" \| "sm" \| undefined`                                                                                                                   | `'md'`      |
| `spellcheck`     | `spellcheck`      | Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.                                                                         | `boolean \| undefined`                                                                                                                                | `false`     |
| `type`           | `type`            | Type of form control.                                                                                                                                                    | `"date" \| "datetime-local" \| "email" \| "month" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "time" \| "url" \| "week" \| undefined` | `'text'`    |
| `value`          | `value`           | The value of the control.                                                                                                                                                | `string`                                                                                                                                              | `''`        |


## Events

| Event         | Description                                 | Type                      |
| ------------- | ------------------------------------------- | ------------------------- |
| `inputBlur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Event emitted when the input value changes. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


## Dependencies

### Used by

 - [modus-wc-autocomplete](../modus-wc-autocomplete)

### Depends on

- [modus-wc-input-label](../../atoms/modus-wc-input-label)

### Graph
```mermaid
graph TD;
  modus-wc-text-input --> modus-wc-input-label
  modus-wc-autocomplete --> modus-wc-text-input
  style modus-wc-text-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
