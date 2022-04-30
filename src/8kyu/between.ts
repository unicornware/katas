/**
 * @file Katas - between
 * @module katas/8kyu/between
 * @see https://codewars.com/kata/55ecd718f46fba02e5000029
 */

/**
 * Given two integers, `a` and `b`, where `a < b`, the functions returns a new
 * array containing all integers in the range `[a, b]`.
 *
 * @example
 *  between(1, 4) // [1, 2, 3, 4]
 * @example
 *  between(-2, 2) // [-2, -1, 0, 1, 2]
 *
 * @param {number} a - Lower bound of range (inclusive)
 * @param {number} b - Upper bound of range (inclusive)
 * @return {number[]} Array containing all integers in the range `[a, b]`
 */
const between = (a: number, b: number): number[] => {
  return Array.from<number, number>({ length: b - a + 1 }, () => a++)
}

export default between
