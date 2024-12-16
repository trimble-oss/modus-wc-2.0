# modus-wc-theme-switcher



<!-- Auto Generated Below -->


## Overview

A theme switcher component used to toggle the application theme and/or mode.

Allows consumers to set the initial theme (Modus Classic, Prism, etc) and end-users to toggle modes (Light, Dark).

Adheres to WCAG 2.2 standards.

## Properties

| Property                 | Attribute      | Description                                                                                                                                                                           | Type                  | Default     |
| ------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `a11yLabel` _(required)_ | `a-1-1y-label` | The aria-label attribute used to define a string that labels the current element (accessibility). This property name is reserved by HTMLElement and omitted in the React integration. | `string`              | `undefined` |
| `customClass`            | `custom-class` | Custom CSS class to apply to the theme switcher element.                                                                                                                              | `string \| undefined` | `''`        |


## Events

| Event         | Description                                    | Type                        |
| ------------- | ---------------------------------------------- | --------------------------- |
| `themeChange` | An event that fires when the theme is changed. | `CustomEvent<IThemeConfig>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
