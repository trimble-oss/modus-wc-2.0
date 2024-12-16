# modus-wc-radio



<!-- Auto Generated Below -->


## Overview

A customizable radio component.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute            | Description                                                                                                                                                                                    | Type                                          | Default     |
| ------------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `a11yDescribedby`        | `a-1-1y-describedby` | The aria-describedby attribute matching the ID of the element that describes the checkbox (accessibility). This property name is reserved by HTMLElement and omitted in the React integration. | `string \| undefined`                         | `undefined` |
| `a11yLabel` _(required)_ | `a-1-1y-label`       | The aria-label attribute used to define a string that labels the current element (accessibility). This property name is reserved by HTMLElement and omitted in the React integration.          | `string`                                      | `undefined` |
| `a11yLabelledby`         | `a-1-1y-labelledby`  | The aria-labelledby attribute for usage with a label (accessibility). This property name is reserved by HTMLElement and omitted in the React integration.                                      | `string \| undefined`                         | `undefined` |
| `customClass`            | `custom-class`       | Custom CSS class to apply to the inner div.                                                                                                                                                    | `string \| undefined`                         | `''`        |
| `disabled`               | `disabled`           | The disabled state of the radio.                                                                                                                                                               | `boolean \| undefined`                        | `false`     |
| `inputDir`               | `input-dir`          | Specifies the text direction of the input content.                                                                                                                                             | `"" \| "auto" \| "ltr" \| "rtl" \| undefined` | `undefined` |
| `inputId`                | `input-id`           | The ID of the input element.                                                                                                                                                                   | `string \| undefined`                         | `undefined` |
| `inputTabIndex`          | `input-tab-index`    | The tabindex of the input.                                                                                                                                                                     | `number \| undefined`                         | `undefined` |
| `name`                   | `name`               | Name of the form control. Submitted with the form as part of a name/value pair.                                                                                                                | `string \| undefined`                         | `''`        |
| `required`               | `required`           | A value is required for the form to be submittable.                                                                                                                                            | `boolean \| undefined`                        | `false`     |
| `size`                   | `size`               | The size of the input.                                                                                                                                                                         | `"lg" \| "md" \| "sm" \| undefined`           | `'md'`      |
| `value`                  | `value`              | The value of the radio.                                                                                                                                                                        | `boolean`                                     | `false`     |


## Events

| Event         | Description                           | Type                      |
| ------------- | ------------------------------------- | ------------------------- |
| `inputBlur`   | Emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Emitted when the input value changes. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
