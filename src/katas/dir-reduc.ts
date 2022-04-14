/**
 * @file Katas - dirReduc
 * @module katas/dirReduc
 * @see https://codewars.com/kata/550f22f4d758534c1100025a
 */

/**
 * A man is given directions to go from one point to another.
 *
 * Directions include `'NORTH'`, `'SOUTH'`, `'WEST'`, and `'EAST'`.
 *
 * Going to one direction and coming back the opposite direction _right away_ is
 * a needless effort. Given a set of directions, the functions returns an array
 * with all extraneous directions removed.
 *
 * @example dirReduc(['NORTH', 'SOUTH', 'WEST']) // ['WEST']
 * @example dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST']) // []
 *
 * @param {string[]} arr - Directions
 * @return {string[]} `arr` with extraneous directions removed
 */
const dirReduc = (arr: string[]): string[] => {
  /** @var {number} i - Index of current direction in {@link arr} */
  let i: number = 0

  // Reduce directions
  while (i < arr.length) {
    /** @const {string} d1 - Current direction in {@link arr} */
    const curr: string = arr[i]!

    /** @const {string | undefined} d2 - Next direction in {@link arr} */
    const next: string | undefined = arr[i + 1]

    // Opposite directions are the same length (but not the same string)
    if (curr.length === next?.length && curr !== next) {
      // Remove directions from arr
      arr.splice(i, 2)

      // Push back current index
      if (i !== 0) i--

      continue
    }

    // Move on to next pair of directions
    i++
  }

  return arr
}

export default dirReduc
