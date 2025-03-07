# modus-wc-pagination



<!-- Auto Generated Below -->


## Overview

Pagination component to navigate through pages of content.

Adheres to WCAG 2.2 standards.

## Properties

| Property        | Attribute         | Description                             | Type                   | Default |
| --------------- | ----------------- | --------------------------------------- | ---------------------- | ------- |
| `count`         | `count`           | Total number of pages                   | `number`               | `1`     |
| `customClass`   | `custom-class`    | Custom CSS class to apply               | `string \| undefined`  | `''`    |
| `page`          | `page`            | The current page number                 | `number`               | `1`     |
| `showFirstLast` | `show-first-last` | Whether to show first/last page buttons | `boolean`              | `true`  |
| `size`          | `size`            | Size of the pagination buttons          | `"lg" \| "md" \| "sm"` | `'md'`  |


## Events

| Event        | Description                     | Type                       |
| ------------ | ------------------------------- | -------------------------- |
| `pageChange` | Event emitted when page changes | `CustomEvent<IPageChange>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
