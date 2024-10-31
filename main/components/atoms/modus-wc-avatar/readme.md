# modus-wc-avatar



<!-- Auto Generated Below -->


## Overview

A customizable avatar component used to create avatars with different images.

Adheres to WCAG 2.2 standards.

## Usage

### Component-usage

```html
<!-- Basic avatar -->
<modus-wc-avatar
  alt="User avatar"
  aria-label="User avatar"
  img-src="https://example.com/avatar.jpg"
></modus-wc-avatar>
```



## Properties

| Property                 | Attribute      | Description                                 | Type                                                | Default     |
| ------------------------ | -------------- | ------------------------------------------- | --------------------------------------------------- | ----------- |
| `alt` _(required)_       | `alt`          | The image alt attribute for accessibility.  | `string`                                            | `undefined` |
| `ariaLabel` _(required)_ | `aria-label`   | The aria-label attribute for accessibility. | `string`                                            | `undefined` |
| `customClass`            | `custom-class` | Custom CSS class to apply to the inner div. | `string`                                            | `''`        |
| `imgSrc`                 | `img-src`      | The location of the image.                  | `string`                                            | `''`        |
| `shape`                  | `shape`        | The shape of the avatar.                    | `"circle" \| "square" \| undefined`                 | `'circle'`  |
| `size`                   | `size`         | The size of the avatar.                     | `"lg" \| "md" \| "sm" \| "xl" \| "xs" \| undefined` | `'md'`      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
