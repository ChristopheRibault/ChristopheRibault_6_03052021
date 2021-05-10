import Factory from '../factory';

class ItemsContainer extends HTMLDivElement{
  
  /**
   * Create a container for any type of elements list
   * @param {object} attributes
   * @param {string} attributes.type type of items to contain
   * @param {object[]} attributes.data data of items
   */
  constructor(attributes = {}) {
    super();
    const factory = new Factory();
    attributes.data?.forEach(item => {
      const itemElement = factory.createElement(
        attributes.type,
        item,
      );
      this.appendChild(itemElement);
    });
  }

}

export default {
  name: 'items-container',
  extend: 'div',
  constructor: ItemsContainer,
};
