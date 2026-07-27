# Angular Integrations

Stencil v4.22

This documentation serves as a guide for setting up and integrating Stencil web components with Angular projects.

For any updates or changes, please refer back to this document or the StencilJS [official documentation](https://stenciljs.com/docs/angular#creating-an-angular-component-library).

## How to Scaffold a Specific Version of Angular Integration

To scaffold a new Angular version integration (using version 20 as an example; use the same steps for ng21 with `20` replaced by `21`), follow these steps:

> [!NOTE]
> replace `@angular/cli@<version number>` with target version you're creating the integration for in the following steps.

### Step 1: Create a New Angular Workspace

Run the following command to create a new Angular workspace without an application:

```bash
npx -p @angular/cli@20 ng new ng20 --no-create-application
```

### Step 2: Generate a New Library

From the angular workspace directory (`ng20/`) created in the previous step generate a new library for your Stencil web component integration:

```bash
npx -p @angular/cli@20 ng generate library @trimble-oss/moduswebcomponents-angular
```

### Step 3: Delete generated files

You can delete the generated `*.component.ts`, `*.service.ts`, and `*.spec.ts` files.

### Step 4: Update `modus-wc-angular` version to reflect target Angular version

Append `ng<target-version>` to the version field in the `package.json`:

```json
{
  "name": "@trimble-oss/moduswebcomponents-angular",
  "version": "0.0.1-ng20",
  ...
}
```

### Step 5: Update Peer Dependencies

Add `@trimble-oss/moduswebcomponents` as a peer dependency in the `package.json` file of your library located at `ng20/projects/trimble-oss/moduswebcomponents-angular/package.json`:

```json
{
  "peerDependencies": {
    "@trimble-oss/moduswebcomponents": "^<latest-version>"
  }
}
```

### Step 6: Remove unnecessary testing packages (optional)

Angular CLI will install Jasmine as a dependency in the angular workspace. Stencil uses Jest as its testing solution, and Jasmine type definitions can collide when building Stencil from the repo root.

Only follow this step if you are **not** running Angular unit tests in the wrapper workspace (for example, you skip `ng test` and do not maintain `*.spec.ts` files under the library). The ng20/ng21 workspaces configure Jasmine in `tsconfig.spec.json` (`"types": ["jasmine"]`) and depend on `jasmine-core` and `karma-jasmine`, so removing those packages will break `ng test`.

If you do not need Angular unit tests in this workspace, remove the Jasmine packages:

```bash
# from `integrations/angular/ng20`
npm uninstall jasmine-core @types/jasmine
```

If you keep Jasmine for Angular tests, leave these packages installed and skip this step.

### Step 7: Configure Stencil Output Target

In the root `stencil.config.ts` file, add the Angular output target to ensure proper integration with Angular:

> [!NOTE]
> The only thing that should change in the below paths is the version number corresponding to the Angular version you're targeting.

```ts
angularOutputTarget({
  componentCorePackage: '@trimble-oss/moduswebcomponents',
  customElementsDir: 'components',
  outputType: 'standalone',
  directivesProxyFile:
    './integrations/angular/ng20/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/components.ts',
  valueAccessorConfigs: angularValueAccessorBindings,
});
```

### Step 8: Generate Angular Stencil Component Wrappers

Run the following command from the root directory to build the Stencil components and generate the Angular component wrappers:

```bash
npm run stencil:build
```

You should now be able to see the stencil generated angular component wrappers under `projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated`

### Step 9: Add the following npmrc to your angular workspace

Create this npmrc in the library project directory (`projects/trimble-oss/moduswebcomponents-angular/`) and be sure to add your trimble artifactory token to your system's environment variables (i.e., NPM_TOKEN)
Refer to [creating an artifactory token](https://jfrog.com/help/r/how-to-generate-an-access-token-video) for more information.

```bash
# .npmrc
@trimble-cms:registry=https://artifactory.trimble.tools/artifactory/api/npm/trimble-cms-trimble-accounting-npm/
//artifactory.trimble.tools/artifactory/api/npm/trimble-cms-trimble-accounting-npm/:_authToken=${NPM_TOKEN}

registry=https://registry.npmjs.org/
```

### Step 10: Create Angular Bootstrap Provider

Create a bootstrap provider at `projects/trimble-oss/moduswebcomponents-angular/src/lib/modus-wc-angular.bootstrap.ts` to configure Modus Web Components during app initialization:

```ts
import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

export function provideModusWebComponents(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideAppInitializer(() => {
      setAssetPath('/assets/');
    }),
  ]);
}
```

Consumers call `provideModusWebComponents()` in `app.config.ts` and import standalone proxy components (for example `ModusWcButton`) from the generated `stencil-generated/components` entry point.

### Step 11: Update the Public API

Update the `public-api.ts` file to export the components in the main entry point of your library:

```ts
export * from './lib/modus-wc-angular.bootstrap';
export * from './lib/stencil-generated/components';
export type * from '@trimble-oss/moduswebcomponents';
```

Any components that are included in the exports array should additionally be exported in your main entry point (either public-api.ts or index.ts). Skipping this step will lead to Angular Ivy errors when building for production.

### Step 12: Install Dependencies and Build

Ensure `modus-wc` dependency is installed in the `ng20/` angular workspace:

```bash
npm install @trimble-oss/moduswebcomponents
```

You will need to import our styling in your main JavaScript or CSS file:

```js
import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';
```

You may need to edit the build script in the angular workspace (`ng20/`) to specifically target the `projects/trimble-oss/moduswebcomponents-angular` component library.

For example:

```json
  "build": "ng run @trimble-oss/moduswebcomponents-angular:build:production",
```

Now we can install dependencies and build a local distribution. From `ng20/` run:

```bash
npm install
npm run build
```

### Step 13: Package for Local Testing

You can package the angular component library for local testing by running the following command:

```bash
npm pack ./dist/trimble-oss/moduswebcomponents-angular
```
