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
