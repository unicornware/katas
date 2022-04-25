/**
 * @file Katas - stringToArray
 * @module katas/8kyu/stringToArray
 * @see https://codewars.com/kata/57e76bc428d6fbc2d500036d
 */

/**
 * Converts a string into an array.
 *
 * @example
 *  stringToArray('I love arrays') // ['I', 'love', 'arrays']
 *
 * @param {string} s - String to convert
 * @return {string[]} `s` as array
 */
const stringToArray = (s: string): string[] => s.split(' ')

export default stringToArray
