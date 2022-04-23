/**
 * @file Unit Tests - countSmileys
 * @module katas/6kyu/tests/unit/countSmileys
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../count-smileys'

describe('unit:katas/6kyu/countSmileys', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[]] },
    { expected: 4, parameters: [[':D', ':~)', ';~D', ':)']] },
    { expected: 2, parameters: [[':)', ':(', ':D', ':O', ':;']] },
    { expected: 1, parameters: [[';]', ':[', ';*', ':$', ';-D']] },
    {
      expected: 2,
      parameters: [[':-)', ';~>', ':~>', ';o>', ';>', ':D', ';o(']]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
