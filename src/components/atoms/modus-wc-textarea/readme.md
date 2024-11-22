# modus-wc-textarea



<!-- Auto Generated Below -->


## Overview

A customizable textarea component.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute            | Description                                                                                      | Type                                                        | Default     |
| ------------------------ | -------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- | ----------- |
| `ariaDescribedby`        | `aria-describedby`   | The ID of the element that describes the textarea.                                               | `string \| undefined`                                       | `undefined` |
| `ariaLabel` _(required)_ | `aria-label`         | The aria-label attribute for accessibility.                                                      | `string`                                                    | `undefined` |
| `bordered`               | `bordered`           | Indicates that the input should have a border.                                                   | `boolean \| undefined`                                      | `true`      |
| `customClass`            | `custom-class`       | Custom CSS class to apply to the textarea (supports DaisyUI).                                    | `string \| undefined`                                       | `''`        |
| `disabled`               | `disabled`           | The disabled state of the textarea.                                                              | `boolean \| undefined`                                      | `false`     |
| `fullWidth`              | `full-width`         | If true, the textarea will take the full width of its container.                                 | `boolean \| undefined`                                      | `true`      |
| `inputAriaInvalid`       | `input-aria-invalid` | Indicates whether the input is invalid.                                                          | `"false" \| "grammar" \| "spelling" \| "true" \| undefined` | `undefined` |
| `inputDir`               | `input-dir`          | Specifies the text direction of the input content.                                               | `"" \| "auto" \| "ltr" \| "rtl" \| undefined`               | `undefined` |
| `inputId`                | `input-id`           | The ID of the input element.                                                                     | `string \| undefined`                                       | `undefined` |
| `inputSpellcheck`        | `input-spellcheck`   | Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee. | `boolean \| undefined`                                      | `undefined` |
| `inputTabIndex`          | `input-tab-index`    | The tabindex of the input.                                                                       | `number \| undefined`                                       | `undefined` |
| `maxLength`              | `max-length`         | The maximum number of characters allowed in the textarea.                                        | `number \| undefined`                                       | `undefined` |
| `name`                   | `name`               | The name of the textarea.                                                                        | `string \| undefined`                                       | `''`        |
| `placeholder`            | `placeholder`        | The placeholder text for the textarea.                                                           | `string \| undefined`                                       | `''`        |
| `readonly`               | `readonly`           | The readonly state of the textarea.                                                              | `boolean \| undefined`                                      | `false`     |
| `required`               | `required`           | The required state of the textarea.                                                              | `boolean \| undefined`                                      | `false`     |
| `rows`                   | `rows`               | The number of visible text lines for the textarea.                                               | `number \| undefined`                                       | `undefined` |
| `size`                   | `size`               | The size of the input.                                                                           | `"lg" \| "md" \| "sm" \| undefined`                         | `'md'`      |
| `value`                  | `value`              | The value of the textarea.                                                                       | `string`                                                    | `''`        |


## Events

| Event         | Description                           | Type                      |
| ------------- | ------------------------------------- | ------------------------- |
| `inputBlur`   | Emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Emitted when the input value changes. | `CustomEvent<Event>`      |
| `inputFocus`  | Emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
