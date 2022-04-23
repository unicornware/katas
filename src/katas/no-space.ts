/**
 * @file Katas - noSpace
 * @module katas/noSpace
 * @see https://codewars.com/kata/57eae20f5500ad98e50002c5
 */

/**
 * Given a string, `x`, the function removes all spaces from the string.
 *
 * @example
 *  noSpace('') // ''
 * @example
 *  noSpace('8aaaaa dddd r     ') // '8aaaaaddddr'
 * @example
 *  noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') // '8j8mBliB8gimjB8B8jlB'
 *
 * @param {string} x - String to remove spaces from
 * @return {string} `x`
 */
const noSpace = (x: string): string => x.replace(/\s/g, '')

export default noSpace
