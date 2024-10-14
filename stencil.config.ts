import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'modus-wc',
  sourceMap: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    reactOutputTarget({
      outDir: './integrations/react/src',
      excludeComponents: ['stencil-docs'],
      customElementsDir: 'dist/components',
      stencilPackageName: '@trimble-cms/modus-wc',
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/global.scss'],
    }),
  ],
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
