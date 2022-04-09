/**
 * @file Katas - even_or_odd
 * @module katas/even_or_odd
 * @see https://codewars.com/kata/53da3dbb4a5168369a0000fe
 */

/**
 * Given an integer, `n`, the function returns `'Even'` if `n` is an even
 * number, and `'Odd'` if `n` is an odd number.
 *
 * @example even_or_odd(-4) // 'Even'
 * @example even_or_odd(-3) // 'Odd'
 * @example even_or_odd(0) // 'Even'
 * @example even_or_odd(1) // 'Odd'
 * @example even_or_odd(2) // 'Even'
 * @example even_or_odd(7) // 'Odd'
 *
 * @param {number} n - Integer to check
 * @return {string} `'Even'` if `n` is an even number, `'Odd`' otherwise
 */
const even_or_odd = (n: number): string => (n % 2 === 0 ? 'Even' : 'Odd')

export default even_or_odd
