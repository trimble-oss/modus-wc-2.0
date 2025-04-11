# modus-wc-breadcrumbs



<!-- Auto Generated Below -->


## Overview

A customizable breadcrumbs component used to help users navigate through a website.

Adheres to WCAG 2.2 standards.

## Properties

| Property      | Attribute      | Description                                 | Type                                | Default |
| ------------- | -------------- | ------------------------------------------- | ----------------------------------- | ------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div. | `string \| undefined`               | `''`    |
| `items`       | `items`        | The breadcrumbs to render.                  | `IBreadcrumb[]`                     | `[]`    |
| `size`        | `size`         | The size of the breadcrumbs.                | `"lg" \| "md" \| "sm" \| undefined` | `'md'`  |


## Events

| Event             | Description                                 | Type                       |
| ----------------- | ------------------------------------------- | -------------------------- |
| `breadcrumbClick` | Event emitted when a breadcrumb is clicked. | `CustomEvent<IBreadcrumb>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
