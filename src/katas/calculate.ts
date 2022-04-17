/**
 * @file Katas - calculate
 * @module katas/calculate
 * @see https://codewars.com/kata/581bc0629ad9ff9873000316
 */

/**
 * Mathematical operators.
 *
 * @enum {string}
 */
enum Op {
  ADD = '+',
  DIVIDE = '$',
  MULTIPLY = '*',
  SUBTRACT = '-'
}

/**
 * Function that returns a {@link RegExp} object representing a two-term
 * mathematical expression.
 */
type ExprRegexFn = (op?: Op, flags?: string) => RegExp

/** Order of operations configuration. */
type Operations = [Op, Op, Op, Op]

/** @const {Operations} ORDER_OF_OPERATIONS - Default order of operations */
const ORDER_OF_OPERATIONS: Operations = [
  Op.DIVIDE,
  Op.MULTIPLY,
  Op.SUBTRACT,
  Op.ADD
]

/**
 * Returns a regex object representing a two-term mathematical expression.
 *
 * @param {Op} [op] - Operator to create expression for
 * @param {string} [flags] - Regex flags
 * @return {RegExp} Two-term expression regex
 */
const tt_expression: ExprRegexFn = (op?: Op, flags?: string): RegExp => {
  /** @const {string} one_term - One-term expression regex pattern */
  const one_term: string = '(-?\\d+(\\.\\d+)?(e[+-]\\d+)?)'

  /** @const {string} operator - Operator regex pattern */
  const operator: string = op ? `\\${op}` : '[$*+-]'

  return new RegExp(`${one_term}${operator}${one_term}`, flags)
}

/**
 * Given a stringified mathematical expression, `expression`, the function
 * calculates the result and returns it as a number.
 *
 * Unless specified by `order`, calculations are performed according to the
 * following order of operations:
 *
 * 1. division (`$`)
 * 2. multiplication (`*`)
 * 3. subtraction (`-`)
 * 4. addition (`+`)
 *
 * If the expression is invalid, an error message will be returned instead.
 *
 * @example calculate('1+1') // 2
 * @example calculate('10$2') // 5
 * @example calculate('1.5*3') // 4.5
 * @example calculate('1000$2.5$5+5-5+6$6') // 81
 * @example calculate('3.156696237618729e-8') // 3.156696237618729e-8
 * @example calculate('10-9p') // '400: Bad request'
 *
 * @param {string} expression - Mathematical expression
 * @param {Operations} [order=ORDER_OF_OPERATIONS] - Order of operations
 * @param {ExprRegexFn} [tter=tt_expression] - Two-term expression regex builder
 * @return {number | '400: Bad request'} Result or error message
 */
const calculate = (
  expression: string,
  order: Operations = ORDER_OF_OPERATIONS,
  tter: ExprRegexFn = tt_expression
): number | '400: Bad request' => {
  // If expression is one number, return it
  if (/^-?\d+(\.\d+)?(e[+-]\d+)?$/.test(expression)) return +expression

  // Reduce expression
  while (tter(undefined, 'g').test(expression)) {
    // Do math according to order of operations
    for (const op of order) {
      /** @const {RegExp} tte - Two-term expression regex */
      const tte: RegExp = tter(op)

      // Do math until no two-term expressions for current operator are left
      while (tte.test(expression)) {
        const [expr = '', t1 = '', , , t2 = ''] = expression.match(tte)!

        /** @var {number} result - Result of calculating two-term expression */
        let result: number = 0

        // Perform operation
        switch (op) {
          case Op.ADD:
            result = +t1 + +t2
            break
          case Op.DIVIDE:
            result = +t1 / +t2
            break
          case Op.MULTIPLY:
            result = +t1 * +t2
            break
          case Op.SUBTRACT:
            result = +t1 - +t2
            break
          default:
            break
        }

        // Replace current two-term expression with result
        expression = expression.replace(expr, `${result}`)
      }
    }
  }

  // Return output if it's a number. Otherwise, return error message
  return Number.isNaN(+expression) ? '400: Bad request' : +expression
}

export default calculate
