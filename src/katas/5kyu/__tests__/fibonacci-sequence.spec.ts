/**
 * @file Unit Tests - fibonacciSequence
 * @module katas/5kyu/tests/unit/fibonacciSequence
 */

import type { Testcase } from '@tests/interfaces'
import testSubject from '../fibonacci-sequence'

describe('unit:katas/5kyu/fibonacciSequence', () => {
  interface Case extends Testcase<number[]> {
    parameters: Parameters<typeof testSubject>
  }

  const cases: Case[] = [
    { expected: [1, 1, 2, 3, 5, 8], parameters: [5] },
    {
      expected: [
        1,
        1,
        2,
        3,
        5,
        8,
        13,
        21,
        34,
        55,
        89,
        144,
        233,
        377,
        610,
        987,
        1597,
        2584,
        4181,
        6765,
        10_946,
        17_711,
        28_657,
        46_368,
        75_025,
        121_393,
        196_418,
        317_811,
        514_229,
        832_040
      ],
      parameters: []
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)}`, () => {
      // Arrange
      const result = Array.from<number>({ length: expected.length }).fill(0)
      const stream = testSubject(...parameters)

      // Act + Expect
      expect(result.map(() => stream.next().value)).to.deep.equal(expected)
    })
  })
})
