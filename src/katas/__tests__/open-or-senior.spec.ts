/**
 * @file Unit Tests - openOrSenior
 * @module katas/tests/unit/openOrSenior
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../open-or-senior'

describe('unit:katas/openOrSenior', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [], parameters: [[]] },
    {
      expected: ['Open', 'Senior', 'Open', 'Senior'],
      parameters: [
        [
          [45, 12],
          [55, 21],
          [19, -2],
          [104, 20]
        ]
      ]
    },
    {
      expected: ['Open', 'Open', 'Open', 'Open'],
      parameters: [
        [
          [3, 12],
          [55, 1],
          [91, -2],
          [53, 23]
        ]
      ]
    },
    {
      expected: ['Senior', 'Open', 'Open', 'Open'],
      parameters: [
        [
          [59, 12],
          [55, -1],
          [12, -2],
          [12, 12]
        ]
      ]
    },
    {
      expected: ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior'],
      parameters: [
        [
          [18, 20],
          [45, 2],
          [61, 12],
          [37, 6],
          [21, 21],
          [78, 9]
        ]
      ]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
