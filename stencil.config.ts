import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import tailwind, {
  setPluginConfigurationDefaults,
  tailwindGlobal,
  tailwindHMR,
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
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    reactOutputTarget({
      outDir: './integrations/react/stencil-generated',
      excludeComponents: ['stencil-docs'],
      customElementsDir: 'dist/components',
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/global.scss'],
    }),
    tailwindGlobal(),
    tailwind(),
    tailwindHMR(),
  ],
  devServer: {
    reloadStrategy: 'pageReload',
  },
  buildEs5: 'prod',
  extras: {
    enableImportInjection: true,
  },
  taskQueue: 'async',
  testing: {
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
