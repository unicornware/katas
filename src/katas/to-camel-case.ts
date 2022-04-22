/**
 * @file Katas - toCamelCase
 * @module katas/toCamelCase
 * @see https://codewars.com/kata/517abf86da9663f1d2000003
 */

/**
 * Converts a dash or underscore delimited word, `str`, into camel case.
 *
 * @example
 *  toCamelCase('the-stealth-warrior') // 'theStealthWarrior'
 * @example
 *  toCamelCase('The_Stealth_Warrior') // 'TheStealthWarrior'
 *
 * @param {string} str - Word to convert
 * @return {string} `str` in camel case
 */
const toCamelCase = (str: string): string => {
  return str.replace(/[_-][a-z]/gi, s => s[1]!.toUpperCase())
}

export default toCamelCase
