/**
 * @file Katas - mumble
 * @module katas/mumble
 * @see https://codewars.com/kata/5667e8f4e3f572a8f2000039
 */

/**
 * Given a string, `s`, the function "mumblfies" the string.
 *
 * @example
 *  mumble('abcd') // 'A-Bb-Ccc-Dddd'
 * @example
 *  mumble('cwAt') // 'C-Ww-Aaa-Tttt'
 * @example
 *  mumble('RqaEzty') // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
 *
 * @param {string} s - String to convert
 * @return {string} `s` mumblfied
 */
const mumble = (s: string): string => {
  return [...s].reduce((acc, curr, index) => {
    acc += `${curr.toUpperCase()}${curr.toLowerCase().repeat(index)}`
    return index !== s.length - 1 ? acc + '-' : acc
  }, '')
}

export default mumble
