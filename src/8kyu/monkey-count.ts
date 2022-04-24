/**
 * @file Katas - monkeyCount
 * @module katas/8kyu/monkeyCount
 * @see https://codewars.com/kata/56f69d9f9400f508fb000ba7
 */

/**
 * You take your son to the forest to see the monkeys.
 *
 * You know that there are a certain number of monkeys, `n`, but your son is too
 * young to just appreciate the full number, so he has to start counting them
 * from 1. As a good parent, you will sit and count with him.
 *
 * Given the number of monkeys, `n`, the function returns an array of integers
 * from `1` to `n`.
 *
 * @example
 *  monkeyCount(1) // [1]
 * @example
 *  monkeyCount(10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *
 * @param {number} n - Integer greater than `0`
 * @return {number[]} Array of integers from `1` to `n`
 */
const monkeyCount = (n: number): number[] => {
  /** @const {number[]} monkeys - Integers from `1` to {@link n} */
  const monkeys: number[] = []

  // Build monkey count
  for (let int = 1; int <= n; int++) monkeys.push(int)

  return monkeys
}

export default monkeyCount
