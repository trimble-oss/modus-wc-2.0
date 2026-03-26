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
    '@storybook/addon-interactions',
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
  ],
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite');

    if (configType !== 'DEVELOPMENT') {
      return config;
    }

    return mergeConfig(config, {
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
