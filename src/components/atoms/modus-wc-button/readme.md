# modus-wc-button

<!-- Auto Generated Below -->


## Overview

A customizable button component used to create buttons with different sizes, variants, and types.

Note: for buttons with icons you must follow the guide on  modus icon usage in our storybook documentation.

Adheres to WCAG 2.2 standards.

## Properties

| Property      | Attribute      | Description                                                                     | Type                                                              | Default     |
| ------------- | -------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------- |
| `color`       | `color`        | The color variant of the button.                                                | `"danger" \| "primary" \| "secondary" \| "tertiary" \| "warning"` | `'primary'` |
| `customClass` | `custom-class` | Custom CSS class to apply to the button element.                                | `string \| undefined`                                             | `''`        |
| `disabled`    | `disabled`     | If true, the button will be disabled.                                           | `boolean \| undefined`                                            | `false`     |
| `fullWidth`   | `full-width`   | If true, the button will take the full width of its container.                  | `boolean \| undefined`                                            | `false`     |
| `iconLeft`    | `icon-left`    | Takes the icon name and shows the icon aligned to the left of the button text.  | `string \| undefined`                                             | `undefined` |
| `iconOnly`    | `icon-only`    | Takes the icon name and renders an icon-only button.                            | `string \| undefined`                                             | `undefined` |
| `iconRight`   | `icon-right`   | Takes the icon name and shows the icon aligned to the right of the button text. | `string \| undefined`                                             | `undefined` |
| `label`       | `label`        | The text label displayed on the button.                                         | `string \| undefined`                                             | `undefined` |
| `pressed`     | `pressed`      | If true, the button will be in a pressed state (for toggle buttons).            | `boolean \| undefined`                                            | `false`     |
| `size`        | `size`         | The size of the button.                                                         | `"lg" \| "md" \| "sm"`                                            | `'md'`      |
| `type`        | `type`         | The type of the button.                                                         | `"button" \| "reset" \| "submit"`                                 | `'button'`  |
| `variant`     | `variant`      | The variant of the button.                                                      | `"borderless" \| "filled" \| "outlined"`                          | `'filled'`  |


## Events

| Event         | Description                                                         | Type                                       |
| ------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| `buttonClick` | Event emitted when the button is clicked or activated via keyboard. | `CustomEvent<KeyboardEvent \| MouseEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
