/**
 * @file Katas - rps
 * @module katas/8kyu/rps
 * @see https://codewars.com/kata/5672a98bdbdd995fad00000f
 */

/**
 * Possible game moves.
 *
 * @enum {Lowercase<string>}
 */
export enum GameMove {
  PAPER = 'paper',
  ROCK = 'rock',
  SCISSORS = 'scissors'
}

/**
 * Messages indicating game winner.
 *
 * @enum {string}
 */
export enum GameOutput {
  DRAW = 'Draw!',
  PLAYER1 = 'Player 1 won!',
  PLAYER2 = 'Player 2 won!'
}

/**
 * Returns a message indicating the winner of "Rock Paper Scissors".
 *
 * @example
 *  rps(GameMove.PAPER, GameMove.PAPER) // 'Draw!'
 * @example
 *  rps(GameMove.SCISSORS, GameMove.PAPER) // 'Player 1 won!'
 * @example
 *  rps(GameMove.SCISSORS, GameMove.ROCK)  // 'Player 2 won!'
 *
 * @param {string} p1 - Player 1's move
 * @param {string} p2 - Player 2's move
 * @return {GameOutput} Game output
 */
const rps = (p1: string, p2: string): GameOutput => {
  switch (true) {
    case p1 === GameMove.PAPER && p2 === GameMove.ROCK:
    case p1 === GameMove.ROCK && p2 === GameMove.SCISSORS:
    case p1 === GameMove.SCISSORS && p2 === GameMove.PAPER:
      return GameOutput.PLAYER1
    case p2 === GameMove.PAPER && p1 === GameMove.ROCK:
    case p2 === GameMove.ROCK && p1 === GameMove.SCISSORS:
    case p2 === GameMove.SCISSORS && p1 === GameMove.PAPER:
      return GameOutput.PLAYER2
    default:
      return GameOutput.DRAW
  }
}

export default rps
