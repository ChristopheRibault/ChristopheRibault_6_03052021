import Factory from '../factory';

export default class Photographer extends HTMLElement{

  constructor(data) {
    super();
    const factory = new Factory();

    this.id = `photographer-${data.id}`;

    const identity = factory.createElement(
      'identity',
      { classes: ['photographer-card__identity'] },
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
      { classes: ['photographer-card__tags'] }
    );
    
    this.append(
      identity,
      info,
      tagsContainer,
    );

  }

  static name = 'photographer-card';
  static extends = 'article';

}
