/**
 * @file Unit Tests - feast
 * @module katas/8kyu/tests/unit/feast
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../feast'

describe('unit:katas/8kyu/feast', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: ['brown bear', 'bear claw'] },
    { expected: true, parameters: ['chickadee', 'chocolate cake'] },
    { expected: true, parameters: ['great blue heron', 'garlic naan'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
