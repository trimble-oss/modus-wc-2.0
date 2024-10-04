import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      // '@stencil-community': stencilPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...tsPlugin.configs['recommended-type-checked'].rules,
      '@typescript-eslint/no-unsafe-return': 'off',
      // '@stencil-community/required-prefix': ['error', ['modus-wc']],
      // '@stencil-community/strict-boolean-conditions': 'error',
      // '@stencil-community/ban-default-true': 'error',
      // '@stencil-community/element-type': 'error',
      // '@stencil-community/prefer-vdom-listener': 'error',
      // '@stencil-community/render-returns-host': 'error',
    },
  },
  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettier.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: [
      '**/*.config.ts',
      '.storybook/**',
      'dist/**',
      'loader/**',
      'node_modules/**',
      'www/**',
    ],
  },
];
