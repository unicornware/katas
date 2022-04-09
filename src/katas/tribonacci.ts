/**
 * @file Katas - tribonacci
 * @module katas/tribonacci
 * @see https://codewars.com/kata/556deca17c58da83c00002db
 */

/**
 * Given a starting sequence, `[a, b, c]`, the function returns an array with
 * the first `n` elements of the sequence.
 *
 * @example tribonacci([1, 1, 1], 10) // [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
 * @example tribonacci([0, 0, 1], 10) // [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
 *
 * @param {[number, number, number]} args - Starting sequence
 * @param {number} n - Total number of elements in sequence
 * @return {number[]} First `n` elements of sequence
 */
const tribonacci = (
  [a, b, c]: [number, number, number],
  n: number
): number[] => {
  // Base case: If n is less than or equal to zero, return empty array
  if (n <= 0) return []

  /** @const {number} sum - Sum of {@link a}, {@link b}, and {@link c} */
  const sum: number = a + b + c

  // Generate and return sequence
  return [a, ...tribonacci([b, c, sum], n - 1)]
}

export default tribonacci
