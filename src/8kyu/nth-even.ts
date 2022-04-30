/**
 * @file Katas - nthEven
 * @module katas/8kyu/nthEven
 * @see https://codewars.com/kata/5933a1f8552bc2750a0000ed
 */

/**
 * Given a `1-based` index, `n`, the function returns the `n`th even number.
 *
 * @example
 *  nthEven(1) // 0 (0)
 * @example
 *  nthEven(3) // 4 (0, 2, 4)
 *
 * @param {number} n - Index of even integer (`1-based`)
 * @return {number} `n`th even number
 */
const nthEven = (n: number): number => 2 * (n - 1)

export default nthEven
