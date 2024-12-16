# modus-wc-progress



<!-- Auto Generated Below -->


## Overview

A customizable progress component used to show the progress of a task or show the passing of time.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute       | Description                                                                                                                                                                           | Type                  | Default     |
| ------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `a11yLabel` _(required)_ | `a-1-1y-label`  | The aria-label attribute used to define a string that labels the current element (accessibility). This property name is reserved by HTMLElement and omitted in the React integration. | `string`              | `undefined` |
| `customClass`            | `custom-class`  | Custom CSS class to apply to the progress element.                                                                                                                                    | `string \| undefined` | `''`        |
| `indeterminate`          | `indeterminate` | The indeterminate state of the progress component.                                                                                                                                    | `boolean`             | `false`     |
| `max`                    | `max`           | The progress component's maximum value.                                                                                                                                               | `number \| undefined` | `100`       |
| `value`                  | `value`         | The value of the progress component.                                                                                                                                                  | `number`              | `0`         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
