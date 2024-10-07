# modus-wc-input



<!-- Auto Generated Below -->


## Overview

A customizable input component used to create inputs with different sizes and types.

Adheres to WCAG 2.2 standards.

## Usage

### Component-usage

```html
<!-- Basic Input -->
<modus-wc-input></modus-wc-input>

<!-- Input with Placeholder -->
<modus-wc-input placeholder="Enter text"></modus-wc-input>

<!-- Input with Different Sizes -->
<modus-wc-input size="small"></modus-wc-input>
<modus-wc-input size="medium"></modus-wc-input>
<modus-wc-input size="large"></modus-wc-input>

<!-- Disabled Input -->
<modus-wc-input disabled></modus-wc-input>

<!-- Dark Mode Input -->
<modus-wc-input class="modus-wc-input-wrapper--dark-mode"></modus-wc-input>

<!-- Input with Event Handling -->
<modus-wc-input id="eventHandlingInput"></modus-wc-input>

<script>
  document
    .getElementById('eventHandlingInput')
    .addEventListener('blur', function (event) {
      console.log('Input lost focus:', event);
    });

  document
    .getElementById('eventHandlingInput')
    .addEventListener('change', function (event) {
      console.log('Input value changed:', event.target.value);
    });

  document
    .getElementById('eventHandlingInput')
    .addEventListener('focus', function (event) {
      console.log('Input gained focus:', event);
    });
</script>

<!-- Input with ARIA Label -->
<modus-wc-input aria-label="Accessible Input"></modus-wc-input>
```



## Properties

| Property                 | Attribute      | Description                                                  | Type                                          | Default     |
| ------------------------ | -------------- | ------------------------------------------------------------ | --------------------------------------------- | ----------- |
| `ariaLabel` _(required)_ | `aria-label`   | The aria-label attribute for accessibility.                  | `string`                                      | `undefined` |
| `customClass`            | `custom-class` | Custom CSS class to apply to the input.                      | `string`                                      | `''`        |
| `disabled`               | `disabled`     | If true, the input will be disabled.                         | `boolean`                                     | `false`     |
| `name`                   | `name`         | The input's name attribute.                                  | `string`                                      | `''`        |
| `placeholder`            | `placeholder`  | The input's placeholder text.                                | `string`                                      | `''`        |
| `required`               | `required`     | If true, the input will be required.                         | `boolean`                                     | `false`     |
| `size`                   | `size`         | The size of the input. Can be 'small', 'medium', or 'large'. | `"large" \| "medium" \| "small"`              | `'medium'`  |
| `type`                   | `type`         | The input's type attribute.                                  | `"email" \| "number" \| "password" \| "text"` | `'text'`    |
| `value`                  | `value`        | The input's value.                                           | `string`                                      | `''`        |


## Events

| Event    | Description                                 | Type                      |
| -------- | ------------------------------------------- | ------------------------- |
| `blur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `change` | Event emitted when the input value changes. | `CustomEvent<string>`     |
| `focus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
