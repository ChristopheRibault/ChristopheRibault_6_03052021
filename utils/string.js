export default class StringHelper {

  /**
   * Capitalize a string
   * @param {string} string 
   * @returns {string}
   */
  static capitalize(string) {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Format price
   * @param {Number|string} price 
   * @returns {string}
   */
  static formatPrice(price) {
    return `${price}€/jour`;
  }

}
