/**
 * @file Katas - updateLight
 * @module katas/8kyu/updateLight
 * @see https://codewars.com/kata/58649884a1659ed6cb000072
 */

/**
 * Traffic light states.
 *
 * @enum {Lowercase<string>}
 */
export enum TrafficLightState {
  GREEN = 'green',
  RED = 'red',
  YELLOW = 'yellow'
}

/**
 * Returns the next traffic light state.
 *
 * @example
 *  updateLight('red') // 'green'
 * @example
 *  updateLight('yellow') // 'red'
 * @example
 *  updateLight('green') // 'yellow'
 *
 * @param {string} current - Current traffic light state
 * @return {TrafficLightState} Next traffic light state
 */
const updateLight = (current: string): TrafficLightState => {
  switch (current) {
    case TrafficLightState.GREEN:
      return TrafficLightState.YELLOW
    case TrafficLightState.RED:
      return TrafficLightState.GREEN
    default:
      return TrafficLightState.RED
  }
}

export default updateLight
