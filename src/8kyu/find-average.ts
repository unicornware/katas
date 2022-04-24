/**
 * @file Katas - findAverage
 * @module katas/8kyu/findAverage
 * @see https://codewars.com/kata/57a2013acf1fa5bfc4000921
 */

/**
 * Given an array of numbers, `arr`, the function returns the average.
 *
 * @example
 *  findAverage([]) // 0
 * @example
 *  findAverage([1, 1, 1]) // 1
 *
 * @param {number[]} arr - Array to calculate average for
 * @return {number} Average
 */
const findAverage = (arr: number[]): number => {
  return arr.length > 0 ? arr.reduce((acc, n) => acc + n, 0) / arr.length : 0
}

export default findAverage
