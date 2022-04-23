/**
 * @file Katas - disemvowel
 * @module katas/7kyu/disemvowel
 * @see https://codewars.com/kata/52fba66badcd10859f00097e
 */

/**
 * Online troll stopper.
 */
class Kata {
  /**
   * Removes all vowels from `str`.
   *
   * **Note**: This function does **not** consider `y` a vowel.
   *
   * @example
   *  Kata.disemvowel('This website is for losers!') // 'Ths wbst s fr lsrs!'
   *
   * @param {string} str - String to remove vowels from
   * @return {string} `str` without vowels
   */
  static disemvowel = (str: string): string => str.replace(/[aeiou]/gi, '')
}

export default Kata
