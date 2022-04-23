/**
 * @file Katas - correct
 * @module katas/8kyu/correct
 * @see https://codewars.com/kata/577bd026df78c19bca0002c0
 */

/**
 * Character recognition software is widely used to digitise printed texts. Thus
 * the texts can be edited, searched and stored on a computer.
 *
 * When documents (especially pretty old ones written with a typewriter), are
 * digitised character recognition softwares often make mistakes:
 *
 * - `S` is misinterpreted as `5`
 * - `O` is misinterpreted as `0`
 * - `I` is misinterpreted as `1`
 *
 * Given a string, `s`, the function corrects errors in the digitised text.
 *
 * @example
 *  correct('PAR15') // 'PARIS'
 * @example
 *  correct('DUBL1N') // 'DUBLIN'
 * @example
 *  correct('L0ND0N') // 'LONDON'
 * @example
 *  correct('BUDAPE5T') // 'BUDAPEST'
 * @example
 *  correct('51NGAP0RE') // 'SINGAPORE'
 *
 * @param {string} s - Digitised text
 * @return {string} Corrected text
 */
const correct = (s: string): string => {
  return s.replace(/[015]/g, sub => ({ 0: 'O', 1: 'I', 5: 'S' }[sub]!))
}

export default correct
