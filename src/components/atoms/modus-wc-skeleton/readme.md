# modus-wc-skeleton



<!-- Auto Generated Below -->


## Overview

A customizable skeleton component used to create skeletons of various sizes and shapes.

Adheres to WCAG 2.2 standards.

## Properties

| Property      | Attribute      | Description                                                                                 | Type                                   | Default                                     |
| ------------- | -------------- | ------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------- |
| `ariaHidden`  | `aria-hidden`  | Whether the skeleton is hidden from screen readers and other assistive technologies.        | `boolean`                              | `true`                                      |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div.                                                 | `string`                               | `''`                                        |
| `height`      | `height`       | The height of the skeleton.                                                                 | `string`                               | `'var(--modus-wc-default-skeleton-height)'` |
| `role`        | `role`         | The role of the skeleton.                                                                   | `string`                               | `'presentation'`                            |
| `shape`       | `shape`        | The shape of the skeleton.                                                                  | `"circle" \| "rectangle" \| undefined` | `'rectangle'`                               |
| `tabindex`    | `tabindex`     | The tab index of the skeleton. Defaults to -1 to prevent the skeleton from being focusable. | `number`                               | `-1`                                        |
| `width`       | `width`        | The width of the skeleton.                                                                  | `string`                               | `'var(--modus-wc-default-skeleton-width)'`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
