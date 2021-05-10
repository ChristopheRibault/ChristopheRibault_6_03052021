import Factory from '../factory';

export default class Photographer extends HTMLElement{

  constructor(data) {
    super();
    const factory = new Factory();

    const avatar = factory.createElement(
      'avatar',
      { classes: ['photographer-card__avatar'] },
      data,
    );
    const info = factory.createElement(
      'photographerInfo',
      { classes: ['photographer-card__info'] },
      data,
    );
    const tagsContainer = factory.createContainer(
      'tag',
      data.tags,
    );
    
    this.append(
      avatar,
      info,
      tagsContainer,
    );

  }

  static name = 'photographer-card';
  static extends = 'article';

}
