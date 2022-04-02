/**
 * @file Katas - repeatStr
 * @module katas/repeatStr
 */

/**
 * Given a string, `s`, the function returns a string containing `str` repeated
 * `n` times.
 *
 * @see https://codewars.com/kata/57a0e5c372292dd76d000d7e
 *
 * @example repeatStr(6, 'I') => 'IIIIII'
 * @example repeatStr(5, 'Hello') => 'HelloHelloHelloHelloHello'
 *
 * @param {number} n - Number of times to repeat `s`
 * @param {string} s - String to repeat
 * @return {string} String containing `s` repeated `n` times
 */
const repeatStr = (n: number, s: string): string => s.repeat(n)

export default repeatStr
