/**
 * @file Katas - squareOrSquareRoot
 * @module katas/8kyu/squareOrSquareRoot
 * @see https://codewars.com/kata/57f6ad55cca6e045d2000627
 */

/**
 * Given an array of integers, `array`, the function returns an array with the
 * square or square root of each integer.
 *
 * @example
 *  squareOrSquareRoot([4, 3, 9, 7, 2, 1]) // [2, 9, 3, 49, 4, 1]
 *
 * @param {number[]} array - Integer array
 * @return {number[]} Array containing squares or square roots
 */
const squareOrSquareRoot = (array: number[]): number[] => {
  return array.map(int => {
    /** @const {number} square_root - Square root of {@link int} */
    const square_root: number = Math.sqrt(int)

    // If square root is an integer, return it. Otherwise, return square
    return Number.isInteger(square_root) ? square_root : int ** 2
  })
}

export default squareOrSquareRoot
