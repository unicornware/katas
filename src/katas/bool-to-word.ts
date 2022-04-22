/**
 * @file Katas - boolToWord
 * @module katas/boolToWord
 * @see https://codewars.com/kata/53369039d7ab3ac506000467
 */

/**
 * Given a boolean, `bool`, the function returns `'Yes'` if `bool` is `true`, or
 * `'No'` if `bool` is `false`.
 *
 * @example
 *  boolToWord(false) // 'No'
 * @example
 *  boolToWord(true) // 'Yes'
 *
 * @param {boolean} bool - Boolean to convert into word
 * @return {string} `'Yes'` if `bool` is `true`, `'No`' otherwise
 */
const boolToWord = (bool: boolean): string => bool ? 'Yes' : 'No'

export default boolToWord
