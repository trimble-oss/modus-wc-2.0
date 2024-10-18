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
