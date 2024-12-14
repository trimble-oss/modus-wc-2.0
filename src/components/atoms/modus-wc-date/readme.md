# modus-wc-date



<!-- Auto Generated Below -->


## Overview

A customizable date picker component used to create date inputs.

Adheres to WCAG 2.2 standards.

## Properties

| Property          | Attribute          | Description                                                                                             | Type                                          | Default     |
| ----------------- | ------------------ | ------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `ariaDescribedby` | `aria-describedby` | The ID of the element that describes the input.                                                         | `string \| undefined`                         | `undefined` |
| `ariaLabelledby`  | `aria-labelledby`  | The aria-labelledby attribute for usage with a label.                                                   | `string \| undefined`                         | `undefined` |
| `bordered`        | `bordered`         | Indicates that the input should have a border.                                                          | `boolean \| undefined`                        | `true`      |
| `customClass`     | `custom-class`     | Custom CSS class to apply to the input.                                                                 | `string \| undefined`                         | `''`        |
| `disabled`        | `disabled`         | Whether the form control is disabled.                                                                   | `boolean \| undefined`                        | `false`     |
| `inputDir`        | `input-dir`        | Specifies the text direction of the input content.                                                      | `"" \| "auto" \| "ltr" \| "rtl" \| undefined` | `undefined` |
| `inputId`         | `input-id`         | The ID of the input element.                                                                            | `string \| undefined`                         | `undefined` |
| `inputTabIndex`   | `input-tab-index`  | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). | `number \| undefined`                         | `undefined` |
| `max`             | `max`              | Maximum date value.                                                                                     | `string \| undefined`                         | `undefined` |
| `min`             | `min`              | Minimum date value.                                                                                     | `string \| undefined`                         | `undefined` |
| `name`            | `name`             | Name of the form control. Submitted with the form as part of a name/value pair.                         | `string \| undefined`                         | `undefined` |
| `placeholder`     | `placeholder`      | Placeholder text for the date input.                                                                    | `string \| undefined`                         | `undefined` |
| `readOnly`        | `read-only`        | Whether the value is editable.                                                                          | `boolean \| undefined`                        | `false`     |
| `required`        | `required`         | A value is required or must be checked for the form to be submittable.                                  | `boolean \| undefined`                        | `false`     |
| `size`            | `size`             | The size of the input.                                                                                  | `"lg" \| "md" \| "sm" \| undefined`           | `'md'`      |
| `value`           | `value`            | The value of the control.                                                                               | `string`                                      | `''`        |


## Events

| Event         | Description                                 | Type                      |
| ------------- | ------------------------------------------- | ------------------------- |
| `inputBlur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Event emitted when the input value changes. | `CustomEvent<Event>`      |
| `inputFocus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
