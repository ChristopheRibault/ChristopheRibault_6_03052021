export default class ArrayHelper {

  static forceArray(variable) {
    if (Array.isArray(variable)) return variable;
    return [variable];
  }

}
