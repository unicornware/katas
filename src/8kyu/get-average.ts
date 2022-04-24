/**
 * @file Katas - getAverage
 * @module katas/8kyu/getAverage
 * @see https://codewars.com/kata/563e320cee5dddcf77000158
 */

/**
 * Given an array of student grades, `marks`, the function returns the average
 * **rounded down to the nearest integer**.
 *
 * @example
 *  getAverage([2, 2, 2, 2]) // 2
 * @example
 *  getAverage([1, 2, 3, 4, 5]) // 3
 * @example
 *  getAverage([1, 1, 1, 1, 1, 1, 1, 2]) // 1
 *
 * @param {number[]} marks - Student grades
 * @return {number} Student average **rounded down to the nearest integer**
 */
const getAverage = (marks: number[]): number => {
  return marks.reduce((acc, curr) => acc + curr, 0) / marks.length | 0
}

export default getAverage
