/**
 * @file Katas - paperwork
 * @module katas/8kyu/paperwork
 * @see https://codewars.com/kata/55f9b48403f6b87a7c0000bd
 */

/**
 * Your classmates asked you to copy some paperwork for them.
 *
 * Given `n` classmates and paperwork with `m` number of pages, the function
 * returns the number of blank pages needed.
 *
 * @example
 *  paperwork(0, 0) // 0
 * @example
 *  paperwork(5, 0) // 0
 * @example
 *  paperwork(5, 5) // 25
 * @example
 *  paperwork(-5, -5) // 0
 *
 * @param {number} n - Number of classmates
 * @param {number} m - Number of pages
 * @return {number} Number of blank pages needed
 */
const paperwork = (n: number, m: number): number => n <= 0 || m <= 0 ? 0 : n * m

export default paperwork
