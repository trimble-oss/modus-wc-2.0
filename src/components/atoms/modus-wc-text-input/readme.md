# modus-wc-text-input



<!-- Auto Generated Below -->


## Overview

A customizable input component used to create text inputs with types.

Adheres to WCAG 2.2 standards.

## Usage

### Component-usage

```html
<!-- Basic input -->
<modus-wc-text-input aria-label="Enter your name"></modus-wc-text-input>

<!-- Input with event listeners -->
<modus-wc-text-input
  id="event-text-input"
  aria-label="Enter your name"
></modus-wc-text-input>

<script>
  const input = document.getElementById('event-text-input');
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

| Property                 | Attribute            | Description                                                                                                                                                              | Type                                                                                  | Default     |
| ------------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ----------- |
| `ariaDescribedby`        | `aria-describedby`   | The ID of the element that describes the input.                                                                                                                          | `string \| undefined`                                                                 | `undefined` |
| `ariaInvalidInput`       | `aria-invalid-input` | Indicates whether the input has an invalid input.                                                                                                                        | `"false" \| "grammar" \| "spelling" \| "true" \| undefined`                           | `'false'`   |
| `ariaLabel` _(required)_ | `aria-label`         | The aria-label attribute for accessibility.                                                                                                                              | `string`                                                                              | `undefined` |
| `autoCapitalize`         | `auto-capitalize`    | Controls automatic capitalization in inputted text.                                                                                                                      | `"characters" \| "none" \| "off" \| "on" \| "sentences" \| "words" \| undefined`      | `undefined` |
| `autoComplete`           | `auto-complete`      | Hint for form autofill feature.                                                                                                                                          | `"off" \| "on" \| undefined`                                                          | `undefined` |
| `autoFocus`              | `auto-focus`         | Indicates that an element should be focused on page load.                                                                                                                | `boolean \| undefined`                                                                | `undefined` |
| `customClass`            | `custom-class`       | Custom CSS class to apply to the input (supports DaisyUI).                                                                                                               | `string`                                                                              | `''`        |
| `dir`                    | `dir`                | Specifies the text direction of the input content.                                                                                                                       | `"" \| "auto" \| "ltr" \| "rtl"`                                                      | `''`        |
| `disabled`               | `disabled`           | Whether the form control is disabled.                                                                                                                                    | `boolean`                                                                             | `false`     |
| `id`                     | `id`                 | The ID of the input element.                                                                                                                                             | `string`                                                                              | `''`        |
| `inputMode`              | `input-mode`         | Hints at the type of data that might be entered by the user while editing the element or its contents. This allows a browser to display an appropriate virtual keyboard. | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `maxLength`              | `max-length`         | Maximum length (number of characters) of value.                                                                                                                          | `number \| undefined`                                                                 | `undefined` |
| `minLength`              | `min-length`         | Minimum length (number of characters) of value.                                                                                                                          | `number \| undefined`                                                                 | `undefined` |
| `name`                   | `name`               | Name of the form control. Submitted with the form as part of a name/value pai.                                                                                           | `string`                                                                              | `''`        |
| `pattern`                | `pattern`            | Pattern the value must match to be valid                                                                                                                                 | `string \| undefined`                                                                 | `undefined` |
| `placeholder`            | `placeholder`        | Text that appears in the form control when it has no value set.                                                                                                          | `string`                                                                              | `''`        |
| `readOnly`               | `read-only`          | Whether the value is editable.                                                                                                                                           | `boolean`                                                                             | `false`     |
| `required`               | `required`           | A value is required or must be checked for the form to be submittable.                                                                                                   | `boolean`                                                                             | `false`     |
| `spellcheck`             | `spellcheck`         | Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.                                                                         | `boolean`                                                                             | `false`     |
| `tabIndex`               | `tab-index`          | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).                                                                  | `number`                                                                              | `0`         |
| `type`                   | `type`               | Type of form control.                                                                                                                                                    | `"email" \| "password" \| "search" \| "tel" \| "text" \| "url"`                       | `'text'`    |
| `value`                  | `value`              | The value of the control.                                                                                                                                                | `string`                                                                              | `''`        |


## Events

| Event    | Description                                 | Type                      |
| -------- | ------------------------------------------- | ------------------------- |
| `blur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `change` | Event emitted when the input value changes. | `CustomEvent<Event>`      |
| `focus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
