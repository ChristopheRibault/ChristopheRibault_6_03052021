import * as components from '../components';

export default class Factory {
  
  /**
   * Create a component
   * @param {string} type 
   * @param {*} [data] data needed by the element
   * @returns {HTMLElement}
   */
  createElement(type, data, options = {}) {
    const Component = components[type];
    if (!Component) return document.createElement(type);

    if (customElements.get(Component.name) === undefined) {
      this.init(Component);
    }
    return new Component(data, options);
  }

  /**
   * Create an 'ol' or 'ul' list of elements
   * @param {string} listType 'ol' or 'ul'
   * @param {string} componentType 
   * @param {Array} [data=[]] 
   * @returns {HTMLOListElement|HTMLUListElement}
   */
  createList(listType, componentType, data = [], options = {}) {
    const list = this.createElement(listType);
    const elements = data.map(elementData => {
      return this.createElement(componentType, elementData, options);
    });
    list.append(...elements);

    return list;
  }

  /**
  * define a custom element
  * @param {HTMLElement} Component 
  */
  init = function(Component) {
    customElements.define(
      Component.name,
      Component,
      { extends: Component.extends },
    );
  };

}
