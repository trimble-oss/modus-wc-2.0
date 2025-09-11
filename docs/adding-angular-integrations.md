# Angular Integrations

Stencil v4.22

This documentation serves as a guide for setting up and integrating Stencil web components with Angular projects.

For any updates or changes, please refer back to this document or the StencilJS [official documentation](https://stenciljs.com/docs/angular#creating-an-angular-component-library).

## How to Scaffold a Specific Version of Angular Integration

To scaffold a new Angular version integration, follow these steps:

> [!NOTE]
> replace `<version-number>` with target version(e.g. `21`) you're creating the integration for in the following steps.
> replace `<latest-version>` with the latest modus web components version(e.g. `0.0.0-beta.12`)

### Step 1: Create a New Angular Workspace

Run the following command to create a new Angular workspace without an application:

```bash
npx -p @angular/cli@<version-number> ng new ng<version-number> --no-create-application
```

### Step 2: Generate a New Library

From the angular workspace directory (`ng<version-number>/`) created in the previous step generate a new library for your Stencil web component integration:

```bash
npx -p @angular/cli@<version-number> ng generate library @trimble-oss/moduswebcomponents-angular
```

### Step 3: Delete generated files

You can delete the generated `*.component.ts`, `*.service.ts`, and `*.spec.ts` files.

### Step 4: Update `modus-wc-angular` version to reflect target Angular version

Append `ng<version-number>` to the version field in the `package.json`:

```json
{
  "name": "@trimble-oss/moduswebcomponents-angular",
  "version": "0.0.1-ng<version-number>",
  ...
}
```

### Step 5: Update Peer Dependencies

Add `@trimble-oss/moduswebcomponents` as a peer dependency in the `package.json` file of your library located at `ng<version-number>/projects/trimble-oss/moduswebcomponents-angular/package.json`:

```json
{
  "peerDependencies": {
    "@trimble-oss/moduswebcomponents": "^<latest-version>"
  }
}
```

### Step 6: Remove unnecessary testing packages

Angular CLI will install Jasmine as a dependency in the angular workspace. However, Stencil uses Jest as it's testing solution,
so to avoid type definition collisions when building stencil remove `jasmine-core` and `@types/jasmine`.

```bash
# from `/integrations/angular/ng<version-number>`
npm uninstall jasmine-core @types/jasmine
```

### Step 7: Configure Stencil Output Target

In the root `stencil.config.ts` file, add the Angular output target to ensure proper integration with Angular:

> [!NOTE]
> The only thing that should change in the below paths is the version number corresponding to the Angular version you're targeting.

```ts
angularOutputTarget({
  componentCorePackage: '@trimble-oss/moduswebcomponents',
  outputType: 'component',
  directivesProxyFile:
    './integrations/angular/ng<version-number>/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/components.ts',
  directivesArrayFile:
    './integrations/angular/ng<version-number>/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/index.ts',
  valueAccessorConfigs: angularValueAccessorBindings,
}),
```

### Step 8: Generate Angular Stencil Component Wrappers

Run the following command from the root directory to build the Stencil components and generate the Angular component wrappers:

```bash
npm run build
```

You should now be able to see the stencil generated angular component wrappers under `projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated`

### Step 9: Add the following npmrc to your angular workspace

Create this npmrc in the angular workspace and be sure to add your trimble artifactory token to your system's environment variables (i.e., NPM_TOKEN)
Refer to [creating an artifactory token](https://jfrog.com/help/r/how-to-generate-an-access-token-video) for more information.

```bash
# .npmrc
@trimble-cms:registry=https://artifactory.trimble.tools/artifactory/api/npm/trimble-cms-trimble-accounting-npm/
//artifactory.trimble.tools/artifactory/api/npm/trimble-cms-trimble-accounting-npm/:_authToken=${NPM_TOKEN}

registry=https://registry.npmjs.org/
```

### Step 10: Create Angular Module

Create a new module at `projects/trimble-oss/moduswebcomponents-angular/src/lib/modus-wc-angular.module.ts` to import and export the generated component wrappers:

```ts
import { NgModule, provideAppInitializer } from '@angular/core';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  imports: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [provideAppInitializer(() => defineCustomElements())],
})
export class ModusAngularComponentsModule {}
```

This module automatically defines/registers the custom elements during app initialization!

### Step 11: Update the Public API

Update the `public-api.ts` file to export the components in the main entry point of your library:

```ts
export * from './lib/modus-wc-angular.module';
export { DIRECTIVES } from './lib/stencil-generated';
export * from './lib/stencil-generated/components';
```

Any components that are included in the exports array should additionally be exported in your main entry point (either public-api.ts or index.ts). Skipping this step will lead to Angular Ivy errors when building for production.

### Step 12: Install Dependencies and Build

Ensure `modus-wc` dependency is installed in the `ng<version-number>/` angular workspace:

```bash
npm install @trimble-oss/moduswebcomponents
```

You will need to import our styling in your main JavaScript or CSS file:

```js
import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';
```

You may need to edit the build script in the angular workspace (`ng<version-number>/`) to specifically target the `projects/trimble-oss/moduswebcomponents-angular` component library.

For example:

```json
  "build": "ng run @trimble-oss/moduswebcomponents-angular:build:production",
```

Now we can install dependencies and build a local distribution. From `ng<version-number>/` run:

```bash
npm install
npm run build
```

### Step 13: Package for Local Testing

You can package the angular component library for local testing by running the following command:

```bash
npm pack ./dist/trimble-oss/moduswebcomponents-angular
```

### Step 14: update github workflows

Add the new angular version to .github/workflows/build-angular.yaml

```yaml
  ...
jobs:
  build-angular:
    strategy:
      matrix:
        angular-version: [17, 18, 19, 20, <version-number>]
```

Add the new angular version to .github/workflows/publish-angular.yaml

```yaml
  ...
jobs:
  build-and-publish-angular:
    strategy:
      matrix:
        angular-version: [17, 18, 19, 20, <version-number>]
  ...
  release-angular:
    strategy:
      matrix:
        angular-version: [17, 18, 19, 20, <version-number>]
  ...
```
