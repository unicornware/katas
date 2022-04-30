/**
 * @file Unit Tests - testEven
 * @module katas/8kyu/tests/unit/testEven
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../test-even'

describe('unit:katas/8kyu/testEven', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [0] },
    { expected: true, parameters: [2] },
    { expected: true, parameters: [-4] },
    { expected: false, parameters: [1] },
    { expected: true, parameters: [20] },
    { expected: false, parameters: [15] },
    { expected: true, parameters: [220] },
    { expected: false, parameters: [0.5] },
    { expected: false, parameters: [222_222_221] },
    { expected: true, parameters: [500_000_000_000] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
