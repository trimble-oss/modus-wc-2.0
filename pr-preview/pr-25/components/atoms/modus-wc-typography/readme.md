# modus-wc-typography



<!-- Auto Generated Below -->


## Overview

A customizable typography component used to render text with different sizes, variants, weights, and text casing.

Adheres to WCAG 2.2 standards.

## Usage

### Component-usage

```html
<!-- Basic Typography -->
<modus-wc-typography>Default paragraph text</modus-wc-typography>

<!-- Typography with Different Variants -->
<modus-wc-typography variant="h1">Heading 1</modus-wc-typography>
<modus-wc-typography variant="h2">Heading 2</modus-wc-typography>
<modus-wc-typography variant="h3">Heading 3</modus-wc-typography>
<modus-wc-typography variant="h4">Heading 4</modus-wc-typography>
<modus-wc-typography variant="h5">Heading 5</modus-wc-typography>
<modus-wc-typography variant="h6">Heading 6</modus-wc-typography>
<modus-wc-typography variant="body">Body text</modus-wc-typography>
<modus-wc-typography variant="p">Paragraph text</modus-wc-typography>

<!-- Typography with Different Body Sizes -->
<modus-wc-typography variant="body" body-size="standard"
  >Standard body text</modus-wc-typography
>
<modus-wc-typography variant="body" body-size="small"
  >Small body text</modus-wc-typography
>
<modus-wc-typography variant="body" body-size="mini"
  >Mini body text</modus-wc-typography
>

<!-- Typography with Different Weights -->
<modus-wc-typography weight="regular">Regular weight text</modus-wc-typography>
<modus-wc-typography weight="semibold"
  >Semibold weight text</modus-wc-typography
>
<modus-wc-typography weight="bold">Bold weight text</modus-wc-typography>

<!-- Typography with Different Text Cases -->
<modus-wc-typography text-case="sentence"
  >Sentence case text</modus-wc-typography
>
<modus-wc-typography text-case="title">Title Case Text</modus-wc-typography>
<modus-wc-typography text-case="uppercase">UPPERCASE TEXT</modus-wc-typography>

<!-- Typography with Custom Class -->
<modus-wc-typography custom-class="my-custom-class"
  >Custom class typography</modus-wc-typography
>

<!-- Typography with ARIA Label -->
<modus-wc-typography aria-label="Important information" variant="h2"
  >Important Heading</modus-wc-typography
>

<!-- Dark Mode Typography -->
<modus-wc-typography class="dark-mode">Dark mode text</modus-wc-typography>

<!-- High Contrast Mode Typography -->
<modus-wc-typography class="high-contrast-mode"
  >High contrast text</modus-wc-typography
>
```



## Properties

| Property                 | Attribute      | Description                                          | Type                                                            | Default      |
| ------------------------ | -------------- | ---------------------------------------------------- | --------------------------------------------------------------- | ------------ |
| `ariaLabel` _(required)_ | `aria-label`   | The aria-label for the typography component.         | `string`                                                        | `undefined`  |
| `bodySize`               | `body-size`    | The size option when variant "body" is selected.     | `"mini" \| "small" \| "standard" \| undefined`                  | `'standard'` |
| `customClass`            | `custom-class` | Custom CSS class to apply to the typography element. | `string`                                                        | `''`         |
| `textCase`               | `text-case`    | The text case.                                       | `"sentence" \| "title" \| "uppercase"`                          | `'sentence'` |
| `variant`                | `variant`      | The variant of the typography component.             | `"body" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p"` | `'p'`        |
| `weight`                 | `weight`       | The weight of the text.                              | `"bold" \| "regular" \| "semibold"`                             | `'regular'`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
