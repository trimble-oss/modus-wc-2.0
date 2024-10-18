```html
<!-- Basic Usage -->
<modus-wc-textarea
  aria-label="Enter your comments"
  placeholder="Type your comments here"
></modus-wc-textarea>

<!-- With all properties -->
<modus-wc-textarea
  aria-describedby="textarea-description"
  aria-invalid="false"
  aria-label="Full example textarea"
  custom-class="my-custom-class"
  daisy-class="modus-wc-textarea-custom"
  dir="ltr"
  disabled="false"
  id="full-example"
  max-length="500"
  name="full-example"
  placeholder="Type here..."
  readonly="false"
  required="true"
  rows="5"
  tab-index="0"
  value="Initial value"
></modus-wc-textarea>

<!-- Disabled textarea -->
<modus-wc-textarea
  aria-label="Disabled textarea"
  disabled="true"
  value="This textarea is disabled"
></modus-wc-textarea>

<!-- Required textarea -->
<modus-wc-textarea
  aria-label="Required textarea"
  required="true"
  placeholder="This field is required"
></modus-wc-textarea>

<!-- Readonly textarea -->
<modus-wc-textarea
  aria-label="Readonly textarea"
  readonly="true"
  value="This content is readonly"
></modus-wc-textarea>

<!-- RTL textarea -->
<modus-wc-textarea
  aria-label="RTL textarea"
  dir="rtl"
  placeholder="أدخل النص هنا"
></modus-wc-textarea>

<!-- Textarea with custom classes -->
<modus-wc-textarea
  aria-label="Styled textarea"
  custom-class="my-custom-class"
  daisy-class="modus-wc-textarea-bordered modus-wc-textarea-lg"
  placeholder="This textarea has custom styling"
></modus-wc-textarea>

<!-- Textarea with event listeners -->
<modus-wc-textarea
  id="event-textarea"
  aria-label="Textarea with events"
  placeholder="Type here to see events in console"
></modus-wc-textarea>

<script>
  const textarea = document.getElementById('event-textarea');
  textarea.addEventListener('blur', (event) =>
    console.log('Blur event:', event)
  );
  textarea.addEventListener('change', (event) =>
    console.log('Change event:', event)
  );
  textarea.addEventListener('focus', (event) =>
    console.log('Focus event:', event)
  );
</script>
```
