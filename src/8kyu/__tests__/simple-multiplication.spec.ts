/**
 * @file Unit Tests - simpleMultiplication
 * @module katas/8kyu/tests/unit/simpleMultiplication
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../simple-multiplication'

describe('unit:katas/8kyu/simpleMultiplication', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 9, parameters: [1] },
    { expected: 16, parameters: [2] },
    { expected: 32, parameters: [4] },
    { expected: 45, parameters: [5] },
    { expected: 64, parameters: [8] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
