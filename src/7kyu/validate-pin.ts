/**
 * @file Katas - validatePin
 * @module katas/7kyu/validatePin
 * @see https://codewars.com/kata/55f8a9c06c018a0d6e000132
 */

/**
 * ATM PIN code validator.
 */
class Kata {
  /**
   * ATM machines allow `4` or `6` digit PIN codes.
   *
   * PIN codes cannot contain anything but exactly `4` or exactly `6` digits.
   *
   * Given a an ATM PIN code, `pin`, the function checks if the code is valid.
   *
   * @example
   *  Kata.validatePin('1234') // true
   * @example
   *  Kata.validatePin('a234') // false
   * @example
   *  Kata.validatePin('12345') // false
   * @example
   *  Kata.validatePin('024135') // true
   *
   * @public
   * @static
   *
   * @param {string} pin - Pint to validate
   * @return {boolean} `true` if `pin` is valid, `false` otherwise
   */
  static validatePin = (pin: string): boolean => /^(\d{4}|\d{6})$/.test(pin)
}

export default Kata
