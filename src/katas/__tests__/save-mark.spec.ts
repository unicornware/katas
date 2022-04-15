/**
 * @file Unit Tests - saveMark
 * @module katas/tests/unit/saveMark
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../save-mark'

describe('unit:katas/saveMark', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: '30KM',
      parameters: ['48.23° N, 89.10° E', '48.84° N, 89.40° E']
    },
    {
      expected: '620KM',
      parameters: ['11.28° S, 78.98° E', '21.28° S, 75.56° E']
    },
    {
      expected: '6160KM',
      parameters: ['52.10° S, 56.25° W', '52.10° N, 56.25° W']
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
