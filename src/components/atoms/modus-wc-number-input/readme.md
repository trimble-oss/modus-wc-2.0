# modus-wc-text-input



<!-- Auto Generated Below -->


## Overview

A customizable input component used to create number inputs with types.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute            | Description                                                                                                                                                              | Type                                          | Default     |
| ------------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- | ----------- |
| `ariaDescribedby`        | `aria-describedby`   | The ID of the element that describes the input.                                                                                                                          | `string \| undefined`                         | `undefined` |
| `ariaLabel` _(required)_ | `aria-label`         | The aria-label attribute for accessibility.                                                                                                                              | `string`                                      | `undefined` |
| `autoComplete`           | `auto-complete`      | Hint for form autofill feature.                                                                                                                                          | `"off" \| "on" \| undefined`                  | `undefined` |
| `autoFocus`              | `auto-focus`         | Indicates that an element should be focused on page load.                                                                                                                | `boolean \| undefined`                        | `undefined` |
| `bordered`               | `bordered`           | Indicates that the input should have a border.                                                                                                                           | `boolean \| undefined`                        | `true`      |
| `customClass`            | `custom-class`       | Custom CSS class to apply to the input.                                                                                                                                  | `string \| undefined`                         | `''`        |
| `disabled`               | `disabled`           | Whether the form control is disabled.                                                                                                                                    | `boolean \| undefined`                        | `false`     |
| `inputAriaInvalid`       | `input-aria-invalid` | Indicates whether the input has an invalid input.                                                                                                                        | `"false" \| "true" \| undefined`              | `undefined` |
| `inputDir`               | `input-dir`          | Specifies the text direction of the input content.                                                                                                                       | `"" \| "auto" \| "ltr" \| "rtl" \| undefined` | `undefined` |
| `inputId`                | `input-id`           | The ID of the input element.                                                                                                                                             | `string \| undefined`                         | `undefined` |
| `inputMode`              | `input-mode`         | Hints at the type of data that might be entered by the user while editing the element or its contents. This allows a browser to display an appropriate virtual keyboard. | `"decimal" \| "none" \| "numeric"`            | `'numeric'` |
| `inputTabIndex`          | `input-tab-index`    | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).                                                                  | `number \| undefined`                         | `undefined` |
| `max`                    | `max`                | The input's maximum value.                                                                                                                                               | `number \| undefined`                         | `undefined` |
| `min`                    | `min`                | The input's minimum value.                                                                                                                                               | `number \| undefined`                         | `undefined` |
| `name`                   | `name`               | Name of the form control. Submitted with the form as part of a name/value pair.                                                                                          | `string \| undefined`                         | `undefined` |
| `placeholder`            | `placeholder`        | Text that appears in the form control when it has no value set.                                                                                                          | `string \| undefined`                         | `''`        |
| `readOnly`               | `read-only`          | Whether the value is editable.                                                                                                                                           | `boolean \| undefined`                        | `false`     |
| `required`               | `required`           | A value is required for the form to be submittable.                                                                                                                      | `boolean \| undefined`                        | `false`     |
| `size`                   | `size`               | The size of the input.                                                                                                                                                   | `"lg" \| "md" \| "sm" \| undefined`           | `'md'`      |
| `type`                   | `type`               | Type of form control.                                                                                                                                                    | `"number" \| "range" \| undefined`            | `'number'`  |
| `value`                  | `value`              | The value of the control.                                                                                                                                                | `string`                                      | `''`        |


## Events

| Event         | Description                                 | Type                      |
| ------------- | ------------------------------------------- | ------------------------- |
| `inputBlur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Event emitted when the input value changes. | `CustomEvent<Event>`      |
| `inputFocus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
