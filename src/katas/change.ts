/**
 * @file Katas - change
 * @module katas/change
 * @see https://codewars.com/kata/59de1e2fe50813a046000124
 */

/**
 * Given a string containing information about a program, `s`, the function
 * reformats the input string.
 *
 * If the phone number found in `s` isn't in the format `+1-xxx-xxx-xxxx` (where
 * each `x` is a digit), or `version` isn't a non-integer float, the function
 * will return `'ERROR: VERSION or PHONE'`.
 *
 * @example
 *  import dedent from 'ts-dedent'
 *
 *  const s = dedent`
 *    Program title: Primes
 *    Author: Kern
 *    Corporation: Gold
 *    Phone: +1-503-555-0091
 *    Date: Tues April 9, 2005
 *    Version: 6.7
 *    Level: Alpha
 *  `
 *
 *  change(s, 'Ladder', '1.1') // 'Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1'
 *
 * @param {string} s - Program information
 * @param {string} prog - Program title
 * @param {string} version - Program version
 * @return {string} Formatted string
 */
const change = (s: string, prog: string, version: string): string => {
  /** @const {RegExp} p - Phone number regex */
  const p = /\+1(-\d{3}){2}-\d{4}$(\n)?/gm

  /** @const {RegExp} v - Version regex */
  const v = /\s\d+(\.)\d+$\n/gm

  // Return error string if phone number or version format is invalid
  if (!p.test(s) || !v.test(s)) return 'ERROR: VERSION or PHONE'

  // Change format of s
  return s
    .replace(/program title: .*\n/gim, `Program: ${prog} `)
    .replace(/Author: .*\n/gm, 'Author: g964 ')
    .replace(/Date: .*\n/gm, 'Date: 2019-01-01 ')
    .replace(p, '+1-503-555-0090 ')
    .replace(v, sub => ' ' + (sub.includes('2.0') ? '2.0' : version))
    .replace(/(Corporation|Level): .*(\n)?/gm, '')
}

export default change
