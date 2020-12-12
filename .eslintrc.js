module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [],
  extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'off',
  },
};
