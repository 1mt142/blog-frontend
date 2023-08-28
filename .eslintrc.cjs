/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/prop-types': ['off'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
		'indent': ['error', 2],
  },
}
