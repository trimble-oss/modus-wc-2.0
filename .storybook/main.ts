import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../src/stories/*.mdx',
    '../src/stories/frameworks/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  staticDirs: [
    { from: 'public', to: 'public' },
    { from: '../dist/modus-wc', to: 'modus-wc' },
    { from: '../dist/styles', to: 'dist/styles' },
    { from: '../dist/styles/assets/fonts', to: 'public/assets/fonts' },
    { from: '../src/theme-cli/web', to: 'theme-generator' },
    { from: '../dist/modus-wc-styles.css', to: 'modus-wc-styles.css' },
  ],
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite');

    // esbuild 0.28+ errors when downleveling destructuring for targets that
    // include Safari <14.1 (Storybook defaults include safari14). Tell esbuild
    // destructuring is supported — same workaround Vite/Angular adopted.
    // Cover both Vite build transpile and optimizeDeps (dev server).
    // See https://github.com/evanw/esbuild/issues/4436
    const esbuildCompat = {
      esbuild: {
        supported: {
          destructuring: true,
        },
      },
      optimizeDeps: {
        esbuildOptions: {
          supported: {
            destructuring: true,
          },
        },
      },
    };

    if (configType !== 'DEVELOPMENT') {
      return mergeConfig(config, esbuildCompat);
    }

    return mergeConfig(config, {
      ...esbuildCompat,
      build: {
        // this is set to 'dist' by default which causes hot-reloading for stencil components to break
        // see: https://vitejs.dev/config/server-options.html#server-watch
        // setting it to anything other than dist fixes the issue
        outDir: 'dist-vite',
      },
    });
  },
};
export default config;
