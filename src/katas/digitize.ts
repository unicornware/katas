/**
 * @file Katas - digitize
 * @module katas/digitize
 * @see https://codewars.com/kata/5583090cbe83f4fd8c000051
 */

/**
 * Given a random non-negative number, `n`, the function returns an array with
 * the digits of `n` in reverse.
 *
 * @example
 *  digitize(0) // [0]
 * @example
 *  digitize(348597) // [7, 9, 5, 8, 4, 3]
 *
 * @param {number} n - Positive integer to reverse
 * @return {number[]} Digits of `n` in reversed
 */
const digitize = (n: number): number[] => {
  // If n is a single digit integer, return array containing only n
  if (n <= 9) return [n]

  /** @const {number[]} digits - Digits of {@link n} reversed */
  const digits: number[] = []

  // Iterate through digits starting from rightmost digit
  while (n > 0) digits.push(Math.floor(n % 10)) && (n = Math.floor(n / 10))

  return digits
}

export default digitize
