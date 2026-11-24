# modus-wc-side-navigation



<!-- Auto Generated Below -->


## Overview

A customizable side navigation component for organizing primary navigation and content areas in an application.

The component supports a `<slot>` for injecting custom content inside the side navigation panel.

## Properties

| Property                 | Attribute                   | Description                                                                                                                             | Type                  | Default     |
| ------------------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `collapseOnClickOutside` | `collapse-on-click-outside` | Whether the side navigation should collapse when clicking outside of it.                                                                | `boolean`             | `true`      |
| `customClass`            | `custom-class`              | Custom CSS class to apply to the inner div.                                                                                             | `string \| undefined` | `''`        |
| `expanded`               | `expanded`                  | Whether the side navigation is expanded.                                                                                                | `boolean`             | `false`     |
| `maxWidth`               | `max-width`                 | Maximum width of the side navigation panel in an expanded state.                                                                        | `string`              | `'256px'`   |
| `mode`                   | `mode`                      | Mode to make side navigation either overlay or push the content for the selector specified in targetContent                             | `"overlay" \| "push"` | `'overlay'` |
| `targetContent`          | `target-content`            | (optional) Specify the selector for the page's content for which paddings and margins will be set by side navigation based on the mode. | `string`              | `''`        |


## Events

| Event            | Description                                                         | Type                   |
| ---------------- | ------------------------------------------------------------------- | ---------------------- |
| `expandedChange` | Event emitted when the expanded state changes (expanded/collapsed). | `CustomEvent<boolean>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
