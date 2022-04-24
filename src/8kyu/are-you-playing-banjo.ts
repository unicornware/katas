/**
 * @file Katas - areYouPlayingBanjo
 * @module katas/8kyu/areYouPlayingBanjo
 * @see https://codewars.com/kata/53af2b8861023f1d88000832
 */

/**
 * Given the name of a person, the function checks if the person is plays the
 * banjo.
 *
 * @example
 *  areYouPlayingBanjo('Ringo') // 'Ringo plays banjo'
 * @example
 *  areYouPlayingBanjo('bravo') // 'bravo does not play banjo'
 *
 * @param {string} name - Name of person to check
 * @return {string} Message indicating if `name` is plays the banjo
 */
const areYouPlayingBanjo = (name: string): string => {
  return `${name} ${/^r/i.test(name) ? 'plays' : 'does not play'} banjo`
}

export default areYouPlayingBanjo
