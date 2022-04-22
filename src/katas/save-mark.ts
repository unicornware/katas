/**
 * @file Katas - saveMark
 * @module katas/saveMark
 * @see https://codewars.com/kata/57fcadd2334ad3bbbc00023c
 * @see https://movable-type.co.uk/scripts/latlong.html
 */

/**
 * Returns the approximate distance between two pairs of coordinates.
 *
 * @example saveMark('48.23° N, 89.10° E', '48.84° N, 89.40° E') // '30KM'
 *
 * @param {string} c1 - First pair of coordinates
 * @param {string} c2 - Second pair of coordinates
 * @return {string} Approximate distance between `c1` and `c2` (in kilometers)
 */
const saveMark = (c1: string, c2: string): string => {
  /**
   * Retrieves the latitude and longitude from a coordinate string.
   *
   * @param {string} coords - Coordinate string to parse
   * @return {[number, number]} Latitude and longitude
   */
  const coordinates = (coords: string): [number, number] => {
    return coords.split(',').map(coord => {
      /** @const {string} direction - Parsed coordinate direction (`N|W|S|E`) */
      const direction: string = coord[coord.length - 1]!

      /** @const {number} value - Parsed coordinate value */
      const value: number = +coord.split('°')[0]!

      // If headed west or south, negate value. Otherwise, return original value
      return value * (direction === 'W' || direction === 'S' ? -1 : 1)
    }) as [number, number]
  }

  /**
   * Converts `num` to radians.
   *
   * @param {number} num - Value (in degrees) to convert
   * @return {number} `num` in radians
   */
  const radians = (num: number): number => (num * Math.PI) / 180

  /** @const {number} RADIUS - Radius of planet Mars (in kilometers) */
  const RADIUS: number = 3390

  /** @const {[number, number]} coords1 - Coordinates parsed from {@link c1} */
  const [lat1, lon1]: [number, number] = coordinates(c1)

  /** @const {[number, number]} coords2 - Coordinates parsed from {@link c2} */
  const [lat2, lon2]: [number, number] = coordinates(c2)

  /** @const {number} phi1 - {@link lat1} (in radians) */
  const phi1: number = radians(lat1)

  /** @const {number} phi2 - {@link lat2} (in radians) */
  const phi2: number = radians(lat2)

  /** @const {number} delta_phi - Distance between latitudes (in radians) */
  const delta_phi: number = radians(lat2 - lat1)

  /** @const {number} delta_lamda - Distance between longitudes (in radians) */
  const delta_lamda: number = radians(lon2 - lon1)

  /** @const {number} a - Haversine formula `a` value */
  const a: number = Math.sin(delta_phi / 2) ** 2 +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(delta_lamda / 2) ** 2

  /** @const {number} c - Haversine formula `c` value */
  const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  /** @const {number} d - Distance between {@link c1} and {@link c2} */
  const d: number = RADIUS * c

  // Return distance with unit appended
  return `${d - (d % 10)}KM`
}

export default saveMark
