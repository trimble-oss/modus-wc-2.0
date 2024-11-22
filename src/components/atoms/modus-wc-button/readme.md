# modus-wc-button

<!-- Auto Generated Below -->


## Overview

A customizable button component used to create buttons with different sizes, variants, and types.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute      | Description                                                          | Type                                                              | Default     |
| ------------------------ | -------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------- |
| `ariaLabel` _(required)_ | `aria-label`   | The aria-label attribute for accessibility.                          | `string`                                                          | `undefined` |
| `color`                  | `color`        | The color variant of the button.                                     | `"danger" \| "primary" \| "secondary" \| "tertiary" \| "warning"` | `'primary'` |
| `customClass`            | `custom-class` | Custom CSS class to apply to the button element.                     | `string`                                                          | `''`        |
| `disabled`               | `disabled`     | If true, the button will be disabled.                                | `boolean \| undefined`                                            | `false`     |
| `fullWidth`              | `full-width`   | If true, the button will take the full width of its container.       | `boolean \| undefined`                                            | `false`     |
| `label` _(required)_     | `label`        | The text label displayed on the button.                              | `string`                                                          | `undefined` |
| `pressed`                | `pressed`      | If true, the button will be in a pressed state (for toggle buttons). | `boolean \| undefined`                                            | `false`     |
| `size`                   | `size`         | The size of the button.                                              | `"lg" \| "md" \| "sm"`                                            | `'md'`      |
| `type`                   | `type`         | The type of the button.                                              | `"button" \| "reset" \| "submit"`                                 | `'button'`  |
| `variant`                | `variant`      | The variant of the button.                                           | `"filled" \| "outlined" \| "text"`                                | `'filled'`  |


## Events

| Event         | Description                                                         | Type                                       |
| ------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| `buttonClick` | Event emitted when the button is clicked or activated via keyboard. | `CustomEvent<KeyboardEvent \| MouseEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
