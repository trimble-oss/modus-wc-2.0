# modus-wc-button-group



<!-- Auto Generated Below -->


## Overview

A customizable buttongroup component that groups multiple Modus buttons together.

The component supports a `<slot>` for injecting content within the buttongroup.

## Properties

| Property        | Attribute        | Description                                             | Type                                                                           | Default        |
| --------------- | ---------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------- |
| `buttonStyle`   | `button-style`   | Style to apply to all buttons within the button group   | `"borderless" \| "fill" \| "outlined"`                                         | `'outlined'`   |
| `color`         | `color`          | Color to apply to all buttons within the button group   | `"danger" \| "primary" \| "secondary" \| "tertiary" \| "warning" \| undefined` | `undefined`    |
| `disabled`      | `disabled`       | Disables all buttons within the button group            | `boolean \| undefined`                                                         | `false`        |
| `orientation`   | `orientation`    | Orientation of the button group: horizontal or vertical | `"horizontal" \| "vertical" \| undefined`                                      | `'horizontal'` |
| `selectionType` | `selection-type` | Selection type for button group                         | `"default" \| "multiple" \| "single" \| undefined`                             | `'default'`    |


## Events

| Event              | Description                                           | Type                                                         |
| ------------------ | ----------------------------------------------------- | ------------------------------------------------------------ |
| `buttonGroupClick` | Event emitted when any button in the group is clicked | `CustomEvent<{ button: HTMLElement; isSelected: boolean; }>` |
| `selectionChange`  | Event emitted when button selection changes           | `CustomEvent<{ selectedButtons: HTMLElement[]; }>`           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
