/**
 * @file Katas - pigIt
 * @module katas/pigIt
 */

/**
 * Given a string, `a`, the function returns the string's pig latin equivalent.
 *
 * @see https://codewars.com/kata/520b9d2ad5c005041100000f
 *
 * @example pigIt('Pig latin is cool') // 'igPay atinlay siay oolcay'
 * @example pigIt('Hello world !') // 'elloHay orldway !'
 *
 * @param {string} a - String to convert
 * @return {string} `a` in pig latin
 */
const pigIt = (a: string): string => a.replace(/(\w)(\w+)*/g, '$2$1ay')

export default pigIt
