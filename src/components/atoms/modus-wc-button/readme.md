# modus-wc-button

<!-- Auto Generated Below -->


## Overview

A customizable button component used to create buttons with different sizes, variants, and types.

Adheres to WCAG 2.2 standards.

## Usage

### Component-usage

```html
<!-- Basic Button -->
<modus-wc-button label="Click Me"></modus-wc-button>

<!-- Button with Different Sizes -->
<modus-wc-button label="Small Button" size="small"></modus-wc-button>
<modus-wc-button label="Medium Button" size="medium"></modus-wc-button>
<modus-wc-button label="Large Button" size="large"></modus-wc-button>

<!-- Button with Different Variants -->
<modus-wc-button label="Filled Button" variant="filled"></modus-wc-button>
<modus-wc-button label="Outlined Button" variant="outlined"></modus-wc-button>
<modus-wc-button label="Text Button" variant="text"></modus-wc-button>

<!-- Button with Different Types -->
<modus-wc-button label="Submit Button" type="submit"></modus-wc-button>
<modus-wc-button label="Reset Button" type="reset"></modus-wc-button>
<modus-wc-button label="Button" type="button"></modus-wc-button>

<!-- Disabled Button -->
<modus-wc-button label="Disabled Button" disabled></modus-wc-button>

<!-- Button with Custom Class -->
<modus-wc-button
  label="Custom Class Button"
  custom-class="my-custom-class"
></modus-wc-button>

<!-- Button with Event Handling -->
<modus-wc-button id="eventHandlingButton" label="Click Me"></modus-wc-button>

<script>
  document
    .getElementById('eventHandlingButton')
    .addEventListener('click', function (event) {
      console.log('Button clicked!', event);
    });
</script>

<!-- Button with ARIA Label -->
<modus-wc-button
  aria-label="Accessible Button"
  label="Click Me"
></modus-wc-button>

<!-- Full Width Button -->
<modus-wc-button label="Full Width Button" full-width></modus-wc-button>

<!-- Dark Mode Button -->
<modus-wc-button label="Dark Mode Button" class="dark-mode"></modus-wc-button>
```



## Properties

| Property                 | Attribute      | Description                                                          | Type                                                              | Default     |
| ------------------------ | -------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------- |
| `ariaLabel` _(required)_ | `aria-label`   | The aria-label attribute for accessibility.                          | `string`                                                          | `undefined` |
| `color`                  | `color`        | The color variant of the button.                                     | `"danger" \| "primary" \| "secondary" \| "tertiary" \| "warning"` | `'primary'` |
| `customClass`            | `custom-class` | Custom CSS class to apply to the button element.                     | `string`                                                          | `''`        |
| `disabled`               | `disabled`     | If true, the button will be disabled.                                | `boolean \| undefined`                                            | `false`     |
| `fullWidth`              | `full-width`   | If true, the button will take the full width of its container.       | `boolean \| undefined`                                            | `false`     |
| `label` _(required)_     | `label`        | The text label displayed on the button.                              | `string`                                                          | `undefined` |
| `pressed`                | `pressed`      | If true, the button will be in a pressed state (for toggle buttons). | `boolean`                                                         | `false`     |
| `size`                   | `size`         | The size of the button.                                              | `"lg" \| "md" \| "sm"`                                            | `'md'`      |
| `type`                   | `type`         | The type of the button.                                              | `"button" \| "reset" \| "submit"`                                 | `'button'`  |
| `variant`                | `variant`      | The variant of the button.                                           | `"filled" \| "outlined" \| "text"`                                | `'filled'`  |


## Events

| Event         | Description                                                         | Type                                       |
| ------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| `buttonClick` | Event emitted when the button is clicked or activated via keyboard. | `CustomEvent<KeyboardEvent \| MouseEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
