module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript'
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    project: './tsconfig.json'
  },
  plugins: ['align-import','@typescript-eslint'],
  rules: {
    'no-multi-spaces': [2, { exceptions: { ImportDeclaration: true } }],
    'align-import/align-import': 'error',
    'align-import/trim-import': 'error',
    '@typescript-eslint/no-extraneous-class':'off',
    '@typescript-eslint/no-misused-promises':'off',
    '@typescript-eslint/no-floating-promises':'off'
  }
}
