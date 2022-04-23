/**
 * @file Katas - betterThanAverage
 * @module katas/8kyu/betterThanAverage
 * @see https://codewars.com/kata/5601409514fc93442500010b
 */

/**
 * There was a test in your class and you passed it. Congratulations!
 *
 * But you're an ambitious person. You want to know if you're better than the
 * average student in your class.
 *
 * Given an array of your peers' test scores, `scores`, and your grade, `grade`,
 * the function checks if you scored better than the average student.
 *
 * @example
 *  betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) // false
 * @example
 *  betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) // true
 *
 * @param {number[]} scores - Peer test scores
 * @param {number} grade - Your grade
 * @return {boolean} `true` if `grade > class average`, `false` otherwise
 */
const betterThanAverage = (scores: number[], grade: number): boolean => {
  // Add grade to test scores array
  scores.push(grade)

  // Calculate average and check if grade is better than class average
  return scores.reduce((acc, n) => acc + n, 0) / scores.length < grade
}

export default betterThanAverage
