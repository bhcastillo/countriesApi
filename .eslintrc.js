module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'standard-with-typescript',
  parser        : '@typescript-eslint/parser',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere : true,
  },
  plugins: ['import', '@typescript-eslint', 'unused-imports', 'align-import'],
  rules: {
    'no-unused-vars': 'off'
  }
}
