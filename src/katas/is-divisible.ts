/**
 * @file Katas - isDivisible
 * @module katas/isDivisible
 * @see https://codewars.com/kata/5545f109004975ea66000086
 */

/**
 * Given three integer values, `n`, `x`, and `y`, the function checks if `n` is
 * divisible by **both `x` and `y`**.
 *
 * @example
 *  isDivisible(3, 3, 4) // false
 * @example
 *  isDivisible(8, 3, 4) // false
 * @example
 *  isDivisible(12, 3, 4) // true
 * @example
 *  isDivisible(48, 3, 4) // true
 *
 * @param {number} n - Dividend
 * @param {number} x - First divisor
 * @param {number} y - Second divisor
 * @return {boolean} `true` if `n` is divisible by *both `x` and `y`
 */
const isDivisible = (n: number, x: number, y: number): boolean => {
  return n % x === 0 && n % y === 0
}

export default isDivisible
