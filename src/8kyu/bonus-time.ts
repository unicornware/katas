/**
 * @file Katas - bonusTime
 * @module katas/8kyu/bonusTime
 * @see https://codewars.com/kata/56f6ad906b88de513f000d96
 */

/** Salary format. */
type Salary = `£${number}`

/**
 * It's bonus time in the big city!
 *
 * The fatcats are rubbing their paws in anticipation...but who is going to make
 * the most money?
 */
class Kata {
  /**
   * Given a fatcat salary, `s`, and a boolean indicating if they'll receive a
   * bonus, `b`, the function returns how much money the fatcat will receive.
   *
   * @example
   *  Kata.bonusTime(78, false) // '£78'
   * @example
   *  Kata.bonusTime(10000, true) // '£100000'
   *
   * @public
   * @static
   *
   * @param {number} s - Fatcat salary
   * @param {boolean} b - Boolean indicating if fatcat will receive a bonus
   * @return {Salary} How much money fatcat will receive
   */
  static bonusTime = (s: number, b: boolean): Salary => `£${s * (b ? 10 : 1)}`
}

export default Kata
