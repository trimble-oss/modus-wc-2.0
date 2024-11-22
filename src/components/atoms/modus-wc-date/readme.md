# modus-wc-date



<!-- Auto Generated Below -->


## Overview

A customizable date picker component used to create date inputs.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute     | Description                                  | Type                  | Default     |
| ------------------------ | ------------- | -------------------------------------------- | --------------------- | ----------- |
| `ariaLabel` _(required)_ | `aria-label`  | The aria-label attribute for accessibility.  | `string`              | `undefined` |
| `inputId`                | `input-id`    | The ID of the input element.                 | `string \| undefined` | `undefined` |
| `name`                   | `name`        | The name attribute for the date input field. | `string \| undefined` | `undefined` |
| `placeholder`            | `placeholder` | Placeholder text for the date input.         | `string \| undefined` | `undefined` |
| `value`                  | `value`       | The value of the control.                    | `string`              | `''`        |


## Events

| Event         | Description                                 | Type                      |
| ------------- | ------------------------------------------- | ------------------------- |
| `inputBlur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Event emitted when the input value changes. | `CustomEvent<Event>`      |
| `inputFocus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
