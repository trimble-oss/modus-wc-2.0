# modus-wc-typography



<!-- Auto Generated Below -->


## Overview

A customizable typography component used to render text with different sizes, hierarchy, and weights.

By default, all heading elements (h1-h6) are styled with modus default standard size="md" and weight="normal".
You can override the default styling by providing your own custom values for the size or weight properties.

## Properties

| Property      | Attribute      | Description                                          | Type                                                                  | Default    |
| ------------- | -------------- | ---------------------------------------------------- | --------------------------------------------------------------------- | ---------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the typography element. | `string \| undefined`                                                 | `''`       |
| `hierarchy`   | `hierarchy`    | The hierarchy of the typography component.           | `"body" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p"`       | `'p'`      |
| `size`        | `size`         | The size of the font.                                | `"2xl" \| "3xl" \| "lg" \| "md" \| "sm" \| "xl" \| "xs" \| undefined` | `'md'`     |
| `weight`      | `weight`       | The weight of the text.                              | `"bold" \| "light" \| "normal" \| "semibold" \| undefined`            | `'normal'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
