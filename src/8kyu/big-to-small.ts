/**
 * @file Katas - bigToSmall
 * @module katas/8kyu/bigToSmall
 * @see https://codewars.com/kata/5731861d05d14d6f50000626
 */

/**
 * Given a two-dimensional number array, `arr`, the function returns a string
 * with the values of `arr` sorted in **descending** order.
 *
 * @example
 *  bigToSmall([[1, 1], [1], [1, 1]]) // '1>1>1>1>1'
 * @example
 *  bigToSmall([[1, 3, 5], [2, 4, 6]]) // '6>5>4>3>2>1'
 * @example
 *  bigToSmall([[1, 2], [3, 4], [5, 6]]) // '6>5>4>3>2>1'
 *
 * @param {number[][]} arr - Two-dimensional number array
 * @return {string} Values of `arr` sorted in **descending** order
 */
const bigToSmall = (arr: number[][]): string => {
  return arr.flat().sort((a, b) => b - a).join('>')
}

export default bigToSmall
