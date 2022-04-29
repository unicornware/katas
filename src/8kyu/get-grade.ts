/**
 * @file Katas - getGrade
 * @module katas/8kyu/getGrade
 * @see https://codewars.com/kata/55cbd4ba903825f7970000f5
 */

/**
 * Letter grades.
 *
 * @enum {Uppercase<string>}
 */
export enum LetterGrade {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F'
}

/**
 * Given three test scores, `a`, `b`, and `c`, the function returns the average
 * of the scores as a letter grade.
 *
 * @example
 *  getGrade(95, 90, 93) // 'A'
 * @example
 *  getGrade(82, 85, 87) // 'B'
 * @example
 *  getGrade(75, 70, 79) // 'C'
 * @example
 *  getGrade(58, 62, 70) // 'D'
 * @example
 *  getGrade(48, 55, 52) // 'F'
 *
 * @param {number} a - First test score
 * @param {number} b - Second test score
 * @param {number} c - Third test score
 * @return {LetterGrade} Test score average as letter grade
 */
const getGrade = (a: number, b: number, c: number): LetterGrade => {
  /** @const {number} average - Test score average */
  const average: number = (a + b + c) / 3

  // Return letter grade
  switch (true) {
    case 90 <= average && average <= 100:
      return LetterGrade.A
    case 80 <= average && average < 90:
      return LetterGrade.B
    case 70 <= average && average < 80:
      return LetterGrade.C
    case 60 <= average && average < 70:
      return LetterGrade.D
    default:
      return LetterGrade.F
  }
}

export default getGrade
