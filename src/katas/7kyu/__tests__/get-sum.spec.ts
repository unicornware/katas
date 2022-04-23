/**
 * @file Unit Tests - getSum
 * @module katas/7kyu/tests/unit/getSum
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../get-sum'

describe('unit:katas/7kyu/getSum', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: -1, parameters: [-1, 0] },
    { expected: -1, parameters: [0, -1] },
    { expected: 1, parameters: [0, 1] },
    { expected: 1, parameters: [1, 0] },
    { expected: 1, parameters: [1, 1] },
    { expected: 2, parameters: [-1, 2] },
    { expected: 3, parameters: [1, 2] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
