/**
 * @file Katas - findOdd
 * @module katas/findOdd
 */

/**
 * Given an array of integers, `xs`, the function returns the integer that is
 * found an odd number of times.
 *
 * @see https://codewars.com/kata/54da5a58ea159efa38000836
 *
 * @example findOdd([0]) => 0
 * @example findOdd([1, 1, 2]) => 2
 * @example findOdd([0, 1, 0, 1, 0]) => 0
 * @example findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]) => 4
 *
 * @param {number[]} xs - Integer array
 * @return {number} Integer that occurs an odd number of times in `xs`
 */
const findOdd = (xs: number[]): number => {
  // If array only has one item, return first item
  if (xs.length === 1) return xs[0]!

  /** @const {Map<number, number>} occurrences - Occurrence map */
  const occurrences = new Map<number, number>()

  // Populate occurrence map
  for (const num of xs) occurrences.set(num, (occurrences.get(num) ?? 0) + 1)

  // Find and return map entry that has odd number of occurrences
  return [...occurrences.entries()].find(entry => entry[1]! % 2 !== 0)![0]
}

export default findOdd
