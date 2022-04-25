/**
 * @file Katas - isDivideBy
 * @module katas/8kyu/isDivideBy
 * @see https://codewars.com/kata/5a2b703dc5e2845c0900005a
 */

/**
 * Given three integer values, `number`, `a`, and `b`, the function checks if
 * `number` is divisible by **both `a` and `b`**.
 *
 * @example
 *  isDivideBy(4, 1, 4) // true
 * @example
 *  isDivideBy(45, 1, 6) // false
 * @example
 *  isDivideBy(45, 5, 15) // true
 * @example
 *  isDivideBy(15, -5, 3) // true
 * @example
 *  isDivideBy(-12, 2, -6) // true
 * @example
 *  isDivideBy(-12, 2, -5) // false
 *
 * @param {number} number - Dividend
 * @param {number} a - First divisor
 * @param {number} b - Second divisor
 * @return {boolean} `true` if `number` is divisible by **both `a` and `b`**
 */
const isDivideBy = (number: number, a: number, b: number): boolean => {
  return number % a === 0 && number % b === 0
}

export default isDivideBy
