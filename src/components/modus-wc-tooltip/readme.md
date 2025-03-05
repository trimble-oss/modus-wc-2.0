# modus-wc-tooltip



<!-- Auto Generated Below -->


## Overview

A customizable tooltip component used to create tooltips with different content.

Adheres to WCAG 2.2 standards.

## Properties

| Property      | Attribute      | Description                                                                                             | Type                                                            | Default     |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------- |
| `content`     | `content`      | The text content of the tooltip.                                                                        | `string`                                                        | `''`        |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div.                                                             | `string \| undefined`                                           | `''`        |
| `disabled`    | `disabled`     | Disables displaying the tooltip on hover                                                                | `boolean \| undefined`                                          | `false`     |
| `forceOpen`   | `force-open`   | Use this attribute to force the tooltip to remain open.                                                 | `boolean \| undefined`                                          | `undefined` |
| `position`    | `position`     | The position that the tooltip will render in relation to the element.                                   | `"auto" \| "bottom" \| "left" \| "right" \| "top" \| undefined` | `'auto'`    |
| `tooltipId`   | `tooltip-id`   | The ID of the tooltip element, useful for setting the "aria-describedby" attribute of related elements. | `string \| undefined`                                           | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
