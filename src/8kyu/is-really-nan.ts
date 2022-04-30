/**
 * @file Katas - isReallyNaN
 * @module katas/8kyu/isReallyNaN
 * @see https://codewars.com/kata/56c24c58e0c0f741d4001aef
 */

/**
 * Checks if `val` is `NaN`.
 *
 * @example
 *  isReallyNaN(13) // false
 * @example
 *  isReallyNaN(Number.NaN) // true
 *
 * @param {unknown} val - Value to check
 * @return {boolean} `true` if `val` is `NaN`, `false` otherwise
 */
const isReallyNaN = (val: unknown): boolean => Number.isNaN(val)

export default isReallyNaN
