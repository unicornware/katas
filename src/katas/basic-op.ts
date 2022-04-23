/**
 * @file Katas - basicOp
 * @module katas/basicOp
 * @see https://codewars.com/kata/57356c55867b9b7a60000bd7
 */

/**
 * Mathematical operators.
 *
 * @enum {string}
 */
export enum Op {
  ADDITION = '+',
  DIVISION = '/',
  MULTIPLICATION = '*',
  SUBTRACTION = '-'
}

/**
 * Performs the following mathematical operations:
 *
 * 1. addition (`+`)
 * 2. division (`/`)
 * 3. multiplication (`*`)
 * 4. subtraction (`-`)
 *
 * @see {@link Op}
 *
 * @example
 *  basicOp(Op.DIVISION, 49, 7) // 7
 * @example
 *  basicOp(Op.ADDITION, 4, 7) // 11
 * @example
 *  basicOp(Op.SUBTRACTION, 15, 18) // -3
 * @example
 *  basicOp(Op.MULTIPLICATION, 5, 5) // 25
 * @example
 *  basicOp('**', 1, 1) // new Error('Invalid operator: "**"')
 *
 * @param {string} operation - Mathematical operator
 * @param {number} value1 - First operand
 * @param {number} value2 - Second operand
 * @return {number} Operation result
 * @throws {Error} If `operation` is invalid
 */
const basicOp = (operation: string, value1: number, value2: number): number => {
  switch (operation) {
    case Op.ADDITION:
      return value1 + value2
    case Op.DIVISION:
      return value1 / value2
    case Op.MULTIPLICATION:
      return value1 * value2
    case Op.SUBTRACTION:
      return value1 - value2
    default:
      throw new Error(`Invalid operator: "${operation}"`)
  }
}

export default basicOp
