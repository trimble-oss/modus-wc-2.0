import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

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
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...prettier.rules,
      'prettier/prettier': 'error',
      ...tsPlugin.configs['recommended-type-checked'].rules,
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  {
    ignores: [
      '**/*.config.ts',
      '.storybook/**',
      'dist/**',
      'loader/**',
      'node_modules/**',
      'storybook-static/**',
      'www/**',
    ],
  },
];
