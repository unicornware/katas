/**
 * @file Unit Tests - greetJenny
 * @module katas/8kyu/tests/unit/greetJenny
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../greet-jenny'

describe('unit:katas/8kyu/greetJenny', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'Hello, Jim!', parameters: ['Jim'] },
    { expected: 'Hello, jim!', parameters: ['jim'] },
    { expected: 'Hello, Jane!', parameters: ['Jane'] },
    { expected: 'Hello, jane!', parameters: ['jane'] },
    { expected: 'Hello, Simon!', parameters: ['Simon'] },
    { expected: 'Hello, simon!', parameters: ['simon'] },
    { expected: 'Hello, my love!', parameters: ['Johnny'] },
    { expected: 'Hello, my love!', parameters: ['johnny'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
