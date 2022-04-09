/**
 * @file Katas - squareDigits
 * @module katas/squareDigits
 * @see https://codewars.com/kata/546e2562b03326a88e000020
 */

/**
 * Squares every digit in `num`.
 *
 * @example squareDigits(9119) // 811181
 * @example squareDigits(1234) // 14916
 * @example squareDigits(0) // 0
 *
 * @param {number} num - Number to square each digit of
 * @return {number} The square of each digit in `num` concatenated
 */
const squareDigits = (num: number): number => {
  /** @const {number[]} sq - Digits in {@link num} squared (in reverse) */
  const sq: number[] = []

  // Iterate through digits starting from rightmost digit
  while (num > 0) {
    // Get square of rightmost digit
    sq.push(Math.floor(num % 10) ** 2)

    // Move onto next digit
    num = Math.floor(num / 10)
  }

  // If sq is empty => num === 0, return num
  // If sq is not empty => reverse + concat, then convert result into number
  return sq.length === 0 ? num : Number.parseInt(sq.reverse().join(''))
}

export default squareDigits
