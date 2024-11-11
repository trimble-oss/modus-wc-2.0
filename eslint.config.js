import globals from 'globals';
import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
  },
  {
    files: ['**/*.{ts,tsx,spec.ts}'],
    plugins: {
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      ...prettier.rules,
      'prettier/prettier': 'error',
      ...tsPlugin.configs['recommended-type-checked'].rules,
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  {
    ignores: [
      '**/*.config.ts',
      '.wireit/**',
      '.storybook/**',
      'dist/**',
      'integrations/**',
      'loader/**',
      'node_modules/**',
      'storybook-static/**',
      'www/**',
    ],
  },
];
