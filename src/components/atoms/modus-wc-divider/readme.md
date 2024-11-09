# modus-wc-divider



<!-- Auto Generated Below -->


## Overview

A customizable divider component used to separate content horizontally or vertically.

Adheres to WCAG 2.2 standards.

## Usage

### Component-usage

```html
<!-- Basic Divider -->
<modus-wc-divider aria-label="Basic divider"></modus-wc-divider>

<!-- Divider with Content -->
<modus-wc-divider
  aria-label="Divider with content"
  content="Content"
></modus-wc-divider>

<!-- Divider with Custom Classes -->
<modus-wc-divider
  aria-label="Custom class divider"
  custom-class="my-custom-outer-class"
  daisy-class="my-custom-inner-class"
>
</modus-wc-divider>

<!-- Horizontal Divider (default) -->
<modus-wc-divider
  aria-label="Horizontal divider"
  custom-class="flex w-full flex-col"
>
</modus-wc-divider>

<!-- Vertical Divider -->
<modus-wc-divider
  aria-label="Vertical divider"
  custom-class="flex h-full flex-row"
  daisy-class="divider divider-horizontal"
>
</modus-wc-divider>

<!-- Divider with Content and Custom Classes -->
<modus-wc-divider
  aria-label="Custom divider with content"
  content="Content"
  custom-class="my-section-divider"
  daisy-class="divider-neutral"
>
</modus-wc-divider>

<!-- Responsive Divider -->
<modus-wc-divider
  aria-label="Responsive divider"
  custom-class="flex w-full flex-col md:flex-row"
  daisy-class="md:divider-horizontal"
>
</modus-wc-divider>

<!-- Divider with Different Colors (using Tailwind classes) -->
<modus-wc-divider
  aria-label="Colored divider"
  custom-class="flex w-full flex-col"
  daisy-class="divider-primary"
>
</modus-wc-divider>
```



## Properties

| Property                 | Attribute      | Description                                                                                              | Type                                                                                                           | Default      |
| ------------------------ | -------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------ |
| `ariaLabel` _(required)_ | `aria-label`   | The aria-label attribute used for accessibility.                                                         | `string`                                                                                                       | `undefined`  |
| `color`                  | `color`        | The color of the divider line.                                                                           | `"danger" \| "high-contrast" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| undefined` | `'tertiary'` |
| `content`                | `content`      | The content to display in the divider.                                                                   | `string \| undefined`                                                                                          | `''`         |
| `customClass`            | `custom-class` | Custom CSS class to apply to the divider element.                                                        | `string`                                                                                                       | `''`         |
| `orientation`            | `orientation`  | The orientation of the divider. This is in reference to how content will be rendered around the divider. | `"horizontal" \| "vertical" \| undefined`                                                                      | `'vertical'` |
| `position`               | `position`     | The position of the divider.                                                                             | `"center" \| "end" \| "start" \| undefined`                                                                    | `'center'`   |
| `responsive`             | `responsive`   | Whether the divider is responsive or not.                                                                | `boolean \| undefined`                                                                                         | `true`       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
