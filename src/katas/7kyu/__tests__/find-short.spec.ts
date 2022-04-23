/**
 * @file Unit Tests - findShort
 * @module katas/7kyu/tests/unit/findShort
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../find-short'

describe('unit:katas/7kyu/findShort', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 2, parameters: ["Let's travel abroad shall we"] },
    { expected: 2, parameters: ['typescript is the best language'] },
    { expected: 2, parameters: ['Lets all go on holiday somewhere very cold'] },
    {
      expected: 3,
      parameters: ['lets talk about javascript the best language']
    },
    {
      expected: 1,
      parameters: ['i want to travel the world writing code one day']
    },
    {
      expected: 3,
      parameters: ['bitcoin take over the world maybe who knows perhaps']
    },
    {
      expected: 3,
      parameters: [
        'turns out random test cases are easier than writing out basic ones'
      ]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
