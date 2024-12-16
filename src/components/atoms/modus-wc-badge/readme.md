# modus-wc-badge



<!-- Auto Generated Below -->


## Overview

A customizable badge component used to create badges with different sizes, types, and colors.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute      | Description                                                                                                                                                                           | Type                                                                                              | Default     |
| ------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------- |
| `a11yLabel` _(required)_ | `a-1-1y-label` | The aria-label attribute used to define a string that labels the current element (accessibility). This property name is reserved by HTMLElement and omitted in the React integration. | `string`                                                                                          | `undefined` |
| `color`                  | `color`        | The color variant of the badge.                                                                                                                                                       | `"danger" \| "high-contrast" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"` | `'primary'` |
| `content` _(required)_   | `content`      | The content to display inside the badge. For 'counter' type, this should be a number.                                                                                                 | `string`                                                                                          | `undefined` |
| `customClass`            | `custom-class` | Custom CSS class to apply to the span element.                                                                                                                                        | `string`                                                                                          | `''`        |
| `size`                   | `size`         | The size of the badge.                                                                                                                                                                | `"lg" \| "md" \| "sm"`                                                                            | `'md'`      |
| `variant`                | `variant`      | The variant of the badge.                                                                                                                                                             | `"counter" \| "filled" \| "text"`                                                                 | `'filled'`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
