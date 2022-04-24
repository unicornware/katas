/**
 * @file Katas - highAndLow
 * @module katas/7kyu/highAndLow
 * @see https://codewars.com/kata/554b4ac871d6813a03000035
 */

/** String containing a pair of numbers. */
type HighLow = `${number} ${number}`

/**
 * Finds the highest and lowest values in a space-delimited string.
 */
class Kata {
  /**
   * Given a string containing space-delimited values, `numbers`, the function
   * returns a string containing the highest and lowest values.
   *
   * @example
   *  Kata.highAndLow('1 2 3 4 5') // '5 1'
   * @example
   *  Kata.highAndLow('1 2 -3 4 5') // '5 -3'
   * @example
   *  Kata.highAndLow('1 9 3 4 -5') // '9 -5'
   *
   * @public
   * @static
   *
   * @param {string} numbers - Space-delimited values
   * @return {HighLow} String containing highest and lowest values in `numbers`
   */
  static highAndLow(numbers: string): HighLow {
    /** @const {number[]} values - Values in {@link numbers} */
    const values: number[] = numbers.split(' ').map(num => +num)

    /** @var {number | undefined} curr - Current value in {@link values} */
    let curr: number | undefined = values.shift()

    /** @var {number} highest - Highest number in {@link values} */
    let highest: number = curr!

    /** @var {number} lowest - Lowest number in {@link values} */
    let lowest: number = highest

    // Find highest and lowest values
    while (curr !== undefined) {
      // Reset highest value if larger value is found
      if (curr > highest) highest = curr

      // Reset lowest value if smaller value is found
      if (curr < lowest) lowest = curr

      // Move onto next value
      curr = values.shift()
    }

    return `${highest} ${lowest}`
  }
}

export default Kata
