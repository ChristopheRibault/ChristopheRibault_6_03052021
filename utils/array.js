export default class ArrayHelper {

  /**
   * transform a single element into array of 1 element.
   * @param {any} variable 
   * @returns {Array}
   */
  static forceArray(variable) {
    if (Array.isArray(variable)) return variable;
    return [variable];
  }

}
