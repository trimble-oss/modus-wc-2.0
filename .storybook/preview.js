import { defineCustomElements } from '../dist/esm/loader';

defineCustomElements();

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
