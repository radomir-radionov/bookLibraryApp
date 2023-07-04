module.exports = {
  extends: [require.resolve('arui-presets-lint/eslint'), 'plugin:react/jsx-runtime'],
  parserOptions: {
    project: ['./tsconfig.eslint.json' /* './cypress/tsconfig.json' */],
  },
  overrides: [
    {
      files: ['config/**/*.ts', 'src/global-definitions.d.ts', 'src/libs.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    indent: 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^action' }],
    'no-nested-ternary': 'off',
    'no-unneeded-ternary': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'dirnames/match-kebab-case': 'off',
    'no-unsafe-optional-chaining': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'no-negated-condition': 'off',
    'no-plusplus': 'off',
    'arrow-body-style': 'off',
    'no-else-return': 'off',
    'no-return-assign': 'off',
    'no-self-assign': 'off',
    'consistent-return': 'off',
    'no-template-curly-in-string': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-fragments': ['off'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    complexity: 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },

  ignorePatterns: ['coverage', 'cypress.config.ts'],
};
