export default class URLHelper {

  /**
   * get a url param value
   * @static
   * @param {string} param to be found in url
   * @returns {string} param value
   */
  static getParam(param) {
    return new URLSearchParams(window.location.search).get(param);
  }

}
