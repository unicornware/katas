/**
 * @file Unit Tests - setAlarm
 * @module katas/8kyu/tests/unit/setAlarm
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../set-alarm'

describe('unit:katas/8kyu/setAlarm', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [true, false] },
    { expected: false, parameters: [true, true] },
    { expected: false, parameters: [false, true] },
    { expected: false, parameters: [false, false] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
