/**
 * @file Katas - isPalindrome
 * @module katas/8kyu/isPalindrome
 * @see https://codewars.com/kata/57a5015d72292ddeb8000b31
 */

/**
 * A palindrome is a word, phrase, number, or other sequence of characters which
 * reads the same backward or forward. Capitalization, punctuation, and word
 * dividers are taken into account.
 *
 * Given `s`, the function determines if the string is a palindrome.
 *
 * @example
 *  isPalindrome('anna') // true
 * @example
 *  isPalindrome('12321') // true
 * @example
 *  isPalindrome('walter') // false
 * @example
 *  isPalindrome('123456') // false
 *
 * @param {string} s - String to check
 * @return {boolean} `true` if `s` is a palindrome, `false` otherwise
 */
const isPalindrome = (s: string): boolean => s === [...s].reverse().join('')

export default isPalindrome
