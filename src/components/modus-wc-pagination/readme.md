# modus-wc-pagination



<!-- Auto Generated Below -->


## Overview

Pagination component to navigate through pages of content.

Adheres to WCAG 2.2 standards.

## Properties

| Property          | Attribute           | Description                                                              | Type                            | Default     |
| ----------------- | ------------------- | ------------------------------------------------------------------------ | ------------------------------- | ----------- |
| `ariaLabelValues` | `aria-label-values` | Aria label values for pagination buttons                                 | `IAriaLabelValues \| undefined` | `undefined` |
| `count`           | `count`             | Total number of pages                                                    | `number`                        | `1`         |
| `customClass`     | `custom-class`      | Custom CSS class to apply                                                | `string \| undefined`           | `''`        |
| `nextButtonText`  | `next-button-text`  | The next page button text. If not set, an icon control will be used.     | `string \| undefined`           | `undefined` |
| `page`            | `page`              | The current page number                                                  | `number`                        | `1`         |
| `prevButtonText`  | `prev-button-text`  | The previous page button text. If not set, an icon control will be used. | `string \| undefined`           | `undefined` |
| `size`            | `size`              | Size of the pagination buttons                                           | `"lg" \| "md" \| "sm"`          | `'md'`      |


## Events

| Event        | Description                     | Type                       |
| ------------ | ------------------------------- | -------------------------- |
| `pageChange` | Event emitted when page changes | `CustomEvent<IPageChange>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
