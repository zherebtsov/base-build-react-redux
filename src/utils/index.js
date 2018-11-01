export class Utils {

  /**
   * The function checks the array for emptiness
   * @param array
   * @returns {bool}
   */
  static isEmptyArray(array) {
    return Array.isArray(array) && array.length === 0;
  }

}
