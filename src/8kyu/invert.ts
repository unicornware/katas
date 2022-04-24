/**
 * @file Katas - invert
 * @module katas/8kyu/invert
 * @see https://codewars.com/kata/5899dc03bc95b1bf1b0000ad
 */

/**
 * Given a set of integers, `array`, the function returns a new array with the
 * additive inverse of each integer in `array`.
 *
 * @example
 *  invert([]) // []
 * @example
 *  invert([1, 2, 3, 4, 5]) // [-1, -2, -3, -4, -5]
 * @example
 *  invert([1, -2, 3, -4, 5]) // [-1, 2, -3, 4, -5]
 *
 * @param {number[]} array - Set of integers
 * @return {number[]} Additive inverse of each integer in `array`
 */
const invert = (array: number[]): number[] => array.map(n => -n)

export default invert
