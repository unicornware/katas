/**
 * @file Katas - pigIt
 * @module katas/pigIt
 */

/**
 * Given a string, `a`, the function returns the string's pig latin equivalent.
 *
 * @see https://codewars.com/kata/520b9d2ad5c005041100000f
 *
 * @example pigIt('Pig latin is cool') => 'igPay atinlay siay oolcay'
 * @example pigIt('Hello world !') => 'elloHay orldway !'
 *
 * @param {string} a - String to convert
 * @return {string} `a` in pig latin
 */
const pigIt = (a: string): string => {
  /** @const {string} delimiter - {@link a} separator */
  const delimiter: string = ' '

  // Convert each word in a to pig latin
  return a
    .split(delimiter)
    .map(w => (/\w+/.test(w) ? `${w.slice(1)}${w[0]}ay` : w))
    .join(delimiter)
}

export default pigIt
