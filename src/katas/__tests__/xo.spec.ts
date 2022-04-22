/**
 * @file Unit Tests - xo
 * @module katas/tests/unit/xo
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../xo'

describe('unit:katas/xo', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: ['Oo'] },
    { expected: true, parameters: ['ooxx'] },
    { expected: true, parameters: ['xxOo'] },
    { expected: false, parameters: ['xxxm'] },
    { expected: false, parameters: ['ooom'] },
    { expected: false, parameters: ['zzoo'] },
    { expected: true, parameters: ['ooxXm'] },
    { expected: false, parameters: ['xooxx'] },
    { expected: true, parameters: ['zpzpzpp'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
