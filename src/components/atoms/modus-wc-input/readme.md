# modus-wc-input



<!-- Auto Generated Below -->


## Overview

A customizable input component used to create inputs with types.

Adheres to WCAG 2.2 standards.

## Usage

### Component-usage

```html
<!-- Basic Usage -->
<modus-wc-input
  aria-label="Enter your name"
  placeholder="Type your name here"
></modus-wc-input>

<!-- With all properties -->
<modus-wc-input
  aria-describedby="input-description"
  aria-invalid="false"
  aria-label="Full example input"
  custom-class="my-custom-class"
  daisy-class="modus-wc-input-custom"
  dir="ltr"
  disabled="false"
  id="full-example"
  max-length="50"
  name="full-example"
  placeholder="Type here..."
  readonly="false"
  required="true"
  tab-index="0"
  type="text"
  value="Initial value"
></modus-wc-input>

<!-- Disabled input -->
<modus-wc-input
  aria-label="Disabled input"
  disabled="true"
  value="This input is disabled"
></modus-wc-input>

<!-- Required input -->
<modus-wc-input
  aria-label="Required input"
  required="true"
  placeholder="This field is required"
></modus-wc-input>

<!-- Readonly input -->
<modus-wc-input
  aria-label="Readonly input"
  readonly="true"
  value="This content is readonly"
></modus-wc-input>

<!-- RTL input -->
<modus-wc-input
  aria-label="RTL input"
  dir="rtl"
  placeholder="أدخل النص هنا"
></modus-wc-input>

<!-- Input with custom classes -->
<modus-wc-input
  aria-label="Styled input"
  custom-class="my-custom-class"
  daisy-class="modus-wc-input-bordered modus-wc-input-lg"
  placeholder="This input has custom styling"
></modus-wc-input>

<!-- Different input types -->
<modus-wc-input
  aria-label="Email input"
  type="email"
  placeholder="Enter your email"
></modus-wc-input>

<modus-wc-input
  aria-label="Number input"
  type="number"
  placeholder="Enter a number"
></modus-wc-input>

<modus-wc-input
  aria-label="Password input"
  type="password"
  placeholder="Enter your password"
></modus-wc-input>

<!-- Input with event listeners -->
<modus-wc-input
  id="event-input"
  aria-label="Input with events"
  placeholder="Type here to see events in console"
></modus-wc-input>

<script>
  const input = document.getElementById('event-input');
  input.addEventListener('blur', (event) => console.log('Blur event:', event));
  input.addEventListener('change', (event) =>
    console.log('Change event:', event)
  );
  input.addEventListener('focus', (event) =>
    console.log('Focus event:', event)
  );
</script>
```



## Properties

| Property                 | Attribute          | Description                                                | Type                                          | Default     |
| ------------------------ | ------------------ | ---------------------------------------------------------- | --------------------------------------------- | ----------- |
| `ariaDescribedby`        | `aria-describedby` | The ID of the element that describes the input.            | `string \| undefined`                         | `undefined` |
| `ariaInvalid`            | `aria-invalid`     | Indicates whether the input has an invalid input.          | `boolean \| undefined`                        | `undefined` |
| `ariaLabel` _(required)_ | `aria-label`       | The aria-label attribute for accessibility.                | `string`                                      | `undefined` |
| `customClass`            | `custom-class`     | Custom CSS class to apply to the input (supports DaisyUI). | `string`                                      | `''`        |
| `dir`                    | `dir`              | Specifies the text direction of the input content.         | `"auto" \| "ltr" \| "rtl" \| undefined`       | `undefined` |
| `disabled`               | `disabled`         | The disabled state of the input.                           | `boolean`                                     | `false`     |
| `id`                     | `id`               | The ID of the input element.                               | `string \| undefined`                         | `undefined` |
| `maxLength`              | `max-length`       | The maximum number of characters allowed in the input.     | `number \| undefined`                         | `undefined` |
| `name`                   | `name`             | The name of the input.                                     | `string`                                      | `''`        |
| `placeholder`            | `placeholder`      | The input's placeholder text.                              | `string`                                      | `''`        |
| `readonly`               | `readonly`         | The readonly state of the input.                           | `boolean`                                     | `false`     |
| `required`               | `required`         | If true, the input will be required.                       | `boolean`                                     | `false`     |
| `tabIndex`               | `tab-index`        | The tabindex of the input.                                 | `number \| undefined`                         | `undefined` |
| `type`                   | `type`             | The input's type attribute.                                | `"email" \| "number" \| "password" \| "text"` | `'text'`    |
| `value`                  | `value`            | The input's value.                                         | `string`                                      | `''`        |


## Events

| Event    | Description                                 | Type                      |
| -------- | ------------------------------------------- | ------------------------- |
| `blur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `change` | Event emitted when the input value changes. | `CustomEvent<Event>`      |
| `focus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
