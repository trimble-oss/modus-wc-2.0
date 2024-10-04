import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'modus-wc',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: 'components/README.md' }],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
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
};
