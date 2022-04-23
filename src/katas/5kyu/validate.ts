/**
 * @file Katas - validate
 * @module katas/5kyu/validate
 * @see https://codewars.com/kata/52e1476c8147a7547a000811
 */

/**
 * Given a string, `password`, the function validates the string against the
 * following criteria:
 *
 * - it is at least `6` characters long
 * - it contains at least one lowercase letter
 * - it contains at least one uppercase letter
 * - it contains at least one number
 *
 * @example
 *  validate('djI38D55') // true
 * @example
 *  validate('password') // false
 *
 * @param {string} password - Password to validate
 * @return {boolean} `true` if password is valid, `false` otherwise
 */
const validate = (password: string): boolean => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\dA-Za-z]{6,}$/.test(password)
}

export default validate
