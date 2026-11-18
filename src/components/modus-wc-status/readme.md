# modus-wc-status



<!-- Auto Generated Below -->


## Overview

A status indicator with a pulsing dot and semantic label for conveying system state.

## Properties

| Property      | Attribute      | Description                                                          | Type                                                        | Default    |
| ------------- | -------------- | -------------------------------------------------------------------- | ----------------------------------------------------------- | ---------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the status container.                   | `string \| undefined`                                       | `''`       |
| `label`       | `label`        | The visible status label. Defaults to the variant name when omitted. | `string \| undefined`                                       | `''`       |
| `pulse`       | `pulse`        | Whether the dot displays a pulsing halo animation.                   | `boolean`                                                   | `true`     |
| `size`        | `size`         | Dot size. Default xs (8px).                                          | `"lg" \| "md" \| "sm" \| "xl" \| "xs"`                      | `'xs'`     |
| `variant`     | `variant`      | The semantic status variant.                                         | `"active" \| "danger" \| "inactive" \| "info" \| "warning"` | `'active'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
