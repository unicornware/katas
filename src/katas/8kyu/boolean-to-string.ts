/**
 * @file Katas - booleanToString
 * @module katas/8kyu/booleanToString
 * @see https://codewars.com/kata/551b4501ac0447318f0009cd
 */

/** Stringified boolean value. */
type Booleanish = `${boolean}`

/**
 * Given a boolean, `b`, the function returns the boolean as a string.
 *
 * @example
 *  booleanToString(true) // 'true'
 * @example
 *  booleanToString(false) // 'false'
 *
 * @param {boolean} b - Boolean to stringify
 * @return {Booleanish} `b` stringified
 */
const booleanToString = (b: boolean): Booleanish => `${b}`

export default booleanToString
