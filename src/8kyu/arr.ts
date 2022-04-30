/**
 * @file Katas - arr
 * @module katas/8kyu/arr
 * @see https://codewars.com/kata/571d42206414b103dc0006a1
 */

/**
 * Given a non-negative integer, `n`, the function returns an array containing
 * integers in the range `[0, n - 1]`.
 *
 * @example
 *  arr() // []
 * @example
 *  arr(5) // [0, 1, 2, 3, 4]
 *
 * @param {number} [n=0] - Non-negative integer
 * @return {number[]} Array containing integers in the range `[0, n - 1]`
 */
const arr = (n: number = 0): number[] => Array.from({ length: n }, (_, i) => i)

export default arr
