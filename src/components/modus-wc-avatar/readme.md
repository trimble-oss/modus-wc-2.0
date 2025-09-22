# modus-wc-avatar



<!-- Auto Generated Below -->


## Overview

A customizable avatar component used to create avatars with different images or user initials.
When no image is provided, the component can display initials (up to 3 characters) from the initials prop.
The component will extract the first letter of each word in the initials string.

## Properties

| Property           | Attribute      | Description                                        | Type                                        | Default     |
| ------------------ | -------------- | -------------------------------------------------- | ------------------------------------------- | ----------- |
| `alt` _(required)_ | `alt`          | The image alt attribute for accessibility.         | `string`                                    | `undefined` |
| `customClass`      | `custom-class` | Custom CSS class to apply to the inner div.        | `string \| undefined`                       | `''`        |
| `imgSrc`           | `img-src`      | The location of the image.                         | `string`                                    | `''`        |
| `initials`         | `initials`     | The initials to display when no image is provided. | `string \| undefined`                       | `''`        |
| `shape`            | `shape`        | The shape of the avatar.                           | `"circle" \| "square" \| undefined`         | `'circle'`  |
| `size`             | `size`         | The size of the avatar.                            | `"lg" \| "md" \| "sm" \| "xs" \| undefined` | `'md'`      |


## Dependencies

### Used by

 - [modus-wc-navbar](../modus-wc-navbar)

### Depends on

- [modus-wc-icon](../modus-wc-icon)

### Graph
```mermaid
graph TD;
  modus-wc-avatar --> modus-wc-icon
  modus-wc-navbar --> modus-wc-avatar
  style modus-wc-avatar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
