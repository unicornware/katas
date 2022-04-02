/**
 * @file Katas - removeChar
 * @module katas/removeChar
 */

/**
 * Removes the first and last characters of `str`.
 *
 * @example removeChar('eloquent') => 'loquen'
 * @example removeChar('person') => 'erso'
 *
 * @see https://codewars.com/kata/56bc28ad5bdaeb48760009b0
 *
 * @param {string} str - String to remove characters from
 * @return {string} `str` with first and last characters removed
 */
const removeChar = (str: string): string => str.slice(1, -1)

export default removeChar
