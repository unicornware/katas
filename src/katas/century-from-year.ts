/**
 * @file Katas - centuryFromYear
 * @module katas/centuryFromYear
 * @see https://codewars.com/kata/5a3fe3dde1ce0e8ed6000097
 */

/**
 * Given `year`, the function returns what century the year is in.
 *
 * @example
 *  centuryFromYear(1601) // 17
 * @example
 *  centuryFromYear(1705) // 18
 * @example
 *  centuryFromYear(1900) // 19
 * @example
 *  centuryFromYear(2000) // 20
 *
 * @param {number} year - Year to check
 * @return {number} Century year is in
 */
const centuryFromYear = (year: number): number => Math.ceil(year / 100)

export default centuryFromYear
