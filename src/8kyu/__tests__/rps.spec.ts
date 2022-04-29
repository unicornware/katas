/**
 * @file Unit Tests - rps
 * @module katas/8kyu/tests/unit/rps
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject, { GameMove, GameOutput } from '../rps'

describe('unit:katas/8kyu/rps', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const describes: { cases: Case[]; title: GameOutput }[] = [
    {
      cases: [
        {
          expected: GameOutput.DRAW,
          parameters: [GameMove.ROCK, GameMove.ROCK]
        },
        {
          expected: GameOutput.DRAW,
          parameters: [GameMove.PAPER, GameMove.PAPER]
        },
        {
          expected: GameOutput.DRAW,
          parameters: [GameMove.SCISSORS, GameMove.SCISSORS]
        }
      ],
      title: GameOutput.DRAW
    },
    {
      cases: [
        {
          expected: GameOutput.PLAYER1,
          parameters: [GameMove.PAPER, GameMove.ROCK]
        },
        {
          expected: GameOutput.PLAYER1,
          parameters: [GameMove.ROCK, GameMove.SCISSORS]
        },
        {
          expected: GameOutput.PLAYER1,
          parameters: [GameMove.SCISSORS, GameMove.PAPER]
        }
      ],
      title: GameOutput.PLAYER1
    },
    {
      cases: [
        {
          expected: GameOutput.PLAYER2,
          parameters: [GameMove.ROCK, GameMove.PAPER]
        },
        {
          expected: GameOutput.PLAYER2,
          parameters: [GameMove.SCISSORS, GameMove.ROCK]
        },
        {
          expected: GameOutput.PLAYER2,
          parameters: [GameMove.PAPER, GameMove.SCISSORS]
        }
      ],
      title: GameOutput.PLAYER2
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
