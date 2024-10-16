# modus-wc-avatar



<!-- Auto Generated Below -->


## Overview

A customizable avatar component used to create avatars with different images.

Adheres to WCAG 2.2 standards.

## Usage

### Component-usage

```html
<!-- Basic Avatar -->
<modus-wc-avatar
  alt="User avatar"
  aria-label="User avatar"
  img-src="https://example.com/avatar.jpg"
></modus-wc-avatar>

<!-- Avatar with Custom Class -->
<modus-wc-avatar
  alt="User avatar"
  aria-label="User avatar"
  img-src="https://example.com/avatar.jpg"
  custom-class="my-custom-avatar"
></modus-wc-avatar>

<!-- Avatar with DaisyUI-inspired Class -->
<modus-wc-avatar
  alt="User avatar"
  aria-label="User avatar"
  img-src="https://example.com/avatar.jpg"
  daisy-class="modus-wc-rounded-full"
></modus-wc-avatar>

<!-- Avatar with Different Sizes (using DaisyUI-inspired classes) -->
<modus-wc-avatar
  alt="Small avatar"
  aria-label="Small avatar"
  img-src="https://example.com/avatar.jpg"
  daisy-class="modus-wc-w-8 modus-wc-h-8"
></modus-wc-avatar>

<modus-wc-avatar
  alt="Medium avatar"
  aria-label="Medium avatar"
  img-src="https://example.com/avatar.jpg"
  daisy-class="modus-wc-w-16 modus-wc-h-16"
></modus-wc-avatar>

<modus-wc-avatar
  alt="Large avatar"
  aria-label="Large avatar"
  img-src="https://example.com/avatar.jpg"
  daisy-class="modus-wc-w-24 modus-wc-h-24"
></modus-wc-avatar>

<!-- Avatar with Custom Shape (using DaisyUI-inspired classes) -->
<modus-wc-avatar
  alt="Rounded avatar"
  aria-label="Rounded avatar"
  img-src="https://example.com/avatar.jpg"
  daisy-class="modus-wc-rounded-lg"
></modus-wc-avatar>

<modus-wc-avatar
  alt="Square avatar"
  aria-label="Square avatar"
  img-src="https://example.com/avatar.jpg"
></modus-wc-avatar>

<!-- Avatar with Presence Indicator (using DaisyUI-inspired classes) -->
<modus-wc-avatar
  alt="Presence indicator avatar"
  aria-label="Presence indicator avatar"
  img-src="https://example.com/avatar.jpg"
  custom-class="modus-wc-online"
  daisy-class="modus-wc-w-24 modus-wc-rounded-full"
></modus-wc-avatar>
```



## Properties

| Property                 | Attribute      | Description                                 | Type     | Default     |
| ------------------------ | -------------- | ------------------------------------------- | -------- | ----------- |
| `alt` _(required)_       | `alt`          | The image alt attribute for accessibility.  | `string` | `undefined` |
| `ariaLabel` _(required)_ | `aria-label`   | The aria-label attribute for accessibility. | `string` | `undefined` |
| `customClass`            | `custom-class` | Custom CSS class to apply to the outer div. | `string` | `''`        |
| `daisyClass`             | `daisy-class`  | DaisyUI class to apply to inner div.        | `string` | `''`        |
| `imgSrc`                 | `img-src`      | The location of the image.                  | `string` | `''`        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
