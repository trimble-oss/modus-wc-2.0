import type { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import angularValueAccessorBindings from './angular-value-accessor-bindings';
import tailwind, {
  setPluginConfigurationDefaults,
  // tailwindGlobal,
} from 'stencil-tailwind-plugin';
import tailwindConfig from './tailwind.config';

const tailwindOpts = {
  // enableDebug: true,
  minify: false,
  // optimise: true,
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
      externalRuntime: false,
      // > We recommend publishing components as unoptimized JavaScript modules and performing build-time optimizations at the application level.
      // > This gives build tools the best chance to deduplicate code, remove dead code, and so on.
      // minify: true,
      isPrimaryPackageOutputTarget: true,
      copy: [
        { src: './styles/output.css', dest: 'dist/modus-wc-styles.css' },
      ]
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
  /*
    TODO: TAILWIND ISN'T GETTING INJECTED ON STENCIL WATCH
    ALSO TAILWIND WATCH NO LONGER WORKS BECAUSE ITS NOT DIRECTLY BEING USED
    WE NEED TO HOOK IN SOMEHOW TO THE STENCIL WATCH COMMAND AND THE TAILWIND WATCH COMMAND
  */
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
