# modus-wc-rating



<!-- Auto Generated Below -->


## Overview

A rating component that allows users to rate items.

Adheres to WCAG 2.2 standards.

## Properties

| Property       | Attribute      | Description                                                       | Type                                       | Default                                                                                      |
| -------------- | -------------- | ----------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `allowHalf`    | `allow-half`   | Whether to allow half-ratings                                     | `boolean`                                  | `false`                                                                                      |
| `count`        | `count`        | The number of rating items to display                             | `number`                                   | `5`                                                                                          |
| `customClass`  | `custom-class` | Custom CSS class to apply                                         | `string \| undefined`                      | `''`                                                                                         |
| `getLabelText` | --             | Function to provide aria-label text for a given rating-item index | `(index: number) => string`                | `(index) =>     `${index} out of ${this.count} ${this.variant}${this.count > 1 ? 's' : ''}`` |
| `size`         | `size`         | The size of the rating component                                  | `"lg" \| "md" \| "sm" \| undefined`        | `'md'`                                                                                       |
| `value`        | `value`        | The current value of the rating                                   | `number`                                   | `0`                                                                                          |
| `variant`      | `variant`      | The variant of the rating scale                                   | `"heart" \| "smiley" \| "star" \| "thumb"` | `'star'`                                                                                     |


## Events

| Event          | Description                           | Type                                |
| -------------- | ------------------------------------- | ----------------------------------- |
| `ratingChange` | Event emitted when the rating changes | `CustomEvent<IModusWcRatingChange>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
