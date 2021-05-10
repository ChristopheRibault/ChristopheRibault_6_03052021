import Factory from '../factory';

class Photographer extends HTMLElement{

  constructor(attributes) {
    super();
    const factory = new Factory();

    this.classList.add('photographer-card');
    const avatar = factory.createElement('avatar', attributes);
    const info = factory.createElement('photographerInfo', attributes);
    const tagsContainer = factory.createElement(
      'itemsContainer',
      {
        type: 'tag',
        data: attributes.tags,
      }
    );
    
    this.append(
      avatar,
      info,
      tagsContainer,
    );


  }

}

export default {
  name: 'photographer-card',
  extend: 'article',
  constructor: Photographer,
};
