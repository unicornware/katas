/**
 * @file Katas - divisibleByFive
 * @module katas/4kyu/divisibleByFive
 * @see https://codewars.com/kata/5647c3858d4acbbe550000ad
 */

/**
 * Tests if a binary number is divisible by a given number.
 *
 * @extends {RegExp}
 */
class BinaryDivisibility extends RegExp {
  /**
   * Instantiates a new `BinaryDivisibility` regular expression.
   *
   * @param {RegExp | string} [pattern='0'] - Divisor
   */
  constructor(pattern: RegExp | string = '0') {
    super(pattern instanceof RegExp ? pattern.source : pattern)
  }

  /**
   * Checks if `string`, a binary number, is divisible by `+this.source`.
   *
   * @public
   * @instance
   *
   * @param {string} string - Binary number to test
   * @return {boolean} `true` if `string` is divisible, `false` otherwise
   */
  test(string: string): boolean {
    return Number.parseInt(string, 2) % +this.source === 0
  }
}

/**
 * Checks if a binary number is divisible by `5`.
 *
 * @const {BinaryDivisibility} divisibleByFive
 */
const divisibleByFive = new BinaryDivisibility('5')

export default divisibleByFive
