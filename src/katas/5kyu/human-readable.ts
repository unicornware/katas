/**
 * @file Katas - humanReadable
 * @module katas/5kyu/humanReadable
 * @see https://codewars.com/kata/52685f7382004e774f0001f7
 */

/**
 * Given a non-negative integer, `seconds`, the functions returns the time in a
 * human-readable format (`HH:MM:SS`).
 *
 * @example
 *  humanReadable(0) // '00:00:00'
 * @example
 *  humanReadable(60) // '00:01:00'
 * @example
 *  humanReadable(359999) // '99:59:59'
 *
 * @param {number} seconds - Time in seconds
 * @return {string} Time in human-readable format (`HH:MM:SS`)
 */
const humanReadable = (seconds: number): string => {
  /** @var {string} formatted - {@link seconds} in human-readable format */
  let formatted: string = ''

  // Convert seconds into human-readable time
  for (const converter of [3600, 60, 1]) {
    /** @const {number} time - {@link seconds} in hours, minutes, or seconds */
    const time: number = Math.floor(seconds / converter)

    // Add conversion to time string
    formatted += time < 10 ? `0${time}` : time
    if (converter !== 1) formatted += ':'

    // Remove converted seconds from total seconds
    seconds -= time * converter
  }

  return formatted
}

export default humanReadable
