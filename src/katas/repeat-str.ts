/**
 * @file Katas - repeatStr
 * @module katas/repeatStr
 * @see https://codewars.com/kata/57a0e5c372292dd76d000d7e
 */

/**
 * Given a string, `s`, the function returns a string containing `str` repeated
 * `n` times.
 *
 * @example repeatStr(6, 'I') // 'IIIIII'
 * @example repeatStr(5, 'Hello') // 'HelloHelloHelloHelloHello'
 *
 * @param {number} n - Number of times to repeat `s`
 * @param {string} s - String to repeat
 * @return {string} String containing `s` repeated `n` times
 */
const repeatStr = (n: number, s: string): string => s.repeat(n)

export default repeatStr
