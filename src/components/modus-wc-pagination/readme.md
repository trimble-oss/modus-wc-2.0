# modus-wc-pagination



<!-- Auto Generated Below -->


## Overview

Pagination component to navigate through pages of content.

Adheres to WCAG 2.2 standards.

## Properties

| Property                | Attribute                  | Description                                                                       | Type                   | Default           |
| ----------------------- | -------------------------- | --------------------------------------------------------------------------------- | ---------------------- | ----------------- |
| `ariaLabelFirstPage`    | `aria-label-first-page`    | Aria label for the first page button                                              | `string \| undefined`  | `'First page'`    |
| `ariaLabelLastPage`     | `aria-label-last-page`     | Aria label for the last page button                                               | `string \| undefined`  | `'Last page'`     |
| `ariaLabelNextPage`     | `aria-label-next-page`     | Aria label for the next page button                                               | `string \| undefined`  | `'Next page'`     |
| `ariaLabelPage`         | `aria-label-page`          | Aria label for the page number button. Use {0} as placeholder for the page number | `string \| undefined`  | `'Page {0}'`      |
| `ariaLabelPreviousPage` | `aria-label-previous-page` | Aria label for the previous page button                                           | `string \| undefined`  | `'Previous page'` |
| `count`                 | `count`                    | Total number of pages                                                             | `number`               | `1`               |
| `customClass`           | `custom-class`             | Custom CSS class to apply                                                         | `string \| undefined`  | `''`              |
| `page`                  | `page`                     | The current page number                                                           | `number`               | `1`               |
| `size`                  | `size`                     | Size of the pagination buttons                                                    | `"lg" \| "md" \| "sm"` | `'md'`            |


## Events

| Event        | Description                     | Type                              |
| ------------ | ------------------------------- | --------------------------------- |
| `pageChange` | Event emitted when page changes | `CustomEvent<IModusWcPageChange>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
