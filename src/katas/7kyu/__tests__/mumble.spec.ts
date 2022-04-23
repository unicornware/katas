/**
 * @file Unit Tests - mumble
 * @module katas/7kyu/tests/unit/mumble
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../mumble'

describe('unit:katas/7kyu/mumble', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'A-Bb-Ccc-Dddd', parameters: ['abcd'] },
    { expected: 'C-Ww-Aaa-Tttt', parameters: ['cwAt'] },
    { expected: 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy', parameters: ['RqaEzty'] },
    {
      expected:
        'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
      parameters: ['ZpglnRxqenU']
    },
    {
      expected:
        'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
      parameters: ['NyffsGeyylB']
    },
    {
      expected:
        'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu',
      parameters: ['MjtkuBovqrU']
    },
    {
      expected:
        'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm',
      parameters: ['EvidjUnokmM']
    },
    {
      expected:
        'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc',
      parameters: ['HbideVbxncC']
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
