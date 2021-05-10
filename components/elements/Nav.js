import Factory from '../factory';
import tags from '../../assets/data/tags.json';

export default class Nav extends HTMLElement{
  
  constructor() {
    super();
    const factory = new Factory();
    const tagContainer = factory.createElement(
      'itemsContainer',
      { type: 'tag', data: tags }
    );
    this.appendChild(tagContainer);
  }

  static name = 'main-nav';
  static extends = 'nav';

}
