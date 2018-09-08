module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['import', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    quotes: ['error', 'single'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": false,
        "trailingComma": "all"
      }
    ],
  },
}
