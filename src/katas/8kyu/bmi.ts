/**
 * @file Katas - bmi
 * @module katas/8kyu/bmi
 * @see https://codewars.com/kata/57a429e253ba3381850000fb
 */

/**
 * Body mass index classifications.
 *
 * @enum {string}
 */
export enum BodyMassIndexType {
  NORMAL = 'Normal',
  OBESE = 'Obese',
  OVERWEIGHT = 'Overweight',
  UNDERWEIGHT = 'Underweight'
}

/**
 * Calculates body mass index.
 *
 * @example
 *  bmi(180, 1.95) // 'Obese'
 * @example
 *  bmi(100, 2.25) // 'Normal'
 * @example
 *  bmi(80, 4) // 'Underweight'
 * @example
 *  bmi(95, 1.9) // 'Overweight'
 *
 * @param {number} weight - Weight
 * @param {number} height - Height
 * @return {BodyMassIndexType} Body mass index type
 */
const bmi = (weight: number, height: number): BodyMassIndexType => {
  /** @const {number} result - Body mass index */
  const result: number = weight / height ** 2

  // If bmi <= 18.5, classify as underweight
  if (result <= 18.5) return BodyMassIndexType.UNDERWEIGHT

  // If bmi <= 25, classify as normal
  if (result <= 25) return BodyMassIndexType.NORMAL

  // If bmi <= 30, classify as overweight
  if (result <= 30) return BodyMassIndexType.OVERWEIGHT

  // Default to obese classification
  return BodyMassIndexType.OBESE
}

export default bmi
