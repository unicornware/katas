/**
 * @file Katas - quarterOf
 * @module katas/quarterOf
 * @see https://codewars.com/kata/5ce9c1000bab0b001134f5af
 */

/**
 * Given a month as an integer from `1` to `12`, the function returns the
 * quarter of the year the month belongs to.
 *
 * @example
 *  quarterOf(2) // 1
 * @example
 *  quarterOf(6) // 2
 * @example
 *  quarterOf(11) // 4
 *
 * @param {number} month - Month as integer
 * @return {number} Quarter of the year
 */
const quarterOf = (month: number): number => Math.ceil(month / 3)

export default quarterOf
