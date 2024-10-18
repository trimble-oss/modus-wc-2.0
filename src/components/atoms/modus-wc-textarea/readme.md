# modus-wc-textarea



<!-- Auto Generated Below -->


## Overview

A customizable textarea component.

Adheres to WCAG 2.2 standards.

## Usage

### Component-usage

```html
<!-- Basic Usage -->
<modus-wc-textarea
  aria-label="Enter your comments"
  placeholder="Type your comments here"
></modus-wc-textarea>

<!-- With all properties -->
<modus-wc-textarea
  aria-describedby="textarea-description"
  aria-invalid="false"
  aria-label="Full example textarea"
  custom-class="my-custom-class"
  daisy-class="modus-wc-textarea-custom"
  dir="ltr"
  disabled="false"
  id="full-example"
  max-length="500"
  name="full-example"
  placeholder="Type here..."
  readonly="false"
  required="true"
  rows="5"
  tab-index="0"
  value="Initial value"
></modus-wc-textarea>

<!-- Disabled textarea -->
<modus-wc-textarea
  aria-label="Disabled textarea"
  disabled="true"
  value="This textarea is disabled"
></modus-wc-textarea>

<!-- Required textarea -->
<modus-wc-textarea
  aria-label="Required textarea"
  required="true"
  placeholder="This field is required"
></modus-wc-textarea>

<!-- Readonly textarea -->
<modus-wc-textarea
  aria-label="Readonly textarea"
  readonly="true"
  value="This content is readonly"
></modus-wc-textarea>

<!-- RTL textarea -->
<modus-wc-textarea
  aria-label="RTL textarea"
  dir="rtl"
  placeholder="أدخل النص هنا"
></modus-wc-textarea>

<!-- Textarea with custom classes -->
<modus-wc-textarea
  aria-label="Styled textarea"
  custom-class="my-custom-class"
  daisy-class="modus-wc-textarea-bordered modus-wc-textarea-lg"
  placeholder="This textarea has custom styling"
></modus-wc-textarea>

<!-- Textarea with event listeners -->
<modus-wc-textarea
  id="event-textarea"
  aria-label="Textarea with events"
  placeholder="Type here to see events in console"
></modus-wc-textarea>

<script>
  const textarea = document.getElementById('event-textarea');
  textarea.addEventListener('blur', (event) =>
    console.log('Blur event:', event)
  );
  textarea.addEventListener('change', (event) =>
    console.log('Change event:', event)
  );
  textarea.addEventListener('focus', (event) =>
    console.log('Focus event:', event)
  );
</script>
```



## Properties

| Property                 | Attribute          | Description                                                   | Type                                    | Default     |
| ------------------------ | ------------------ | ------------------------------------------------------------- | --------------------------------------- | ----------- |
| `ariaDescribedby`        | `aria-describedby` | The ID of the element that describes the textarea.            | `string \| undefined`                   | `undefined` |
| `ariaInvalid`            | `aria-invalid`     | Indicates whether the textarea has an invalid input.          | `boolean \| undefined`                  | `undefined` |
| `ariaLabel` _(required)_ | `aria-label`       | The aria-label attribute for accessibility.                   | `string`                                | `undefined` |
| `customClass`            | `custom-class`     | Custom CSS class to apply to the textarea (supports DaisyUI). | `string`                                | `''`        |
| `dir`                    | `dir`              | Specifies the text direction of the textarea content.         | `"auto" \| "ltr" \| "rtl" \| undefined` | `undefined` |
| `disabled`               | `disabled`         | The disabled state of the textarea.                           | `boolean`                               | `false`     |
| `id`                     | `id`               | The ID of the textarea element.                               | `string \| undefined`                   | `undefined` |
| `maxLength`              | `max-length`       | The maximum number of characters allowed in the textarea.     | `number \| undefined`                   | `undefined` |
| `name`                   | `name`             | The name of the textarea.                                     | `string`                                | `''`        |
| `placeholder`            | `placeholder`      | The placeholder text for the textarea.                        | `string`                                | `''`        |
| `readonly`               | `readonly`         | The readonly state of the textarea.                           | `boolean`                               | `false`     |
| `required`               | `required`         | The required state of the textarea.                           | `boolean`                               | `false`     |
| `rows`                   | `rows`             | The number of visible text lines for the textarea.            | `number \| undefined`                   | `undefined` |
| `tabIndex`               | `tab-index`        | The tabindex of the textarea.                                 | `number \| undefined`                   | `undefined` |
| `value`                  | `value`            | The value of the textarea.                                    | `string`                                | `''`        |


## Events

| Event    | Description                              | Type                      |
| -------- | ---------------------------------------- | ------------------------- |
| `blur`   | Emitted when the textarea loses focus.   | `CustomEvent<FocusEvent>` |
| `change` | Emitted when the textarea value changes. | `CustomEvent<Event>`      |
| `focus`  | Emitted when the textarea gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
