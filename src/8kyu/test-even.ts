/**
 * @file Katas - testEven
 * @module katas/8kyu/testEven
 * @see https://codewars.com/kata/555a67db74814aa4ee0001b5
 */

/**
 * Given a number, `n`, the function checks if the number is even.
 *
 * @example
 *  testEven(2) // true
 * @example
 *  testEven(1.5) // false
 *
 * @param {number} n - Number to check
 * @return {boolean} `true` if `n` is even, `false` otherwise
 */
const testEven = (n: number): boolean => n % 2 === 0

export default testEven
