# modus-wc-text-input



<!-- Auto Generated Below -->


## Overview

A customizable input component used to create text inputs with types.

Adheres to WCAG 2.2 standards.

## Usage

### Component-usage

```html
<!-- Basic text input -->
<modus-wc-text-input aria-label="Enter your name"></modus-wc-text-input>

<!-- Text input with event listeners -->
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
| `ariaLabel` _(required)_ | `aria-label`         | The aria-label attribute for accessibility.                                                                                                                              | `string`                                                                              | `undefined` |
| `autoCapitalize`         | `auto-capitalize`    | Controls automatic capitalization in inputted text.                                                                                                                      | `"characters" \| "none" \| "off" \| "on" \| "sentences" \| "words" \| undefined`      | `undefined` |
| `autoComplete`           | `auto-complete`      | Hint for form autofill feature.                                                                                                                                          | `"off" \| "on" \| undefined`                                                          | `undefined` |
| `autoFocus`              | `auto-focus`         | Indicates that an element should be focused on page load.                                                                                                                | `boolean \| undefined`                                                                | `undefined` |
| `bordered`               | `bordered`           | Indicates that the input should have a border.                                                                                                                           | `boolean \| undefined`                                                                | `true`      |
| `customClass`            | `custom-class`       | Custom CSS class to apply to the input.                                                                                                                                  | `string`                                                                              | `''`        |
| `disabled`               | `disabled`           | Whether the form control is disabled.                                                                                                                                    | `boolean`                                                                             | `false`     |
| `inputAriaInvalid`       | `input-aria-invalid` | Indicates whether the input has an invalid input.                                                                                                                        | `"false" \| "grammar" \| "spelling" \| "true" \| undefined`                           | `undefined` |
| `inputDir`               | `input-dir`          | Specifies the text direction of the input content.                                                                                                                       | `"" \| "auto" \| "ltr" \| "rtl" \| undefined`                                         | `undefined` |
| `inputId`                | `input-id`           | The ID of the input element.                                                                                                                                             | `string \| undefined`                                                                 | `undefined` |
| `inputMode`              | `input-mode`         | Hints at the type of data that might be entered by the user while editing the element or its contents. This allows a browser to display an appropriate virtual keyboard. | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `inputSpellcheck`        | `input-spellcheck`   | Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.                                                                         | `boolean \| undefined`                                                                | `false`     |
| `inputTabIndex`          | `input-tab-index`    | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).                                                                  | `number \| undefined`                                                                 | `undefined` |
| `maxLength`              | `max-length`         | Maximum length (number of characters) of value.                                                                                                                          | `number \| undefined`                                                                 | `undefined` |
| `minLength`              | `min-length`         | Minimum length (number of characters) of value.                                                                                                                          | `number \| undefined`                                                                 | `undefined` |
| `name`                   | `name`               | Name of the form control. Submitted with the form as part of a name/value pai.                                                                                           | `string`                                                                              | `''`        |
| `pattern`                | `pattern`            | Pattern the value must match to be valid                                                                                                                                 | `string \| undefined`                                                                 | `undefined` |
| `placeholder`            | `placeholder`        | Text that appears in the form control when it has no value set.                                                                                                          | `string`                                                                              | `''`        |
| `readOnly`               | `read-only`          | Whether the value is editable.                                                                                                                                           | `boolean`                                                                             | `false`     |
| `required`               | `required`           | A value is required or must be checked for the form to be submittable.                                                                                                   | `boolean`                                                                             | `false`     |
| `size`                   | `size`               | The size of the input.                                                                                                                                                   | `"lg" \| "md" \| "sm" \| undefined`                                                   | `'md'`      |
| `type`                   | `type`               | Type of form control.                                                                                                                                                    | `"email" \| "password" \| "search" \| "tel" \| "text" \| "url"`                       | `'text'`    |
| `value`                  | `value`              | The value of the control.                                                                                                                                                | `string`                                                                              | `''`        |


## Events

| Event         | Description                                 | Type                      |
| ------------- | ------------------------------------------- | ------------------------- |
| `inputBlur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Event emitted when the input value changes. | `CustomEvent<Event>`      |
| `inputFocus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
