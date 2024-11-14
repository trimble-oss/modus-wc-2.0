# modus-wc-checkbox



<!-- Auto Generated Below -->


## Overview

A customizable checkbox component.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute            | Description                                           | Type                                          | Default     |
| ------------------------ | -------------------- | ----------------------------------------------------- | --------------------------------------------- | ----------- |
| `ariaDescribedby`        | `aria-describedby`   | The ID of the element that describes the checkbox.    | `string \| undefined`                         | `undefined` |
| `ariaLabel` _(required)_ | `aria-label`         | The aria-label attribute for accessibility.           | `string`                                      | `undefined` |
| `ariaLabelledby`         | `aria-labelledby`    | The aria-labelledby attribute for usage with a label. | `string \| undefined`                         | `undefined` |
| `checkboxDir`            | `checkbox-dir`       | Specifies the text direction of the checkbox content. | `"" \| "auto" \| "ltr" \| "rtl" \| undefined` | `undefined` |
| `checkboxId`             | `checkbox-id`        | The ID of the checkbox element.                       | `string \| undefined`                         | `undefined` |
| `checkboxTabIndex`       | `checkbox-tab-index` | The tabindex of the checkbox.                         | `number \| undefined`                         | `undefined` |
| `customClass`            | `custom-class`       | Custom CSS class to apply to the inner div.           | `string`                                      | `''`        |
| `disabled`               | `disabled`           | The disabled state of the checkbox.                   | `boolean \| undefined`                        | `false`     |
| `indeterminate`          | `indeterminate`      | The indeterminate state of the checkbox.              | `boolean`                                     | `false`     |
| `name`                   | `name`               | The name of the checkbox.                             | `string \| undefined`                         | `''`        |
| `required`               | `required`           | The required state of the checkbox.                   | `boolean \| undefined`                        | `false`     |
| `size`                   | `size`               | The size of the input.                                | `"lg" \| "md" \| "sm" \| undefined`           | `'md'`      |
| `value`                  | `value`              | Indicates whether the checkbox is checked or not.     | `boolean`                                     | `false`     |


## Events

| Event            | Description                              | Type                      |
| ---------------- | ---------------------------------------- | ------------------------- |
| `checkboxBlur`   | Emitted when the checkbox loses focus.   | `CustomEvent<FocusEvent>` |
| `checkboxChange` | Emitted when the checkbox value changes. | `CustomEvent<Event>`      |
| `checkboxFocus`  | Emitted when the checkbox gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
