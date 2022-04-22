/**
 * @file Katas - arrayOfNumbersAsRanges
 * @module katas/arrayOfNumbersAsRanges
 * @see https://codewars.com/kata/58ab002d68ee07c57b000118
 */

/**
 * Generates an array representation of `range`.
 *
 * @example
 *  toArray('') // []
 * @example
 *  toArray('2') // [2]
 * @example
 *  toArray('3_6,9') // [3, 4, 5, 6, 9]
 *
 * @param {string} range - Range string
 * @return {number[]} Array representation of `range`
 */
const toArray = (range: string): number[] => {
  // If range is an empty string, return empty array
  if (range.length === 0) return []

  // If range contains all numbers, return array with range
  if (/^\d*$/.test(range)) return [+range]

  /** @const {number[]} arr - Array representation of {@link range} */
  const arr: number[] = []

  // Get array elements
  for (const r of range.split(',')) {
    // sub-range has lower AND upper bound => add values to array representation
    if (/\d+_\d+/.test(r)) {
      const [start, end] = r.split('_')

      for (let i = +start!; i <= +end!; i++) arr.push(i)
      continue
    }

    // sub-range is a numeric
    arr.push(+r)
  }

  return arr
}

/**
 * Generates a range string representation of `arr`.
 *
 * @example
 *  toRange([]) // ''
 * @example
 *  toRange([2]) // '2'
 * @example
 *  toRange([3, 4, 5, 6, 9]) // '3_6,9'
 *
 * @param {number[]} arr - Number array
 * @return {string} Range string representation of `arr`
 */
const toRange = (arr: number[]): string => {
  // If array is empty, return empty string
  if (arr.length === 0) return ''

  // If array has one element, return a numeric
  if (arr.length === 1) return `${arr[0]}`

  // Sort array in ascending order and remove duplicate values
  arr = [...new Set(arr.sort((a, b) => a - b))]

  /** @const {string[]} ranges - Ranges found in {@link arr} */
  const ranges: string[] = []

  /** @var {number} j - Lower bound of current range in {@link arr} */
  let j: number

  /** @var {number} k - Upper bound of current range in {@link arr} */
  let k: number

  /** Get ranges @see https://stackoverflow.com/a/2270987/13150444 */
  for (let i = 0; i < arr.length; i++) {
    // Set range bounds
    j = arr[i]!
    k = j

    // If elements are sequential, extend current range
    while (arr[i + 1]! - arr[i]! === 1) {
      k = arr[i + 1]!
      i++
    }

    // Add range
    ranges.push(j === k ? `${j}` : `${j}_${k}`)
  }

  return ranges.join(',')
}

export { toArray, toRange }
