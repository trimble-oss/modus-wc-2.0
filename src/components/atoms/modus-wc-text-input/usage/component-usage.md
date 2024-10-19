```html
<!-- Basic Usage -->
<modus-wc-text-input
  aria-label="Enter your name"
  placeholder="Type your name here"
></modus-wc-text-input>

<!-- With all properties -->
<modus-wc-text-input
  aria-describedby="input-description"
  aria-invalid="false"
  aria-label="Full example input"
  custom-class="my-custom-class"
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
></modus-wc-text-input>

<!-- Disabled input -->
<modus-wc-text-input
  aria-label="Disabled input"
  disabled="true"
  value="This input is disabled"
></modus-wc-text-input>

<!-- Required input -->
<modus-wc-text-input
  aria-label="Required input"
  required="true"
  placeholder="This field is required"
></modus-wc-text-input>

<!-- Readonly input -->
<modus-wc-text-input
  aria-label="Readonly input"
  readonly="true"
  value="This content is readonly"
></modus-wc-text-input>

<!-- RTL input -->
<modus-wc-text-input
  aria-label="RTL input"
  dir="rtl"
  placeholder="أدخل النص هنا"
></modus-wc-text-input>

<!-- Input with custom classes -->
<modus-wc-text-input
  aria-label="Styled input"
  custom-class="modus-wc-input-bordered modus-wc-input-lg"
  placeholder="This input has custom styling"
></modus-wc-text-input>

<!-- Different input types -->
<modus-wc-text-input
  aria-label="Email input"
  type="email"
  placeholder="Enter your email"
></modus-wc-text-input>

<modus-wc-text-input
  aria-label="Number input"
  type="number"
  placeholder="Enter a number"
></modus-wc-text-input>

<modus-wc-text-input
  aria-label="Password input"
  type="password"
  placeholder="Enter your password"
></modus-wc-text-input>

<!-- Input with event listeners -->
<modus-wc-text-input
  id="event-text-input"
  aria-label="Input with events"
  placeholder="Type here to see events in console"
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
