/**
 * @file Katas - dnaStrand
 * @module katas/7kyu/dnaStrand
 * @see https://codewars.com/kata/554e4a2f232cdd87d9000038
 */

/**
 * Generates a string of complementary DNA.
 */
class Kata {
  /**
   * Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells.
   *
   * In DNA strings, symbols `'A'` and `'T'` are complements of each other, as
   * are `'C'` and `'G'`.
   *
   * Given a string containing DNA symbols, `dna`, the function returns the
   * complement of the given strand.
   *
   * @example
   *  Kata.dnaStrand('GTAT') // 'CATA'
   * @example
   *  Kata.dnaStrand('ATTGC') // 'TAACG'
   *
   * @public
   * @static
   *
   * @param {string} dna - DNA strand
   * @return {string} Complement of `dna`
   */
  static dnaStrand(dna: string): string {
    return dna.replace(/./g, sub => ({ A: 'T', C: 'G', G: 'C', T: 'A' })[sub]!)
  }
}

export default Kata
