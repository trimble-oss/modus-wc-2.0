# modus-wc-skeleton



<!-- Auto Generated Below -->


## Overview

A customizable skeleton component used to create skeletons of various sizes and shapes.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute          | Description                                           | Type                                   | Default                                     |
| ------------------------ | ------------------ | ----------------------------------------------------- | -------------------------------------- | ------------------------------------------- |
| `ariaDescribedby`        | `aria-describedby` | The ID of the element that describes the skeleton.    | `string \| undefined`                  | `undefined`                                 |
| `ariaLabel` _(required)_ | `aria-label`       | The aria-label attribute for accessibility.           | `string`                               | `undefined`                                 |
| `ariaLabelledby`         | `aria-labelledby`  | The aria-labelledby attribute for usage with a label. | `string \| undefined`                  | `undefined`                                 |
| `customClass`            | `custom-class`     | Custom CSS class to apply to the inner div.           | `string`                               | `''`                                        |
| `height`                 | `height`           | The height of the skeleton.                           | `string`                               | `'var(--modus-wc-default-skeleton-height)'` |
| `shape`                  | `shape`            | The shape of the skeleton.                            | `"circle" \| "rectangle" \| undefined` | `'rectangle'`                               |
| `width`                  | `width`            | The width of the skeleton.                            | `string`                               | `'var(--modus-wc-default-skeleton-width)'`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
