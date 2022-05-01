/**
 * @file Unit Tests - hoopCount
 * @module katas/8kyu/tests/unit/hoopCount
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../hoop-count'

describe('unit:katas/8kyu/hoopCount', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'Keep at it until you get it', parameters: [6] },
    { expected: 'Great, now move on to tricks', parameters: [10] },
    { expected: 'Great, now move on to tricks', parameters: [22] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
