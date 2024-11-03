# modus-wc-theme-switcher



<!-- Auto Generated Below -->


## Overview

A theme switcher component used to toggle the application theme and/or mode.

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute      | Description                                                     | Type                                       | Default     |
| ------------------------ | -------------- | --------------------------------------------------------------- | ------------------------------------------ | ----------- |
| `ariaLabel` _(required)_ | `aria-label`   | The aria-label attribute for accessibility.                     | `string`                                   | `undefined` |
| `controls`               | `controls`     | The controls the theme switcher renders (theme, mode, or both). | `"both" \| "mode" \| "theme" \| undefined` | `'both'`    |
| `customClass`            | `custom-class` | Custom CSS class to apply to the typography element.            | `string`                                   | `''`        |


## Events

| Event         | Description                                    | Type                        |
| ------------- | ---------------------------------------------- | --------------------------- |
| `themeChange` | An event that fires when the theme is changed. | `CustomEvent<IThemeConfig>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
