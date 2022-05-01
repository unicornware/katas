/**
 * @file Katas - arrayDiff
 * @module katas/6kyu/arrayDiff
 * @see https://codewars.com/kata/523f5d21c841566fde000009
 */

/**
 * Given two number arrays, `a` and `b`, the function returns a new array with
 * elements in `b` removed from `a`.
 *
 * @example
 *  arrayDiff([], [4, 5]) // []
 * @example
 *  arrayDiff([3, 4], [3]) // [4]
 * @example
 *  arrayDiff([1, 2, 3], [1, 2]) // [3]
 * @example
 *  arrayDiff([1, 8, 2], []) // [1, 8, 2]
 *
 * @param {number[]} a - First number array
 * @param {number[]} b - Second number array
 * @return {number[]} New array with elements in `b` removed from `a`
 */
const arrayDiff = (a: number[], b: number[]): number[] => {
  return a.reduce<number[]>((acc, curr) => {
    if (!b.includes(curr)) acc.push(curr)
    return acc
  }, [])
}

export default arrayDiff
