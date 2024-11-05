# modus-wc-badge



<!-- Auto Generated Below -->


## Overview

A customizable badge component used to create badges with different sizes, types, and colors.

Adheres to WCAG 2.2 standards.

## Usage

### Component-usage

```html
<!-- Basic Badge -->
<modus-wc-badge content="Basic"></modus-wc-badge>

<!-- Badge with Different Colors -->
<modus-wc-badge content="Primary" color="primary"></modus-wc-badge>
<modus-wc-badge content="Secondary" color="secondary"></modus-wc-badge>
<modus-wc-badge content="Tertiary" color="tertiary"></modus-wc-badge>
<modus-wc-badge content="Success" color="success"></modus-wc-badge>
<modus-wc-badge content="Warning" color="warning"></modus-wc-badge>
<modus-wc-badge content="Danger" color="danger"></modus-wc-badge>

<!-- Badge with Different Sizes -->
<modus-wc-badge content="Small" size="small"></modus-wc-badge>
<modus-wc-badge content="Medium" size="medium"></modus-wc-badge>
<modus-wc-badge content="Large" size="large"></modus-wc-badge>

<!-- Badge with Different Types -->
<modus-wc-badge content="Filled" type="filled"></modus-wc-badge>
<modus-wc-badge content="Text" type="text"></modus-wc-badge>
<modus-wc-badge content="5" type="counter"></modus-wc-badge>

<!-- Badge with Custom Class -->
<modus-wc-badge
  content="Custom Class"
  custom-class="my-custom-class"
></modus-wc-badge>

<!-- Badge with ARIA Label -->
<modus-wc-badge
  aria-label="New messages"
  content="3"
  type="counter"
></modus-wc-badge>

<!-- Dark Mode Badge -->
<modus-wc-badge content="Dark Mode" class="dark-mode"></modus-wc-badge>

<!-- High Contrast Mode Badge -->
<modus-wc-badge
  content="High Contrast"
  class="high-contrast-mode"
></modus-wc-badge>
```



## Properties

| Property                 | Attribute      | Description                                                                           | Type                                                                                              | Default     |
| ------------------------ | -------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------- |
| `ariaLabel` _(required)_ | `aria-label`   | The aria-label attribute for accessibility.                                           | `string`                                                                                          | `undefined` |
| `color`                  | `color`        | The color variant of the badge.                                                       | `"danger" \| "high-contrast" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"` | `'primary'` |
| `content` _(required)_   | `content`      | The content to display inside the badge. For 'counter' type, this should be a number. | `string`                                                                                          | `undefined` |
| `customClass`            | `custom-class` | Custom CSS class to apply to the span element.                                        | `string`                                                                                          | `''`        |
| `size`                   | `size`         | The size of the badge.                                                                | `"lg" \| "md" \| "sm"`                                                                            | `'md'`      |
| `type`                   | `type`         | The type of the badge.                                                                | `"counter" \| "filled" \| "text"`                                                                 | `'filled'`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
