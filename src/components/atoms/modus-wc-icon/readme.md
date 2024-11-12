# modus-wc-icon



<!-- Auto Generated Below -->


## Overview

A customizable icon component used to render Modus icons.

This component requires Modus icons to be installed in the host application. See [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs) for steps.

Adheres to WCAG 2.2 standards.

## Properties

| Property            | Attribute      | Description                                                                                                              | Type                                | Default     |
| ------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------- |
| `ariaLabel`         | `aria-label`   | The aria-label attribute for accessibility. This provides an accessible name for screen readers.                         | `string \| undefined`               | `undefined` |
| `customClass`       | `custom-class` | Custom CSS class to apply to the i element.                                                                              | `string`                            | `''`        |
| `decorative`        | `decorative`   | Indicates that the icon is decorative. When true, sets aria-hidden to hide the icon from screen readers.                 | `boolean \| undefined`              | `true`      |
| `name` _(required)_ | `name`         | The icon name, should match the CSS class in the icon font.                                                              | `string`                            | `undefined` |
| `size`              | `size`         | The icon size, can be "sm", "md", "lg" (a custom size can be specified in CSS). This adjusts the font size for the icon. | `"lg" \| "md" \| "sm" \| undefined` | `'md'`      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
