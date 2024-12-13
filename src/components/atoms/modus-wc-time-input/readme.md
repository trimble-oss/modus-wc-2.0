# modus-wc-time-input



<!-- Auto Generated Below -->


## Overview

A customizable input component used to create time inputs.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute          | Description                                                                                                                                                                                                                                                                  | Type                                          | Default     |
| ------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `ariaDescribedby`        | `aria-describedby` | The ID of the element that describes the input.                                                                                                                                                                                                                              | `string \| undefined`                         | `undefined` |
| `ariaLabel` _(required)_ | `aria-label`       | The aria-label attribute for accessibility.                                                                                                                                                                                                                                  | `string`                                      | `undefined` |
| `autoComplete`           | `auto-complete`    | Hint for form autofill feature.                                                                                                                                                                                                                                              | `"off" \| "on" \| undefined`                  | `undefined` |
| `bordered`               | `bordered`         | Indicates that the input should have a border.                                                                                                                                                                                                                               | `boolean \| undefined`                        | `true`      |
| `customClass`            | `custom-class`     | Custom CSS class to apply to the input.                                                                                                                                                                                                                                      | `string \| undefined`                         | `''`        |
| `disabled`               | `disabled`         | Whether the form control is disabled.                                                                                                                                                                                                                                        | `boolean \| undefined`                        | `false`     |
| `inputDir`               | `input-dir`        | Specifies the time direction of the input content.                                                                                                                                                                                                                           | `"" \| "auto" \| "ltr" \| "rtl" \| undefined` | `undefined` |
| `inputId`                | `input-id`         | The ID of the input element.                                                                                                                                                                                                                                                 | `string \| undefined`                         | `undefined` |
| `inputTabIndex`          | `input-tab-index`  | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).                                                                                                                                                                      | `number \| undefined`                         | `undefined` |
| `list`                   | `list`             | ID of a <datalist> element that contains pre-defined time options. The value must be the ID of a <datalist> element in the same document.                                                                                                                                    | `string \| undefined`                         | `undefined` |
| `max`                    | `max`              | Maximum value. Format: 'HH:mm', 'HH:mm:ss'.                                                                                                                                                                                                                                  | `string \| undefined`                         | `undefined` |
| `min`                    | `min`              | Minimum value. Format: 'HH:mm', 'HH:mm:ss.'                                                                                                                                                                                                                                  | `string \| undefined`                         | `undefined` |
| `name`                   | `name`             | Name of the form control. Submitted with the form as part of a name/value pair.                                                                                                                                                                                              | `string \| undefined`                         | `undefined` |
| `readOnly`               | `read-only`        | Whether the value is editable.                                                                                                                                                                                                                                               | `boolean \| undefined`                        | `false`     |
| `required`               | `required`         | A value is required for the form to be submittable.                                                                                                                                                                                                                          | `boolean \| undefined`                        | `false`     |
| `seconds`                | `seconds`          | Displays the time input format as `HH:mm:ss` if `true`. Internally sets the `step` to 1 second. If a `step` value is provided, it will override this attribute.                                                                                                              | `boolean \| undefined`                        | `false`     |
| `size`                   | `size`             | The size of the input.                                                                                                                                                                                                                                                       | `"lg" \| "md" \| "sm" \| undefined`           | `'md'`      |
| `step`                   | `step`             | Specifies the granularity that the `value` must adhere to. Value of step given in seconds. Default value is 60 seconds. Overrides the `seconds` attribute if both are provided.                                                                                              | `number \| undefined`                         | `undefined` |
| `timeOptions`            | --                 | The options to display in the time input dropdown. Time options must be in `HH:mm` or `HH:mm:ss` format.                                                                                                                                                                     | `string[]`                                    | `[]`        |
| `value`                  | `value`            | The value of the time input. Always in 24-hour format that includes leading zeros: `HH:mm` or `HH:mm:ss`, regardless of input format which is likely to be selected based on user's locale (or by the user agent). If time includes seconds the format is always `HH:mm:ss`. | `string`                                      | `''`        |


## Events

| Event         | Description                                 | Type                      |
| ------------- | ------------------------------------------- | ------------------------- |
| `inputBlur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Event emitted when the input value changes. | `CustomEvent<Event>`      |
| `inputFocus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
