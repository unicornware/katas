/**
 * @file Unit Tests - getResult
 * @module katas/8kyu/tests/unit/getResult
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject, {
  ErrorServerResult,
  SuccessServerResult
} from '../get-result'

describe('unit:katas/8kyu/getResult', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: 'Not found',
      parameters: [new ErrorServerResult(404, 'Not found')]
    },
    {
      expected: { message: 'Hello, world!' },
      parameters: [new SuccessServerResult(200, { message: 'Hello, world!' })]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
