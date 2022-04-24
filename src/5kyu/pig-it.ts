/**
 * @file Katas - pigIt
 * @module katas/5kyu/pigIt
 * @see https://codewars.com/kata/520b9d2ad5c005041100000f
 */

/**
 * Given a string, `a`, the function returns the string's pig latin equivalent.
 *
 * @example
 *  pigIt('Hello world !') // 'elloHay orldway !'
 * @example
 *  pigIt('Pig latin is cool') // 'igPay atinlay siay oolcay'
 *
 * @param {string} a - String to convert
 * @return {string} `a` in pig latin
 */
const pigIt = (a: string): string => a.replace(/(\w)(\w+)*/g, '$2$1ay')

export default pigIt
