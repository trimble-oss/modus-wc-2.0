# modus-wc-table



<!-- Auto Generated Below -->


## Overview

A customizable table component used to show a list of data in a table format.

Adheres to WCAG 2.2 standards.

## Properties

| Property               | Attribute      | Description                                                                        | Type                                      | Default         |
| ---------------------- | -------------- | ---------------------------------------------------------------------------------- | ----------------------------------------- | --------------- |
| `columns` _(required)_ | --             | An array of column definitions.                                                    | `IModusWcTableColumn[]`                   | `undefined`     |
| `customClass`          | `custom-class` | Custom CSS class to apply to the inner div.                                        | `string \| undefined`                     | `''`            |
| `data` _(required)_    | --             | An array of data objects.                                                          | `Record<string, any>[]`                   | `undefined`     |
| `density`              | `density`      | The density of the table, used to save space or increase readability.              | `"comfortable" \| "compact" \| undefined` | `'comfortable'` |
| `zebra`                | `zebra`        | Zebra striped tables differentiate rows by styling them in an alternating fashion. | `boolean \| undefined`                    | `false`         |


## Events

| Event      | Description                  | Type                                                        |
| ---------- | ---------------------------- | ----------------------------------------------------------- |
| `rowClick` | Emits when a row is clicked. | `CustomEvent<{ row: Record<string, any>; index: number; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
