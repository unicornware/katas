/**
 * @file Unit Tests - toCamelCase
 * @module katas/tests/unit/toCamelCase
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../to-camel-case'

describe('unit:katas/toCamelCase', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '', parameters: [''] },
    { expected: 'theStealthWarrior', parameters: ['the_stealth_warrior'] },
    { expected: 'TheStealthWarrior', parameters: ['The_Stealth_Warrior'] },
    { expected: 'theStealthWarrior', parameters: ['the-stealth-warrior'] },
    { expected: 'TheStealthWarrior', parameters: ['The-Stealth-Warrior'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
