/**
 * @file Unit Tests - tribonacci
 * @module katas/tests/unit/tribonacci
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../tribonacci'

describe('unit:katas/tribonacci', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [], parameters: [[300, 200, 100], 0] },
    { expected: [1], parameters: [[1, 1, 1], 1] },
    {
      expected: [1, 1, 1, 3, 5, 9, 17, 31, 57, 105],
      parameters: [[1, 1, 1], 10]
    },
    {
      expected: [0, 0, 1, 1, 2, 4, 7, 13, 24, 44],
      parameters: [[0, 0, 1], 10]
    },
    {
      expected: [0, 1, 1, 2, 4, 7, 13, 24, 44, 81],
      parameters: [[0, 1, 1], 10]
    },
    {
      expected: [1, 0, 0, 1, 1, 2, 4, 7, 13, 24],
      parameters: [[1, 0, 0], 10]
    },
    {
      expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      parameters: [[0, 0, 0], 10]
    },
    {
      expected: [1, 2, 3, 6, 11, 20, 37, 68, 125, 230],
      parameters: [[1, 2, 3], 10]
    },
    {
      expected: [3, 2, 1, 6, 9, 16, 31, 56, 103, 190],
      parameters: [[3, 2, 1], 10]
    },
    {
      expected: [
        0.5,
        0.5,
        0.5,
        1.5,
        2.5,
        4.5,
        8.5,
        15.5,
        28.5,
        52.5,
        96.5,
        177.5,
        326.5,
        600.5,
        1104.5,
        2031.5,
        3736.5,
        6872.5,
        12_640.5,
        23_249.5,
        42_762.5,
        78_652.5,
        144_664.5,
        266_079.5,
        489_396.5,
        900_140.5,
        1_655_616.5,
        3_045_153.5,
        5_600_910.5,
        10_301_680.5
      ],
      parameters: [[0.5, 0.5, 0.5], 30]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
