/**
 * @file Katas - setAlarm
 * @module katas/8kyu/setAlarm
 * @see https://codewars.com/kata/568dcc3c7f12767a62000038
 */

/**
 * Checks if an alarm needs to be set.
 *
 * @example
 *  setAlarm(true, false) // true
 * @example
 *  setAlarm(false, true) // false
 *
 * @param {boolean} e - If employed
 * @param {boolean} v - If on vacation
 * @return {boolean} `true` if alarm needs to be set, `false` other
 */
const setAlarm = (e: boolean, v: boolean): boolean => e && !v

export default setAlarm
