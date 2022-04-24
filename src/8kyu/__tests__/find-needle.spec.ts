/**
 * @file Unit Tests - findNeedle
 * @module katas/8kyu/tests/unit/findNeedle
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../find-needle'

describe('unit:katas/8kyu/findNeedle', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: 'found the needle at position 0',
      parameters: [
        [
          'needle',
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          8,
          7,
          5,
          4,
          3,
          4,
          5,
          6,
          67,
          5,
          5,
          3,
          3,
          4,
          2,
          34,
          234,
          23,
          4,
          234,
          324,
          324,
          1,
          2,
          3,
          4,
          5,
          5,
          6,
          5,
          4,
          32,
          3,
          45,
          54
        ]
      ]
    },
    {
      expected: 'found the needle at position 3',
      parameters: [
        [
          '3',
          '123124234',
          null,
          'needle',
          'world',
          'hay',
          2,
          '3',
          true,
          false
        ]
      ]
    },
    {
      expected: 'found the needle at position 5',
      parameters: [
        [
          '283497238987234',
          'a dog',
          'a cat',
          'some random junk',
          'a piece of hay',
          'needle',
          'something somebody lost a while ago'
        ]
      ]
    },
    {
      expected: 'found the needle at position 30',
      parameters: [
        [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          8,
          7,
          5,
          4,
          3,
          4,
          5,
          6,
          67,
          5,
          5,
          3,
          3,
          4,
          2,
          34,
          234,
          23,
          4,
          234,
          324,
          324,
          'needle',
          1,
          2,
          3,
          4,
          5,
          5,
          6,
          5,
          4,
          32,
          3,
          45,
          54
        ]
      ]
    },
    {
      expected: 'found the needle at position 43',
      parameters: [
        [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          8,
          7,
          5,
          4,
          3,
          4,
          5,
          6,
          67,
          5,
          5,
          3,
          3,
          4,
          2,
          34,
          234,
          23,
          4,
          234,
          324,
          324,
          1,
          2,
          3,
          4,
          5,
          5,
          6,
          5,
          4,
          32,
          3,
          45,
          54,
          'needle'
        ]
      ]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
