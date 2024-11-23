# modus-wc-toggle



<!-- Auto Generated Below -->


## Overview

A customizable checkbox component.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute          | Description                                                                     | Type                                          | Default     |
| ------------------------ | ------------------ | ------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `ariaDescribedby`        | `aria-describedby` | The ID of the element that describes the toggle.                                | `string \| undefined`                         | `undefined` |
| `ariaLabel` _(required)_ | `aria-label`       | The aria-label attribute for accessibility.                                     | `string`                                      | `undefined` |
| `ariaLabelledby`         | `aria-labelledby`  | The aria-labelledby attribute for usage with a label.                           | `string \| undefined`                         | `undefined` |
| `customClass`            | `custom-class`     | Custom CSS class to apply to the inner div.                                     | `string`                                      | `''`        |
| `disabled`               | `disabled`         | The disabled state of the toggle.                                               | `boolean \| undefined`                        | `false`     |
| `indeterminate`          | `indeterminate`    | The indeterminate state of the toggle.                                          | `boolean`                                     | `false`     |
| `inputDir`               | `input-dir`        | Specifies the text direction of the input content.                              | `"" \| "auto" \| "ltr" \| "rtl" \| undefined` | `undefined` |
| `inputId`                | `input-id`         | The ID of the input element.                                                    | `string \| undefined`                         | `undefined` |
| `inputTabIndex`          | `input-tab-index`  | The tabindex of the input.                                                      | `number \| undefined`                         | `undefined` |
| `name`                   | `name`             | Name of the form control. Submitted with the form as part of a name/value pair. | `string \| undefined`                         | `''`        |
| `required`               | `required`         | A value is required for the form to be submittable.                             | `boolean \| undefined`                        | `false`     |
| `size`                   | `size`             | The size of the input.                                                          | `"lg" \| "md" \| "sm" \| undefined`           | `'md'`      |
| `value`                  | `value`            | The value of the toggle.                                                        | `boolean`                                     | `false`     |


## Events

| Event         | Description                           | Type                      |
| ------------- | ------------------------------------- | ------------------------- |
| `inputBlur`   | Emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Emitted when the input value changes. | `CustomEvent<Event>`      |
| `inputFocus`  | Emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
