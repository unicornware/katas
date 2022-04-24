/**
 * @file Unit Tests - digitalRoot
 * @module katas/6kyu/tests/unit/digitalRoot
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../digital-root'

describe('unit:katas/6kyu/digitalRoot', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 3, parameters: [3] },
    { expected: 7, parameters: [16] },
    { expected: 6, parameters: [456] },
    { expected: 6, parameters: [942] },
    { expected: 6, parameters: [132_189] },
    { expected: 2, parameters: [493_193] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
