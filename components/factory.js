import { ArrayHelper } from '../utils';
import components from './index';

export default class Factory {

  constructor() {
    /**
     * create a DOM element
     * @param {string} type
     * @param {object} options 
     * @param {string} options.id id de l'élement
     * @param {string} options.textContent contenu textuel de l'élement
     * @param {string} options.innerHTML contenu HTML de l'élement
     * @param {string|string[]} options.classes classes de l'élement
     * @param {object} options.attributes attributs de l'élement
     * @param {object} data data to pass to element
     * @returns {HTMLElement}
     */
    this.createElement = function(type, options = {}, data) {
      const Component = components[type];
      let element;

      // Generic Element
      if (!Component) {
        element = document.createElement(type);
      // Custom element
      } else {
        if (customElements.get(Component.name) === undefined) {
          this.init(Component);
        }
        element = new Component(data);
      }
      
      return this.populateElement(element, options);
    };

    /**
     * Create a container element with a list of children elements
     * @param {string} childrenType type of child elements to contain
     * @param {object[]} data array of container items data
     * @param {object} options options for container element
     * @param {object} childrenOptions options for children elements
     * @returns {HTMLDivElement}
     */
    this.createContainer = function(
      childrenType,
      data,
      options,
      childrenOptions,
    ) {
      const container = this.createElement('ul', options);
      data.forEach(item => {
        container.appendChild(this.createElement('li'))
          .appendChild(this.createElement(
          childrenType,
          childrenOptions,
          item,
        ));
      });

      return container;

    };

    /**
     * Add id, classes and attributes to element
     * @param {HTMLElement} element 
     * @param {object} options 
     * @param {string} options.id id de l'élement
     * @param {string} options.textContent contenu textuel de l'élement
     * @param {string} options.innerHTML contenu HTML de l'élement
     * @param {string|string[]} options.classes classes de l'élement
     * @param {object} options.attributes attributs de l'élement
     * @returns {HTMLElement}
     */
    this.populateElement = function(element, options = {}) {
      if (!element) return null;
      if (!options) return element;

      if (options.id) {
        element.id = options.id;
      }

      if (options.textContent) {
        element.textContent = options.textContent;
      }

      if (options.innerHTML) {
        element.innerHTML = options.innerHTML;
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

    /**
     * define a custom element
     * @param {HTMLElement} Component 
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
