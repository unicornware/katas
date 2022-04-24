/**
 * @file Unit Tests - monkeyCount
 * @module katas/8kyu/tests/unit/monkeyCount
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../monkey-count'

describe('unit:katas/8kyu/monkeyCount', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [1], parameters: [1] },
    { expected: [1, 2, 3], parameters: [3] },
    { expected: [1, 2, 3, 4, 5], parameters: [5] },
    { expected: [1, 2, 3, 4, 5, 6, 7, 8, 9], parameters: [9] },
    { expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], parameters: [10] },
    {
      expected: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      parameters: [20]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
