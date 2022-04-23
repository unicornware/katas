/**
 * @file Unit Tests - longest
 * @module katas/7kyu/tests/unit/longest
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../longest'

describe('unit:katas/7kyu/longest', () => {
  describe('.longest', () => {
    interface Case extends TestcaseFn<typeof TestSubject['longest']> {}

    const cases: Case[] = [
      { expected: 'aehrsty', parameters: ['aretheyhere', 'yestheyarehere'] },
      {
        expected: 'abcdefklmopqwxy',
        parameters: ['xyaabbbccccdefww', 'xxxxyyyyabklmopq']
      },
      {
        expected: 'adefghklmnorstu',
        parameters: ['lordsofthefallen', 'gamekult']
      },
      {
        expected: 'abcdefghilnoprstu',
        parameters: ['loopingisfunbutdangerous', 'lessdangerousthancoding']
      },
      {
        expected: 'acefghilmnoprstuy',
        parameters: ['inmanylanguages', 'theresapairoffunctions']
      },
      {
        expected: 'abcdefghijklmnopqrstuvwxyz',
        parameters: ['abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz']
      }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.longest(...parameters)).to.equal(expected)
      })
    })
  })
})
