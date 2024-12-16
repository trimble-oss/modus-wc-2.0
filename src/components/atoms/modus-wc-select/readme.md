# modus-wc-select



<!-- Auto Generated Below -->


## Overview

A customizable select component used to pick a value from a list of options.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute            | Description                                                                                                                                                                                    | Type                                          | Default     |
| ------------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `a11yDescribedby`        | `a-1-1y-describedby` | The aria-describedby attribute matching the ID of the element that describes the checkbox (accessibility). This property name is reserved by HTMLElement and omitted in the React integration. | `string \| undefined`                         | `undefined` |
| `a11yLabel` _(required)_ | `a-1-1y-label`       | The aria-label attribute used to define a string that labels the current element (accessibility). This property name is reserved by HTMLElement and omitted in the React integration.          | `string`                                      | `undefined` |
| `a11yLabelledby`         | `a-1-1y-labelledby`  | The aria-labelledby attribute for usage with a label (accessibility). This property name is reserved by HTMLElement and omitted in the React integration.                                      | `string \| undefined`                         | `undefined` |
| `ariaDescribedby`        | `aria-describedby`   | The ID of the element that describes the input.                                                                                                                                                | `string \| undefined`                         | `undefined` |
| `autoFocus`              | `auto-focus`         | Indicates that an element should be focused on page load.                                                                                                                                      | `boolean \| undefined`                        | `undefined` |
| `bordered`               | `bordered`           | Indicates that the input should have a border.                                                                                                                                                 | `boolean \| undefined`                        | `true`      |
| `customClass`            | `custom-class`       | Custom CSS class to apply to the inner div.                                                                                                                                                    | `string \| undefined`                         | `''`        |
| `disabled`               | `disabled`           | Whether the form control is disabled.                                                                                                                                                          | `boolean \| undefined`                        | `false`     |
| `inputAriaInvalid`       | `input-aria-invalid` | Indicates whether the input has an invalid input.                                                                                                                                              | `"false" \| "true" \| undefined`              | `undefined` |
| `inputDir`               | `input-dir`          | Specifies the text direction of the input content.                                                                                                                                             | `"" \| "auto" \| "ltr" \| "rtl" \| undefined` | `undefined` |
| `inputId`                | `input-id`           | The ID of the input element.                                                                                                                                                                   | `string \| undefined`                         | `undefined` |
| `inputTabIndex`          | `input-tab-index`    | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).                                                                                        | `number \| undefined`                         | `undefined` |
| `name`                   | `name`               | Name of the form control. Submitted with the form as part of a name/value pair.                                                                                                                | `string \| undefined`                         | `undefined` |
| `options`                | --                   | The options to display in the select dropdown.                                                                                                                                                 | `ISelectOption[]`                             | `[]`        |
| `required`               | `required`           | A value is required for the form to be submittable.                                                                                                                                            | `boolean \| undefined`                        | `false`     |
| `size`                   | `size`               | The size of the input.                                                                                                                                                                         | `"lg" \| "md" \| "sm" \| "xs" \| undefined`   | `'md'`      |
| `value`                  | `value`              | The value of the control.                                                                                                                                                                      | `string`                                      | `''`        |


## Events

| Event         | Description                                 | Type                      |
| ------------- | ------------------------------------------- | ------------------------- |
| `inputBlur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Event emitted when the input value changes. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
