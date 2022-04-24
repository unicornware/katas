/**
 * @file Unit Tests - reverseSeq
 * @module katas/8kyu/tests/unit/reverseSeq
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../reverse-seq'

describe('unit:katas/8kyu/reverseSeq', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [1], parameters: [1] },
    { expected: [5, 4, 3, 2, 1], parameters: [5] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
