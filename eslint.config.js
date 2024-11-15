import pluginReact from 'eslint-plugin-react';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginImport from 'eslint-plugin-import';

export default [
  {
    languageOptions: {
      globals: {
        browser: 'readonly', // Equivalent to env: browser
        node: 'readonly', // Equivalent to env: node
        es2021: 'readonly', // Equivalent to es2021
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      'jsx-a11y': pluginJsxA11y,
      import: pluginImport,
    },
    rules: {
      // Rules from eslint:recommended
      'no-unused-vars': ['warn'],
      'no-console': 'warn',
      eqeqeq: 'warn',
      curly: 'warn',
      'no-eval': 'warn',
      'no-new-func': 'warn',
      'no-prototype-builtins': 'warn',

      // Rules from plugin:react/recommended
      'react/prop-types': 'off', // Disable prop-types as React now uses TypeScript
      'react/react-in-jsx-scope': 'off', // React 17+ no longer requires React in scope

      // Rules from plugin:jsx-a11y/recommended
      'jsx-a11y/anchor-is-valid': 'warn', // For accessibility: link validation
      'jsx-a11y/click-events-have-key-events': 'warn', // For accessibility: click events on elements

      // Import plugin rules
      'import/no-unresolved': 'warn',
      'import/named': 'warn',
      'import/default': 'warn',
      'import/namespace': 'warn',
      'import/no-absolute-path': 'warn',
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
];
