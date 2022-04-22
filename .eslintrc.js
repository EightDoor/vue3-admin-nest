module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-await-in-loop': 'off',
    'import/extensions': 'off',
    'max-len': 'off',
  },
};
