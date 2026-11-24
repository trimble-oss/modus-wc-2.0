# modus-wc-accordion

## Accessibility

- The accordion groups `modus-wc-collapse` disclosures. It is not an [APG accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/): each section is a native `<details>` / `<summary>` toggle reached with Tab, and there is no arrow-key navigation between headers.
- The `<summary>` must stay the toggle. It is not exposed as a heading, and heading elements in the `header` slot are not reliably announced as headings by screen readers.
- Use the `header` slot for label content only, such as text or `modus-wc-typography`. Don't place buttons, links, or other interactive controls there.
- To provide a heading relationship, place a real heading before the accordion, outside the `<details>` elements, and reference it with `aria-labelledby` plus a `role` such as `group` on `modus-wc-accordion`. Each panel is already labelled by its summary through `aria-labelledby`. If every section must appear as a heading in the page outline, the native `<details>` pattern can't provide that.
- Give each collapse a unique `collapse-id`, or leave it unset to get a random id, so the `{id}-title` and `{id}-content` ids stay unique.

```html
<h2 id="faq-heading">Frequently asked questions</h2>
<modus-wc-accordion aria-labelledby="faq-heading" role="group">
  <modus-wc-collapse collapse-id="faq-shipping">
    <span slot="header">Shipping</span>
    <div slot="content">Orders ship within two business days.</div>
  </modus-wc-collapse>
  <modus-wc-collapse collapse-id="faq-returns">
    <span slot="header">Returns</span>
    <div slot="content">Items can be returned within 30 days.</div>
  </modus-wc-collapse>
</modus-wc-accordion>
```

<!-- Auto Generated Below -->


## Overview

A customizable accordion component used for showing and hiding related groups of content.

The component supports a `<slot>` called 'content' for injecting `<modus-wc-collapse>` elements. See [Collapse](/docs/components-collapse--docs) docs for additional info.

## Properties

| Property      | Attribute      | Description                                 | Type                  | Default |
| ------------- | -------------- | ------------------------------------------- | --------------------- | ------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div. | `string \| undefined` | `''`    |


## Events

| Event            | Description                                                                                | Type                                                 |
| ---------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `expandedChange` | When a collapse expanded state is changed, this event outputs the relevant index and state | `CustomEvent<{ expanded: boolean; index: number; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
