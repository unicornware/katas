/**
 * @file Unit Tests - buddy
 * @module katas/5kyu/tests/unit/buddy
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../buddy'

describe('unit:katas/5kyu/buddy', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [], parameters: [2382, 3679] },
    { expected: [48, 75], parameters: [10, 50] },
    { expected: [48, 75], parameters: [48, 50] },
    { expected: [48, 75], parameters: [1, 4103] },
    { expected: [1050, 1925], parameters: [654, 3567] },
    { expected: [62_744, 75_495], parameters: [57_345, 90_061] },
    { expected: [1_081_184, 1_331_967], parameters: [1_071_625, 1_103_735] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
