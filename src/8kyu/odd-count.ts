/**
 * @file Katas - oddCount
 * @module katas/8kyu/oddCount
 * @see https://codewars.com/kata/59342039eb450e39970000a6
 */

/**
 * Given a number, `n`, the function the number of **positive odd** numbers less
 * than `n`.
 *
 * @example
 *  oddCount(7) // 3
 * @example
 *  oddCount(15) // 7
 * @example
 *  oddCount(5411811292227681) // 2705905646113840
 *
 * @param {number} n - Number to check
 * @return {number} Number of **positive odd** numbers less than `n`
 */
const oddCount = (n: number): number => Math.floor(n / 2)

export default oddCount
