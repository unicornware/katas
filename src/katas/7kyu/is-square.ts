/**
 * @file Katas - isSquare
 * @module katas/7kyu/isSquare
 * @see https://codewars.com/kata/54c27a33fb7da0db0100040e
 */

/**
 * Given a number, `n`, the function checks if `n` is a [perfect square][1].
 *
 * [1]: https://en.wikipedia.org/wiki/Square_number
 *
 * @example
 *  isSquare(0) // true
 * @example
 *  isSquare(4) // true
 * @example
 *  isSquare(25) // true
 * @example
 *  isSquare(26) // true
 * @example
 *  isSquare(3) // false
 * @example
 *  isSquare(-1) // false
 *
 * @param {number} n - Number to check
 * @return {boolean} `true` if `s` is a perfect square, `false` otherwise
 */
const isSquare = (n: number): boolean => Number.isInteger(Math.sqrt(n))

export default isSquare
