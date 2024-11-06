# Modus Angular Components: modus-wc-ng

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

The components in this library were programmatically generated using the [StencilJS](https://stenciljs.com/) [Angular Framework Integration](https://stenciljs.com/docs/angular).

## Installation

- Install the Modus Angular Components Library and its Modus Web Component peer dependency
  `npm install @trimble-cms/modus-wc @trimble-cms/modus-wc-ng`

- Add the following snippet to your `main.ts` (or any main module)

  ```typescript
  import { defineCustomElements } from '@trimble-cms/modus-wc/loader';

  defineCustomElements();
  ```

- Add the following snippet to your `app.module.ts` (or any app module)

  ```typescript
  import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

  @NgModule({
    ...
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  ```

## Example Usage

- Use a modus button in your `app.component.html`

  ```html
  <modus-button color="primary" [disabled]="false">Modus Button</modus-button>
  ```

## Build

To rebuild the Modus Angular Components you need to perform the following steps:

- From the `./integrations/angular/ng18` project directory run
  `npm run build`
