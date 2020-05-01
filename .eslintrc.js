module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      templateStrings: true,
    },
  },
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:react/recommended', 'plugin:lodash/canonical'],
  rules: {
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false, minKeys: 2 }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-uses-vars': 2,
    'max-len': ['error', { code: 120, tabWidth: 2 }],
  },
  plugins: ['react', 'react-native', 'sort-imports-es6-autofix', 'react-hooks', 'lodash'],
};
