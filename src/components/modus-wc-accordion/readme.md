# modus-wc-accordion



<!-- Auto Generated Below -->


## Overview

A customizable accordion component used for showing and hiding related groups of content.

The component supports a `<slot>` for injecting `<modus-wc-collapse>` elements. See [Collapse](/docs/components-collapse--docs) docs for additional info.

Adheres to WCAG 2.2 standards.

## Properties

| Property      | Attribute      | Description                                 | Type                  | Default |
| ------------- | -------------- | ------------------------------------------- | --------------------- | ------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div. | `string \| undefined` | `''`    |


## Events

| Event            | Description                                                                                | Type                                                 |
| ---------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `expandedChange` | When a collapse expanded state is changed, this event outputs the relevant index and state | `CustomEvent<{ expanded: boolean; index: number; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
