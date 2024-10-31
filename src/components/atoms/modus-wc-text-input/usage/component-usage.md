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
