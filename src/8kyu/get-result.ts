/**
 * @file Katas - getResult
 * @module katas/8kyu/getResult
 * @see https://codewars.com/kata/5916b952e76dc9cbcb000066
 */

import { ObjectUnknown } from '@flex-development/tutils'

/** Server result types. */
type Result = ObjectUnknown | string

/**
 * Base server result class.
 *
 * @template T - Result type
 *
 * @abstract
 */
abstract class ServerResult<T extends Result = Result> {
  constructor(public httpCode: number, public result: T) {}
}

/**
 * Server error class.
 */
export class ErrorServerResult extends ServerResult<string> {}

/**
 * Server success result class.
 */
export class SuccessServerResult extends ServerResult<ObjectUnknown> {}

/**
 * Retrieves a server result value.
 *
 * @example
 *  const error = new ErrorServerResult(404, 'Not found')
 *  getResult(error) // 'Not found'
 * @example
 *  const success = new SuccessServerResult(200, { message: 'Hello, world!' })
 *  getResult(success) // { message: 'Hello, world!' }
 *
 * @param {ServerResult} r - Server result object
 * @return {ServerResult['result']} Server result value
 */
const getResult = (r: ServerResult): ServerResult['result'] => r.result

export default getResult
