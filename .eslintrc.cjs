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
      files: ['src/katas/__tests__/mumble.spec.ts', 'src/katas/mumble.ts'],
      rules: {
        'spellcheck/spell-checker': 0
      }
    }
  ]
}

module.exports = config
