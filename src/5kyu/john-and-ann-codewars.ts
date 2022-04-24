/**
 * @file Katas - johnAndAnnCodewars
 * @module katas/5kyu/johnAndAnnCodewars
 * @see https://codewars.com/kata/57591ef494aba64d14000526
 */

/**
 * John and his wife Ann have decided to go to Codewars.
 *
 * This class is dedicated to calculating the number of katas completed by Ann
 * and John during a certain number of days.
 */
class G964 {
  /**
   * Generates an array containing the number of katas completed by Ann in the
   * first `n` days.
   *
   * @example
   *  G964.ann(5) // [1, 1, 2, 2, 3]
   *
   * @public
   * @static
   *
   * @param {number} n - Number of days
   * @return {number[]} Katas completed in the first `n` days
   */
  static ann(n: number): number[] {
    return this.days(n).ann
  }

  /**
   * Returns an object with arrays containing the number of katas completed by
   * Ann and John in the first `n` days.
   *
   * @example
   *  G964.days(3) // { ann: [1, 1, 2], john: [0, 0, 1] }
   *
   * @private
   * @static
   *
   * @param {number} n - Number of days
   * @return {{ ann: number[]; john: number[] }} Katas completed
   */
  private static days(n: number): { ann: number[]; john: number[] } {
    /** @const {number[]} ann - Ann's totals in the first {@link n} days */
    const ann: number[] = [1]

    /** @const {number[]} john - John's totals in the first {@link n} days */
    const john: number[] = [0]

    // Calculate katas completed each day
    for (let i = 1; i < n; i++) {
      john[i] = i - ann[john[i - 1]!]!
      ann[i] = i - john[ann[i - 1]!]!
    }

    return { ann, john }
  }

  /**
   * Generates an array containing the number of katas completed by John in the
   * first `n` days.
   *
   * @example
   *  G964.john(11) // [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]
   *
   * @public
   * @static
   *
   * @param {number} n - Number of days
   * @return {number[]} Katas completed in the first `n` days
   */
  static john(n: number): number[] {
    return this.days(n).john
  }

  /**
   * Returns the total number of katas completed by Ann by day `n`.
   *
   * @example
   *  G964.sumAnn(5) // 9
   *
   * @public
   * @static
   *
   * @param {number} n - Number of days
   * @return {number} Total number of katas completed
   */
  static sumAnn(n: number): number {
    return this.ann(n).reduce((acc, total) => acc + total, 0)
  }

  /**
   * Returns the total number of katas completed by John by day `n`.
   *
   * @example
   *  G964.sumJohn(11) // 33
   *
   * @public
   * @static
   *
   * @param {number} n - Number of days
   * @return {number} Total number of katas completed
   */
  static sumJohn(n: number): number {
    return this.john(n).reduce((acc, total) => acc + total, 0)
  }
}

export default G964
