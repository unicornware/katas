/**
 * @file Katas - abbrevName
 * @module katas/abbrevName
 * @see https://codewars.com/kata/57eadb7ecd143f4c9c0000a3
 */

/** Abbreviated name. */
type Initials = `${string}.${string}`

/** Names that can be formatted by {@link abbrevName}. */
type Name = `${string} ${string}`

/**
 * Given two words separated by a single space, `name`, the function converts
 * the name into initials.
 *
 * @example
 *  abbrevName('Sam Harris') // 'S.H'
 * @example
 *  abbrevName('patrick feeney') // 'P.F'
 *
 * @param {Name} name - Name to convert
 * @return {Initials} `name` abbreviated
 */
const abbrevName = (name: Name): Initials => {
  return `${name[0]!}.${name[name.indexOf(' ') + 1]!}`.toUpperCase() as Initials
}

export default abbrevName
