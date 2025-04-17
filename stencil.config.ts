import type { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import angularValueAccessorBindings from './angular-value-accessor-bindings';
import tailwind, {
  setPluginConfigurationDefaults,
  tailwindGlobal,
} from 'stencil-tailwind-plugin';
import tailwindConfig from './tailwind.config';

const tailwindOpts = {
  debug: true,
  minify: false,
  stripComments: true,
  tailwindConf: tailwindConfig,
  tailwindCssPath: './src/styles/tailwind.css',
};

setPluginConfigurationDefaults(tailwindOpts);

export const config: Config = {
  namespace: 'modus-wc',
  buildDist: true,
  sourceMap: false,
  outputTargets: [
    {
      // Required for the Angular integration
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      // Required for the React integration
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    angularOutputTarget({
      componentCorePackage: '@trimble-oss/moduswebcomponents',
      outputType: 'component',
      directivesProxyFile:
        './integrations/angular/ng17/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile:
        './integrations/angular/ng17/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    angularOutputTarget({
      componentCorePackage: '@trimble-oss/moduswebcomponents',
      outputType: 'component',
      directivesProxyFile:
        './integrations/angular/ng18/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile:
        './integrations/angular/ng18/projects/trimble-oss/moduswebcomponents-angular/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      outDir: './integrations/react/stencil-generated',
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/global.scss', 'src/styles/output.css'],
    }),
    tailwindGlobal(),
    tailwind(),
  ],
  devServer: {
    reloadStrategy: 'hmr',
  },
  buildEs5: 'prod',
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
