/**
 * @file Unit Tests - removeChar
 * @module katas/tests/unit/removeChar
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../remove-char'

describe('unit:katas/removeChar', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'loquen', parameters: ['eloquent'] },
    { expected: 'ountr', parameters: ['country'] },
    { expected: 'erso', parameters: ['person'] },
    { expected: 'lac', parameters: ['place'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
