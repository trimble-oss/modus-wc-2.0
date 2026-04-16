# modus-wc-handle



<!-- Auto Generated Below -->


## Overview

A draggable handle component for resizing adjacent elements

## Properties

| Property        | Attribute        | Description                                                                                                        | Type                                                                           | Default         |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | --------------- |
| `buttonColor`   | `button-color`   | The color of the button.                                                                                           | `"danger" \| "primary" \| "secondary" \| "tertiary" \| "warning" \| undefined` | `'tertiary'`    |
| `buttonSize`    | `button-size`    | The size of the button.                                                                                            | `"lg" \| "md" \| "sm" \| "xs" \| undefined`                                    | `'md'`          |
| `buttonVariant` | `button-variant` | The variant of the button.                                                                                         | `"borderless" \| "filled" \| "outlined" \| undefined`                          | `'filled'`      |
| `customClass`   | `custom-class`   | Custom CSS class to apply to the handle element.                                                                   | `string \| undefined`                                                          | `''`            |
| `defaultSplit`  | `default-split`  | The initial split percentage for the left/top panel (1-100). The right/bottom panel gets the remaining percentage. | `number \| undefined`                                                          | `50`            |
| `density`       | `density`        | The density/spacing of the handle container (compact: 8px, comfortable: 12px, relaxed: 16px).                      | `"comfortable" \| "compact" \| "relaxed" \| undefined`                         | `'comfortable'` |
| `leftTarget`    | `left-target`    | The left target element to resize (CSS selector or HTMLElement)                                                    | `HTMLElement \| string \| undefined`                                           | `undefined`     |
| `orientation`   | `orientation`    | The orientation of the handle.                                                                                     | `"horizontal" \| "vertical" \| undefined`                                      | `'horizontal'`  |
| `rightTarget`   | `right-target`   | The right target element to resize (CSS selector or HTMLElement)                                                   | `HTMLElement \| string \| undefined`                                           | `undefined`     |
| `size`          | `size`           | The size of the handle.                                                                                            | `"2xl" \| "default" \| "lg" \| "xl" \| undefined`                              | `'default'`     |
| `type`          | `type`           | The type of handle to display.                                                                                     | `"bar" \| "button" \| undefined`                                               | `'bar'`         |


## Dependencies

### Depends on

- [modus-wc-button](../modus-wc-button)
- [modus-wc-icon](../modus-wc-icon)

### Graph
```mermaid
graph TD;
  modus-wc-handle --> modus-wc-button
  modus-wc-handle --> modus-wc-icon
  style modus-wc-handle fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
