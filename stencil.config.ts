import type { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import angularValueAccessorBindings from './angular-value-accessor-bindings';
import tailwind, {
  setPluginConfigurationDefaults,
} from 'stencil-tailwind-plugin';
import tailwindConfig from './tailwind.config';
import { vueOutputTarget } from '@stencil/vue-output-target';

const tailwindOpts = {
  // enableDebug: true,
  minify: false,
  stripComments: true,
  tailwindConf: tailwindConfig,
  tailwindCssPath: './src/styles/tailwind.css',
};

setPluginConfigurationDefaults(tailwindOpts);

export const config: Config = {
  namespace: 'modus-wc',
  sourceMap: false,
  validatePrimaryPackageOutputTarget: true,
  outputTargets: [
    {
      // Required for the Angular integration
      // Could potentially switch https://stenciljs.com/docs/angular#do-i-have-to-use-the-dist-output-target
      type: 'dist',
      esmLoaderPath: '../dist/loader',
    },
    {
      // Required for the React integration
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
      // > We recommend publishing components as unoptimized JavaScript modules and performing build-time optimizations at the application level.
      // > This gives build tools the best chance to deduplicate code, remove dead code, and so on.
      // minify: true,
      isPrimaryPackageOutputTarget: true,
      copy: [
        // This is scoped to /src
        { src: './styles/output.css', dest: 'dist/modus-wc-styles.css' },
        { src: './styles/modus-icons.css', dest: 'dist/modus-icons.css' },
        { src: '../README.md', dest: 'dist/README.md' },
        { src: '../LICENSE', dest: 'dist/LICENSE' },
        { src: '../package.json', dest: 'dist/package.json' },
      ],
    },
    {
      type: 'docs-readme',
    },
    angularOutputTarget({
      componentCorePackage: '@trimble-oss/moduswebcomponents',
      customElementsDir: 'components',
      outputType: 'component',
      directivesProxyFile:
        './integrations/angular/ng17/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile:
        './integrations/angular/ng17/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    angularOutputTarget({
      componentCorePackage: '@trimble-oss/moduswebcomponents',
      customElementsDir: 'components',
      outputType: 'component',
      directivesProxyFile:
        './integrations/angular/ng18/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile:
        './integrations/angular/ng18/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    angularOutputTarget({
      componentCorePackage: '@trimble-oss/moduswebcomponents',
      customElementsDir: 'components',
      outputType: 'component',
      directivesProxyFile:
        './integrations/angular/ng19/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile:
        './integrations/angular/ng19/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      customElementsDir: 'components',
      outDir: './integrations/react/stencil-generated',
    }),
    vueOutputTarget({
      componentCorePackage: '@trimble-oss/moduswebcomponents',
      proxiesFile: './integrations/vue/stencil-generated/components.ts',
      customElementsDir: 'components',
    }),
  ],
  plugins: [
    sass({
      // **Absolutely do not** add any CSS code here, only include Sass variables/mixins/etc.
      // This gets injected into the inline styles for every component, for every generated target.
      injectGlobalPaths: ['src/styles/mixins.scss'],
    }),
    tailwind(),
  ],
  devServer: {
    reloadStrategy: 'hmr',
  },
  extras: {
    enableImportInjection: true,
  },
  taskQueue: 'async',
  testing: {
    browserHeadless: 'shell',
    modulePathIgnorePatterns: ['.wireit'],
    collectCoverageFrom: [
      'src/components/**/modus-wc-*.tsx',
      'src/utils/**/*.ts',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'text', 'html'],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  },
};
