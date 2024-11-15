const pluginReact = require('eslint-plugin-react');
const pluginJsxA11y = require('eslint-plugin-jsx-a11y');
const pluginImport = require('eslint-plugin-import');
const tsParser = require('@typescript-eslint/parser');

// Flat config format
module.exports = {
  // Specify the parser and parser options
  parser: tsParser,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // Define the environments and globals
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  globals: {
    structuredClone: 'readonly',  // Declare structuredClone as a global variable
  },
  // Define the plugins used
  plugins: {
    react: pluginReact,
    'jsx-a11y': pluginJsxA11y,
    import: pluginImport,
  },
  // Define the rules
  rules: {
    // Rules from eslint:recommended
    'no-unused-vars': 'warn',
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
  // Settings for React version
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  // Define directories/files to ignore
  ignorePatterns: ['node_modules/', 'dist/', 'build/', '*.min.js', 'coverage/'],
};
