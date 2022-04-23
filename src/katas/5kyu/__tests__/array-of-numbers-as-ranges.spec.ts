/**
 * @file Unit Tests - arrayOfNumbersAsRanges
 * @module katas/5kyu/tests/unit/arrayOfNumbersAsRanges
 */

import type { TestcaseFn } from '@tests/interfaces'
import * as TestSubject from '../array-of-numbers-as-ranges'

describe('unit:katas/5kyu/arrayOfNumbersAsRanges', () => {
  describe('.toArray', () => {
    interface Case extends TestcaseFn<typeof TestSubject['toArray']> {}

    const cases: Case[] = [
      { expected: [], parameters: [''] },
      { expected: [2], parameters: ['2'] },
      { expected: [3, 4, 5, 6, 9], parameters: ['3_6,9'] },
      {
        expected: [0, 1, 2, 3, 4, 5, 13, 15, 16, 18, 19, 20],
        parameters: ['0_5,13,15_16,18_20']
      }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.toArray(...parameters)).to.deep.equal(expected)
      })
    })
  })

  describe('.toRange', () => {
    interface Case extends TestcaseFn<typeof TestSubject['toRange']> {}

    const cases: Case[] = [
      { expected: '', parameters: [[]] },
      { expected: '2', parameters: [[2]] },
      { expected: '0,13', parameters: [[0, 13]] },
      { expected: '-2_2', parameters: [[-2, -1, 0, 1, 2]] },
      { expected: '0,2_4', parameters: [[0, 2, 3, 4]] },
      { expected: '3_6,9', parameters: [[3, 4, 5, 6, 9]] },
      {
        expected: '0_5,13,15_16,18_20',
        parameters: [[0, 1, 2, 3, 4, 5, 13, 15, 16, 18, 19, 20]]
      }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.toRange(...parameters)).to.equal(expected)
      })
    })
  })
})
