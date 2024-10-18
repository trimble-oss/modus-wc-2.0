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
