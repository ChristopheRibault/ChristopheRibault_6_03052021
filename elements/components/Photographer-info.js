import { StringHelper } from '../../utils';
import Factory from '../factory';

export default class PhotographerInfo extends HTMLDivElement{

  constructor(data) {
    super();
    const factory = new Factory;

    const place = factory.createElement(
      'p',
      { 
        textContent: `${data.city}, ${data.country}`,
        classes: ['photographer-card__place'],
      },
    );

    const tagline = factory.createElement(
      'p',
      { 
        textContent: data.tagline,
        classes: ['photographer-card__tagline'],
      },
    );

    const price = factory.createElement(
      'p',
      { 
        textContent: StringHelper.formatPrice(data.price),
        classes: ['photographer-card__price'],
      },
    );

    this.append(
      place,
      tagline,
      price,
    );
  }

  static name = 'photographer-info';
  static extends = 'div';

}
