import Factory from '../factory';
import tags from '../../assets/data/tags.json';

class Nav extends HTMLElement{
  
  constructor() {
    super();
    const factory = new Factory();
    tags.forEach(tagName => {
      const tag = factory.createElement('tag', tagName);
      tag.classList.add('category-tag');
      this.appendChild(tag);
    });
  }

}

export default {
  name: 'main-nav',
  extend: 'nav',
  constructor: Nav,
};
