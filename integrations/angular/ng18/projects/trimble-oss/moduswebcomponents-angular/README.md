# Modus Angular Components: modus-wc-angular

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

The components in this library were programmatically generated using the [StencilJS](https://stenciljs.com/) [Angular Framework Integration](https://stenciljs.com/docs/angular).

## Installation

- Install the Modus Angular Components Library and its Modus Web Component peer dependency
  `npm install @trimble-oss/moduswebcomponents @trimble-oss/moduswebcomponents-angular`

- Add the following snippet to your `main.ts` (or any main module)

  ```typescript
  import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';

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
  <modus-wc-button color="primary" [disabled]="false">Modus Button</modus-wc-button>
  ```

## Build

To rebuild the Modus Angular Components you need to perform the following steps:

- From the `./integrations/angular/ng18` project directory run
  `npm install` then `npm run build`

### Referencing a local build of modus-wc

#### Using npm link

- If you want to reference a local build of `modus-wc` you can run `npm link` from the `modus-wc-2.0` root
directory and then `npm link @trimble-oss/moduswebcomponents` from the `ng18` directory.

#### Using npm pack

- You can also run `npm pack` from the `modus-wc-2.0` root
directory and then `npm install path/to/modus-wc-tarball.tgz` from `ng18` directory.

## Debugging Locally

To use the Modus Angular components locally for debugging and other purposes:

- From `./ng18` project directory run `npm run build`
- From `./ng18` project directory run `npm pack ./dist/trimble-oss/moduswebcomponents-angular`
  - This will generate a tarball of the library: `trimble-cms-modus-wc-angular-0.0.1-ng18.tgz`

You can now test the build locally with any Angular project by running `npm install path/to/trimble-cms-modus-wc-angular-0.0.1-ng18.tgz`
and following the [installation steps](#installation).