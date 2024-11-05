# Angular Integrations

Stencil v4.22

This documentation serves as a guide for setting up and integrating Stencil web components with Angular projects. For any updates or changes, please refer back to this document or the StencilJS [official documentation](https://stenciljs.com/docs/angular#creating-an-angular-component-library).

## How to Scaffold a Specific Version of Angular Integration

To scaffold a new Angular version integration (using version 18 as an example), follow these steps:

> [!NOTE]
> replace `@angular/cli@<version number>` with target version you're creating the integration for in the following steps. 

### Step 1: Create a New Angular Workspace

Run the following command to create a new Angular workspace without an application:

```bash
npx -p @angular/cli@18 ng new ng18 --no-create-application
```

### Step 2: Generate a New Library

From the angular workspace directory (`ng18/`) created in the previous step generate a new library for your Stencil web component integration:

```bash
npx -p @angular/cli@18 ng generate library @trimble-cms/modus-wc-ng
```

### Step 4: Update Peer Dependencies

Add `@trimble-cms/modus-wc` as a peer dependency in the `package.json` file of your library located at `ng18/projects/trimble-cms/modus-wc-ng/package.json`:

```json
{
  "peerDependencies": {
    "@trimble-cms/modus-wc": "^<latest-version>"
  }
}
```

### Step 5: Configure Stencil Output Target

In the root `stencil.config.ts` file, add the Angular output target to ensure proper integration with Angular:

> [!NOTE]
> The only thing that should change in the below paths is the version number corresponding to the Angular version you're targeting. 

```ts
angularOutputTarget({
    componentCorePackage: '@trimble-cms/modus-wc',
    outputType: 'component',
    directivesProxyFile:
        './integrations/angular/ng18/projects/trimble-cms/modus-wc-ng/src/lib/stencil-generated/components.ts',
    directivesArrayFile:
        './integrations/angular/ng18/projects/trimble-cms/modus-wc-ng/src/lib/stencil-generated/index.ts',
    valueAccessorConfigs: angularValueAccessorBindings,
})
```

### Step 6: Generate Angular Stencil Component Wrappers

Run the following command from the root directory to build the Stencil components and generate the Angular component wrappers:

```bash
npm run stencil:build
```

### Step 7: Create Angular Module

Create a new module at `projects/trimble-cms/modus-wc-ng/src/lib/modus-wc-ng.module.ts` to import and export the generated component wrappers:

```ts
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '@trimble-cms/modus-wc/loader';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [],
  exports: [...DIRECTIVES],
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: () => defineCustomElements,
        multi: true,
    }
  ]
})
export class ModusAngularComponentsModule {}
```

This module automatically defines/registers the custom elements during app initialization!

### Step 8: Update the Public API

Update the `public-api.ts` file to export the components in the main entry point of your library:


```ts
export * from './lib/modus-wc-ng.module';
export { DIRECTIVES } from './lib/stencil-generated';
export * from './lib/stencil-generated/components';
```

Any components that are included in the exports array should additionally be exported in your main entry point (either public-api.ts or index.ts). Skipping this step will lead to Angular Ivy errors when building for production.

### Step 9: Install Dependencies and Build

You may need to edit the build script in the angular workspace (`ng18/`) to specifically target the `projects/trimble-cms/modus-wc-ng` component library. 

For example:

```json
  "build": "ng run @trimble-cms/modus-wc-ng:build:production",
```

Now we can install dependencies and build a local distribution. From `ng18/` run:

```bash
npm install
npm run build
```

### Step 10: Package for Local Testing

You can package the angular component library for local testing by running the following command:

```bash
npm pack ./dist/trimble-cms/modus-wc-ng
```

