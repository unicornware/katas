/**
 * @file Unit Tests - smash
 * @module katas/8kyu/tests/unit/smash
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../smash'

describe('unit:katas/8kyu/smash', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const describes: { cases: Case[]; title: string }[] = [
    {
      cases: [{ expected: '', parameters: [[]] }],
      title: 'should return empty string'
    },
    {
      cases: [{ expected: 'hello', parameters: [['hello']] }],
      title: 'should return one word'
    },
    {
      cases: [
        { expected: 'hello world', parameters: [['hello', 'world']] },
        {
          expected: 'hello amazing world',
          parameters: [['hello', 'amazing', 'world']]
        },
        {
          expected: 'this is a really long sentence',
          parameters: [['this', 'is', 'a', 'really', 'long', 'sentence']]
        }
      ],
      title: 'should return multiple space-delimited words'
    }
  ]

  describes.forEach(({ cases, title }) => {
    describe(title, () => {
      cases.forEach(({ expected, parameters }) => {
        it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
          expect(testSubject(...parameters)).to.equal(expected)
        })
      })
    })
  })
})
