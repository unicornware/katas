/**
 * @file Katas - finalGrade
 * @module katas/8kyu/finalGrade
 * @see https://codewars.com/kata/5ad0d8356165e63c140014d4
 */

/**
 * Possible final grades.
 *
 * @enum {number}
 */
export enum FinalGrade {
  HUNDRED = 100,
  NINETY = 90,
  SEVENTY_FIVE = 75,
  ZERO = 0
}

/**
 * Given a final exam grade, `exam`, and the total number of projects a student
 * has completed, `projects`, the function calculates a student's final grade.
 *
 * @example
 *  finalGrade(20, 2) // 0
 * @example
 *  finalGrade(55, 3) // 75
 * @example
 *  finalGrade(85, 5) // 90
 * @example
 *  finalGrade(100, 12) // 100
 *
 * @param {number} exam - Student exam grade
 * @param {number} projects - Number of projects student has completed
 * @return {FinalGrade} Student's final grade
 */
const finalGrade = (exam: number, projects: number): FinalGrade => {
  switch (true) {
    case exam > FinalGrade.NINETY || projects > 10:
      return FinalGrade.HUNDRED
    case exam > FinalGrade.SEVENTY_FIVE && projects >= 5:
      return FinalGrade.NINETY
    case exam > 50 && projects >= 2:
      return FinalGrade.SEVENTY_FIVE
    default:
      return FinalGrade.ZERO
  }
}

export default finalGrade
