/**
 * @file Katas - openOrSenior
 * @module katas/openOrSenior
 * @see https://codewars.com/kata/5502c9e7b3216ec63c0001aa
 */

/**
 * Western Suburbs Croquet Club membership categories.
 *
 * To be a senior, a member must be at least `55` years old and have a handicap
 * greater than `7`. Handicaps range from `-2` to `+26`; the better the player
 * the lower the handicap.
 */
export type MemberCategory = 'Open' | 'Senior'

/**
 * Western Suburbs Croquet Club new member data.
 */
export type NewMemberData = [number, number]

/**
 * The Western Suburbs Croquet Club has two categories of membership.
 *
 * Given an array containing each new member's age and handicap, `data`, the
 * function returns an array containing new member's category.
 *
 * @see {@link MemberCategory}
 * @see {@link NewMemberData}
 *
 * @example openOrSenior([[45, 2], [61, 12]]) // ['Open', 'Senior']
 * @example openOrSenior([]) // []
 *
 * @param {NewMemberData[]} data - New member data
 * @return {MemberCategory[]} New member categories
 */
const openOrSenior = (data: NewMemberData[]): MemberCategory[] => {
  return data.map(([a, h]) => a >= 55 && h > 7 ? 'Senior' : 'Open')
}

export default openOrSenior
