/**
 * @file Katas - goals
 * @module katas/8kyu/goals
 * @see https://codewars.com/kata/55f73be6e12baaa5900000d4
 */

/**
 * [Messi][1] is a soccer player with goals in three leagues:
 *
 * 1. LaLiga
 * 2. Copa del Rey
 * 3. Champions
 *
 * Given the number of goals in each league, `liga`, `copa`, and `champions`,
 * the function returns the total number of goals Messi has scored.
 *
 * [1]: https://en.wikipedia.org/wiki/Lionel_Messi
 *
 * @example
 *  goals(5, 10, 2) // 17
 *
 * @param {number} liga - Number of goals scored in LaLiga league
 * @param {number} copa - Number of goals scored in Copa del Rey league
 * @param {number} champions - Number of goals scored in Champions league
 * @return {number} Total number of goals scored
 */
const goals = (liga: number, copa: number, champions: number): number => {
  return liga + copa + champions
}

export default goals
