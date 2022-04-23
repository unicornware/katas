/**
 * @file Unit Tests - order
 * @module katas/6kyu/tests/unit/order
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../order'

describe('unit:katas/6kyu/order', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '', parameters: [''] },
    { expected: 'Thi1s is2 3a T4est', parameters: ['is2 Thi1s T4est 3a'] },
    {
      expected: 'Fo1r the2 g3ood 4of th5e pe6ople',
      parameters: ['4of Fo1r pe6ople g3ood th5e the2']
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
