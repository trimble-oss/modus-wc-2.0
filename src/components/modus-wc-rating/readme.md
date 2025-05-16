# modus-wc-rating



<!-- Auto Generated Below -->


## Overview

A rating component that allows users to choose a rating from predefined options

## Properties

| Property           | Attribute             | Description                                                             | Type                                             | Default                                                 |
| ------------------ | --------------------- | ----------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------- |
| `allowHalf`        | `allow-half`          | Whether to allow half-ratings. Only applies to star and heart variants. | `boolean \| undefined`                           | `false`                                                 |
| `count`            | `count`               | The number of rating items to display                                   | `number`                                         | `5`                                                     |
| `customClass`      | `custom-class`        | Custom CSS class to apply                                               | `string \| undefined`                            | `''`                                                    |
| `disabled`         | `disabled`            | Whether the rating component is disabled                                | `boolean \| undefined`                           | `false`                                                 |
| `getAriaLabelText` | `get-aria-label-text` | Function to provide aria-label text for a given rating-item index       | `((ratingValue: number) => string) \| undefined` | `` (ratingValue) =>     `Rating item ${ratingValue}` `` |
| `size`             | `size`                | The size of the rating component                                        | `"lg" \| "md" \| "sm" \| undefined`              | `'md'`                                                  |
| `value`            | `value`               | The current value of the rating                                         | `number`                                         | `0`                                                     |
| `variant`          | `variant`             | The variant of the rating scale                                         | `"heart" \| "smiley" \| "star" \| "thumb"`       | `'smiley'`                                              |


## Events

| Event          | Description                           | Type                         |
| -------------- | ------------------------------------- | ---------------------------- |
| `ratingChange` | Event emitted when the rating changes | `CustomEvent<IRatingChange>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
