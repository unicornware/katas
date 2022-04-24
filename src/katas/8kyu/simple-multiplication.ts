/**
 * @file Katas - simpleMultiplication
 * @module katas/8kyu/simpleMultiplication
 * @see https://codewars.com/kata/583710ccaa6717322c000105
 */

/**
 * Given a number, `n`, the function multiplies `num` by `8` if it is an even
 * number, or `9` if it is an odd number.
 *
 * @example
 *  simpleMultiplication(1) // 9
 * @example
 *  simpleMultiplication(2) // 16
 *
 * @param {number} n - First operand
 * @return {number} Product of multiplying `n` by `8` or `9`
 */
const simpleMultiplication = (n: number): number => n * (n % 2 === 0 ? 8 : 9)

export default simpleMultiplication
