import components from './index';

export default class Factory {

  constructor() {
    /**
     * create a DOM element
     * @param {string} type 
     * @returns {InstanceType}
     */
    this.createElement = function(type) {
      const component = components[type];
      if (component == null) return null;
      
      this.init(component);
      return new component.constructor();
    };
    
    /**
     * create many DOM elements
     * @param {string[]} types 
     * @returns {InstanceType[]}
     */
    this.createElements = function(types = []) {
      return types.map(
        type => this.createElement(type)
      );
    };

    /**
     * define a custom element
     * @param {object} component 
     */
    this.init = function(component) {
      const { 
        name, 
        constructor, 
        extend 
      } = component;

      customElements.define(
        name,
        constructor,
        { extends: extend },
      );
    };
  }

}
