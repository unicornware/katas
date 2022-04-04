/**
 * @file Katas - multiplesOfThreeOrFive
 * @module katas/multiplesOfThreeOrFive
 */

/**
 * Given an integer, `number`, the function returns the sum of all multiples of
 * `3` or `5` less than `number`.
 *
 * If `number` is negative, `0` will be returned.
 *
 * @see https://codewars.com/kata/514b92a657cdc65150000006
 *
 * @example solution(-1) => 0
 * @example solution(10) => 23
 *
 * @param {number} number - Multiples max
 * @return {number} Sum of all multiples of `3` or `5` less than `number`
 */
const solution = (number: number): number => {
  /** @const {number} sum - Sum of all multiples */
  let sum: number = 0

  // Find multiples
  for (let i = 0; i < number; i++) {
    /** @const {boolean} five - Multiple of five check */
    const five: boolean = i % 5 === 0

    /** @const {boolean} three - Multiple of three check */
    const three: boolean = i % 3 === 0

    // Add i to sum if i is multiple of three and/or five
    if ((five && three) || five || three) sum += i
  }

  return sum
}

export default solution
