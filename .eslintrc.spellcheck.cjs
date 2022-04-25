/**
 * @file ESLint Configuration - Spellcheck
 * @see https://eslint.org/docs/user-guide/configuring
 * @see https://github.com/aotaduy/eslint-plugin-spellcheck
 */

const { Linter } = require('eslint')
const DEFAULTS = require('eslint-plugin-spellcheck/rules/defaultSettings')

/**
 * @type {Linter.Severity}
 * @const SEVERITY - `spellcheck/spell-checker` rule severity
 */
const SEVERITY = 2

/**
 * @type {string[]}
 * @const SKIP_IF_MATCH - Default set of regular expressions that will match js
 * node element values (comment, identifier, string, string template, etc) and
 * will not check the entire node content if matched
 */
const SKIP_IF_MATCH = [
  ...DEFAULTS.skipIfMatch,
  '[`].[`]\\w+',
  '([A-Za-z]+)?([\\d])([A-Za-z]+)?'
]

/**
 * @type {string[]}
 * @const SKIP_WORD_IF_MATCH - Default set of regular expressions that will
 * match every single word that is found in the nodes (comment, identifier,
 * string, string template, etc) and will not check the word if matched
 */
const SKIP_WORD_IF_MATCH = []

/**
 * @type {string[]}
 * @const SKIP_WORDS - Default set of words that will not be checked
 */
const SKIP_WORDS = [
  ...DEFAULTS.skipWords,
  'abc',
  'algs',
  'argv',
  'atoi',
  'bool',
  'booleanish',
  'builtins',
  'chai',
  'ci',
  'cjs',
  'codewars',
  'commitlint',
  'curr',
  'daniel',
  'dedupe',
  'deoxyribonucleic',
  'dgram',
  'dna',
  'dns',
  'dotenv',
  'dto',
  'dtos',
  'enum',
  'enums',
  'esm',
  'explicitly',
  'fibonacci',
  'filenames',
  'formatter',
  'fs',
  'globals',
  'greg',
  'handoff',
  'harris',
  'haversine',
  'ig',
  'impl',
  'instanceof',
  'isogram',
  'jaden',
  'jane',
  'javascript',
  'jim',
  'jsdoc',
  'jsonspec',
  'kata',
  'katas',
  'lamda',
  'latin',
  'loadenv',
  'matcher',
  'matchers',
  'mjs',
  'msg',
  'multiline',
  'namespace',
  'ncc',
  'num',
  'nums',
  'os',
  'perf',
  'pls',
  'pluto',
  'pnv',
  'postinstall',
  'prepack',
  'prog',
  'punycode',
  'querystring',
  'racecar',
  'radians',
  'readline',
  'readonly',
  'reformats',
  'ryan',
  'simon',
  'sinon',
  'str',
  'stringified',
  'strs',
  'testcase',
  'tgz',
  'tls',
  'tsc',
  'tsconfig',
  'tty',
  'txt',
  'typeof',
  'usr',
  'utf',
  'utf8',
  'vercel',
  'vm',
  'vscode',
  'webpack',
  'whitespace',
  'wip',
  'workspace',
  'workspaces',
  'wx',
  'yargs',
  'zlib'
]

/**
 * @type {object}
 * @const OPTIONS - `spellcheck/spell-checker` options
 */
const OPTIONS = {
  comments: true,
  identifiers: false,
  ignoreRequire: true,
  lang: 'en_US',
  minLength: 1,
  skipIfMatch: SKIP_IF_MATCH,
  skipWordIfMatch: SKIP_WORD_IF_MATCH,
  skipWords: SKIP_WORDS,
  strings: true,
  templates: false
}

/**
 * @type {Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  extends: [],
  globals: {},
  plugins: ['spellcheck'],
  rules: {
    'spellcheck/spell-checker': [SEVERITY, OPTIONS]
  },
  overrides: [
    {
      files: ['*'],
      rules: {
        'spellcheck/spell-checker': [
          SEVERITY,
          Object.assign({}, OPTIONS, {
            ...OPTIONS,
            skipWords: [
              ...SKIP_WORDS,
              'ann',
              'atinlay',
              'disemvowel',
              'dlrow',
              'ello',
              'erso',
              'fatcats',
              'favuzzi',
              'feenan',
              'feeney',
              'loquen',
              'lsrs',
              'kat',
              'ndrd',
              'olleh',
              'oolcay',
              'orldway',
              'ountr',
              'patrick',
              'reduc',
              'ringo',
              'rolf',
              'scks',
              'siay',
              'tay',
              'ths',
              'tribonacci',
              'tringsay',
              'tte',
              'tter',
              'wbst',
              'ymay'
            ]
          })
        ]
      }
    }
  ]
}

module.exports = config
