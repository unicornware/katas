/**
 * @file Katas - narcissistic
 * @module katas/narcissistic
 * @see https://codewars.com/kata/5287e858c6b5a9678200083c
 */

/**
 * A [Narcissistic Number][1] is a positive number which is the sum of its own
 * digits, each raised to the power of the number of digits in a given bas
 *
 * Given a positive number, `value`, the function checks if the value is a
 * narcissistic number.
 *
 * **Note**: Values are restricted to base `10`.
 *
 * [1]: https://en.wikipedia.org/wiki/Narcissistic_number
 *
 * @example
 *  narcissistic(153) // true
 * @example
 *  narcissistic(1652) // false
 *
 * @param {number} value - Number to check
 * @return {boolean} `true` if `value` is narcissistic, `false` otherwise
 */
const narcissistic = (value: number): boolean => {
  // If value is a single digit, value is narcissistic
  if (value <= 9) return true

  /** @var {number} n - Copy of {@link value} */
  let n: number = value

  /** @var {number} sum - Total sum */
  let sum: number = 0

  // Iterate through digits starting from rightmost digit
  while (n > 0) {
    // Add rightmost digit raised to number of digits in value
    sum += Math.floor(n % 10) ** (Math.log(value) * Math.LOG10E + 1 | 0)

    // Move onto next digit
    n = Math.floor(n / 10)
  }

  // Check if value and sum are equal
  return value === sum
}

export default narcissistic
