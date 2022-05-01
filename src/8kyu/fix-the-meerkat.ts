/**
 * @file Katas - fixTheMeerkat
 * @module katas/8kyu/fixTheMeerkat
 * @see https://codewars.com/kata/56f699cd9400f5b7d8000b55
 */

/**
 * You're at the zoo... all the meerkats look weird. Something has gone terribly
 * wrong - someone has gone and switched their heads and tails around!
 *
 * Given an array of meerkat parts, `arr`, the function rearranges the parts in
 * the correct order.
 *
 * @example
 *  fixTheMeerkat(['tail', 'body', 'head']) // ['head', 'body', 'tail']
 *
 * @param {[string, string, string]} arr - Meerkat parts
 * @return {string[]} Meerkat parts in correct order
 */
const fixTheMeerkat = (arr: [string, string, string]): string[] => arr.reverse()

export default fixTheMeerkat
