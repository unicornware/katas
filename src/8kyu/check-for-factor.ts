/**
 * @file Katas - checkForFactor
 * @module katas/8kyu/checkForFactor
 * @see https://codewars.com/kata/55cbc3586671f6aa070000fb
 */

/**
 * Checks if `f` is a factor of `b`.
 *
 * @example
 *  checkForFactor(10, 2) // true
 * @example
 *  checkForFactor(12453, 5) // false
 *
 * @param {number} b - Target product
 * @param {number} f - Possible factor
 * @return {boolean} `true` if `factor` is factor of `base`, `false` otherwise
 */
const checkForFactor = (b: number, f: number): boolean => b % f === 0

export default checkForFactor
