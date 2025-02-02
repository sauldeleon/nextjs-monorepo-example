// See ../../.eslintrc.base.js
module.exports = {
  root: true,
  ignorePatterns: ['public/build', 'api/build', '.cache'],
  extends: [
    '../../.eslintrc.base.js',
    // Add specific rules for react
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  // By loading testing-library in plugins rather than extending the recommended
  // we keep the possibility to enable it on specific files only (*.test.ts...)
  plugins: ['testing-library'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-target-blank': 'off',
  },
  overrides: [
    {
      // For performance run jest/recommended on test files, not regular code
      files: ['**/*.test.{ts,tsx}'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['config/jest/test-utils.tsx'],
      rules: {
        'import/export': 'off',
      },
    },
  ],
};
