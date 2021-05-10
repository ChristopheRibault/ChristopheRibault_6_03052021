import { ArrayHelper } from '../utils';
import components from './index';

export default class Factory {

  constructor() {
    /**
     * create a DOM element
     * @param {string} type
     * @param {object} options
     * @param {string} options.id id de l'élement
     * @param {string|string[]} options.classes classes de l'élement
     * @param {object} options.attributes attributs de l'élement
     * @returns {HTMLElement}
     */
    this.createElement = function(type, options = {}) {
      const Component = components[type];

      if (customElements.get(Component.name) === undefined) {
        this.init(Component);
      }

      const element = new Component(options);
      
      return this.populateElement(element, options);
    };

    /**
     * Add id, classes and attributes to element
     * @param {HTMLElement} element 
     * @param {object} options 
     * @param {string} options.id id de l'élement
     * @param {string|string[]} options.classes classes de l'élement
     * @param {object} options.attributes attributs de l'élement
     * @returns {HTMLElement}
     */
    this.populateElement = function(element, options = {}) {
      if (!element) return null;

      if (options.id) {
        element.id = options.id;
      }

      if (options.classes) {
        element.classList
          .add(...ArrayHelper.forceArray(options.classes));
      }
      if (options.attributes) {
        for (const key in options.attributes) {
          element.setAttribute(key, options.attributes[key]);
        }
      }

      return element;
    };

    // this.createContainer = function(
    //   childrenType,
    //   attributes,
    //   childrenAttributes,
    // ) {
    //   const container = document.createElement('div');
    // };
    
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
     * @param {class} Component 
     */
    this.init = function(Component) {
      customElements.define(
        Component.name,
        Component,
        { extends: Component.extends },
      );

    };
  }

}
