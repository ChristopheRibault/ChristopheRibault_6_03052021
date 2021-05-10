import Factory from '../factory';

export default class Avatar extends HTMLDivElement{

  constructor(data) {
    super();
    const factory = new Factory();

    const image = factory.createElement(
      'img',
      { 
        classes: [ 'photographer-card__img', 'avatar-picture' ],
        attributes: {
          src: `assets/pictures/avatars/${data.portrait}`,
        }
      },
    );

    const name = factory.createElement(
      'h2',
      { 
        classes: ['photographer-card__name'],
        textContent: data.name,
      },
    );

    this.append(
      image,
      name,
    );
  }

  static name = 'photographer-avatar';
  static extends = 'div';

}
