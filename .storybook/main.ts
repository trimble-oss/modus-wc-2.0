import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/stories/**/*.mdx',
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
  staticDirs: [{ from: 'public', to: 'public' }],
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      server: {
        hmr: {
          overlay: true,
        },
      },
    });
  },
};
export default config;
