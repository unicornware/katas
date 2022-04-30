/**
 * @file Unit Tests - isReallyNaN
 * @module katas/8kyu/tests/unit/isReallyNaN
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-really-nan'

describe('unit:katas/8kyu/isReallyNaN', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [37] },
    { expected: false, parameters: ['37'] },
    { expected: false, parameters: [undefined] },
    { expected: true, parameters: [Number.NaN] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
