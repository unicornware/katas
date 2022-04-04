/**
 * @file Unit Tests - pigIt
 * @module katas/tests/unit/pigIt
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../pig-it'

describe('unit:katas/pigIt', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'elloHay orldway !', parameters: ['Hello world !'] },
    {
      expected: 'hisTay siay ymay tringsay',
      parameters: ['This is my string']
    },
    {
      expected: 'igPay atinlay siay oolcay',
      parameters: ['Pig latin is cool']
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
