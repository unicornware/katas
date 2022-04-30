/**
 * @file Unit Tests - shortLongShort
 * @module katas/8kyu/tests/unit/shortLongShort
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../short-long-short'

describe('unit:katas/8kyu/shortLongShort', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '1221', parameters: ['1', '22'] },
    { expected: '1451', parameters: ['45', '1'] },
    { expected: '1320013', parameters: ['13', '200'] },
    { expected: 'UFalseU', parameters: ['U', 'False'] },
    { expected: 'MeSoonMe', parameters: ['Soon', 'Me'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
