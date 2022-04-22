/**
 * @file ESLint Configuration - Root
 * @see https://eslint.org/docs/user-guide/configuring
 */

const { Linter } = require('eslint')
const { overrides } = require('./.eslintrc.base.cjs')

/**
 * @type {Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  root: true,
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...overrides,
    {
      files: [
        'src/katas/__tests__/is-isogram.spec.ts',
        'src/katas/__tests__/mumble.spec.ts',
        'src/katas/__tests__/xo.spec.ts',
        'src/katas/is-isogram.ts',
        'src/katas/mumble.ts',
        'src/katas/xo.ts'
      ],
      rules: {
        'spellcheck/spell-checker': 0
      }
    },
    {
      files: [
        'src/katas/to-jaden-case.ts'
      ],
      rules: {
        '@typescript-eslint/triple-slash-reference': 0
      }
    }
  ]
}

module.exports = config
