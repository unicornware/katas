/**
 * @file Katas - disemvowel
 * @module katas/disemvowel
 */

/**
 * Removes all vowels from `str`.
 *
 * **Note**: This function does **not** consider `y` a vowel.
 *
 * @example
 *  disemvowel('This website is for losers LOL!') => 'Ths wbst s fr lsrs LL!'
 *
 * @see https://codewars.com/kata/52fba66badcd10859f00097e
 *
 * @param {string} str - String to remove vowels from
 * @return {string} `str` without vowels
 */
const disemvowel = (str: string): string => str.replace(/[AEIOUaeiou]/g, '')

export default disemvowel
