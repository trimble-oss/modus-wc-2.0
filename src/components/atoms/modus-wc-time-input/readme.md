# modus-wc-time-input



<!-- Auto Generated Below -->


## Overview

A customizable input component used to create time inputs.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute          | Description                                                                                                                                                                                                                                                | Type                                                | Default     |
| ------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ----------- |
| `ariaDescribedby`        | `aria-describedby` | The ID of the element that describes the input.                                                                                                                                                                                                            | `string \| undefined`                               | `undefined` |
| `ariaLabel` _(required)_ | `aria-label`       | The aria-label attribute for accessibility.                                                                                                                                                                                                                | `string`                                            | `undefined` |
| `autoComplete`           | `auto-complete`    | Hint for form autofill feature.                                                                                                                                                                                                                            | `"off" \| "on" \| undefined`                        | `undefined` |
| `autoFocus`              | `auto-focus`       | Indicates that an element should be focused on page load.                                                                                                                                                                                                  | `boolean \| undefined`                              | `undefined` |
| `bordered`               | `bordered`         | Indicates that the input should have a border.                                                                                                                                                                                                             | `boolean \| undefined`                              | `true`      |
| `customClass`            | `custom-class`     | Custom CSS class to apply to the input.                                                                                                                                                                                                                    | `string \| undefined`                               | `''`        |
| `disabled`               | `disabled`         | Whether the form control is disabled.                                                                                                                                                                                                                      | `boolean \| undefined`                              | `false`     |
| `inputDir`               | `input-dir`        | Specifies the time direction of the input content.                                                                                                                                                                                                         | `"" \| "auto" \| "ltr" \| "rtl" \| undefined`       | `undefined` |
| `inputId`                | `input-id`         | The ID of the input element.                                                                                                                                                                                                                               | `string \| undefined`                               | `undefined` |
| `inputTabIndex`          | `input-tab-index`  | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).                                                                                                                                                    | `number \| undefined`                               | `undefined` |
| `list`                   | `list`             | Provide a list of pre-defined options to suggest to the user. The value must be the ID of a <datalist> element in the same document.                                                                                                                       | `string \| undefined`                               | `undefined` |
| `max`                    | `max`              | Maximum value. Format: 'HH:mm', 'HH:mm:ss'.                                                                                                                                                                                                                | `string \| undefined`                               | `'23:59'`   |
| `min`                    | `min`              | Minimum value. Format: 'HH:mm', 'HH:mm:ss.'                                                                                                                                                                                                                | `string \| undefined`                               | `'00:00'`   |
| `name`                   | `name`             | Name of the form control. Submitted with the form as part of a name/value pair.                                                                                                                                                                            | `string \| undefined`                               | `undefined` |
| `readOnly`               | `read-only`        | Whether the value is editable.                                                                                                                                                                                                                             | `boolean \| undefined`                              | `false`     |
| `required`               | `required`         | A value is required for the form to be submittable.                                                                                                                                                                                                        | `boolean \| undefined`                              | `false`     |
| `size`                   | `size`             | The size of the input.                                                                                                                                                                                                                                     | `"lg" \| "md" \| "sm" \| "xl" \| "xs" \| undefined` | `'md'`      |
| `step`                   | `step`             | Value of step given in seconds with a scaling factor of 1000 (milliseconds). Default value is 60 (seconds).                                                                                                                                                | `number \| undefined`                               | `undefined` |
| `value`                  | `value`            | The value of the time input. Always in 24-hour format that includes leading zeros: HH:mm, regardless of input format which is likely to be selected based on user's locale (or by the user agent). If time includes seconds the format is always HH:mm:ss. | `string`                                            | `''`        |


## Events

| Event         | Description                                 | Type                      |
| ------------- | ------------------------------------------- | ------------------------- |
| `inputBlur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Event emitted when the input value changes. | `CustomEvent<Event>`      |
| `inputFocus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
