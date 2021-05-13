import Factory from '../factory';

export default class PhotographerInfo extends HTMLDivElement{

  constructor(data) {
    super();
    const factory = new Factory;


    const name = factory.createElement(
      'h2',
      { 
        classes: ['photographer-details__name'],
        textContent: data.name,
      }
    );

    const place = factory.createElement(
      'p',
      { 
        textContent: `${data.city}, ${data.country}`,
        classes: ['photographer-details__place'],
      },
    );

    const tagline = factory.createElement(
      'p',
      { 
        textContent: data.tagline,
        classes: ['photographer-details__tagline'],
      },
    );

    const tags = factory.createContainer(
      'tag',
      data.tags,
      { classes: ['photographer-details__tags'] }
    );

    const textContainer = factory.createElement('div');
    textContainer.append(
      name,
      place,
      tagline,
      tags,
    );

    const contactBtn = factory.createElement(
      'contactBtn'
    );

    const avatar = factory.createElement(
      'avatar',
      { classes: ['photographer-details__avatar'] },
      data.portrait,
    );

    this.append(
      textContainer,
      contactBtn,
      avatar,
    );
  }

  static name = 'photographer-details';
  static extends = 'div';

}
