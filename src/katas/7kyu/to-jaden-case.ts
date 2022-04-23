/// <reference path='./to-jaden-case.d.ts' />

/**
 * @file Katas - toJadenCase
 * @module katas/7kyu/toJadenCase
 * @see https://codewars.com/kata/5390bac347d09b7da40006f6
 */

/**
 * Capitalize each word in @this.
 *
 * @example
 *  String.prototype.toJadenCase = toJadenCase
 *
 *  let str = "How can mirrors be real if our eyes aren't real"
 *  str = str.toJadenCase() // "How Can Mirrors Be Real If Our Eyes Aren't Real"
 *
 * @param {string} this - Current string
 * @return {string} Current string with each word capitalized
 */
function toJadenCase(this: string): string {
  return this.replace(/^\w|\s\w/gi, sub => sub.toUpperCase())
}

String.prototype.toJadenCase = toJadenCase

export default toJadenCase
