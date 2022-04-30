/**
 * @file Katas - basicTypes
 * @module katas/8kyu/basicTypes
 * @see https://codewars.com/kata/5914c6ee51f1d39b5600001c
 */

/** @const {boolean} var1Boolean - Boolean value */
const var1Boolean: boolean = true

/** @const {number} var2Decimal - Number (decimal) */
const var2Decimal: number = 13

/** @const {number} var3Hex - Number (hex) */
const var3Hex: number = 0xF0_0D

/** @const {number} var4Binary - Number (binary) */
const var4Binary: number = 0b11_1111

/** @const {number} var5Octal - Number (octal) */
const var5Octal: number = 0o744

/** @const {string} var6String - "Hello" message */
const var6String: string = 'Hello, world!'

/** @const {any[]} var7Array - Array with random elements */
const var7Array: any[] = [1, 'test', { a: 3 }, 4, 5]

/** @const {number[]} var8NumericArray - Number array */
const var8NumericArray: number[] = [1, 2, 3, 4, 5]

/** @const {[string, number]} var9Tuple - Tuple value */
const var9Tuple: [string, number] = ['key', 12_345]

/**
 * Colors.
 *
 * @enum {number}
 */
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}

/** @const {Color} var10Enum - {@link Color} value */
const var10Enum: Color = Color.Blue

/** @const {any[]} var11ArrayOfAny - Another array with random elements */
const var11ArrayOfAny: any[] = [...var7Array]

/**
 * Function that returns `void`.
 *
 * @return {void} Nothing
 */
const var12VoidFunction = (): void => {/* purposely empty */}

/** @const {null} var13Null - `null` */
const var13Null: null = null

/** @const {undefined} var14Undefined - `undefined` */
const var14Undefined: undefined = undefined

/**
 * Function that `never` returns.
 *
 * @return {never} Nothing
 * @throws {Error}
 */
const var15NeverFunction = (): never => {
  throw new Error('This is an error!')
}

export {
  Color,
  var10Enum,
  var11ArrayOfAny,
  var12VoidFunction,
  var13Null,
  var14Undefined,
  var15NeverFunction,
  var1Boolean,
  var2Decimal,
  var3Hex,
  var4Binary,
  var5Octal,
  var6String,
  var7Array,
  var8NumericArray,
  var9Tuple
}
