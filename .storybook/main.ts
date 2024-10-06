import type { StorybookConfig } from '@storybook/web-components-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          },
        ],
      });
    }

    if (config.resolve?.extensions) {
      config.resolve.extensions.push('.ts', '.tsx');
    }

    return config;
  },
};

export default config;
