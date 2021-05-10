import { StringHelper } from '../../utils';
import Factory from '../factory';

export default class PhotographerInfo extends HTMLDivElement{

  constructor(data) {
    super();
    const factory = new Factory;

    const place = factory.createElement(
      'p',
      { textContent: `${data.city}, ${data.country}` },
    );

    const tagline = factory.createElement(
      'p',
      { textContent: data.tagline },
    );

    const price = factory.createElement(
      'p',
      { textContent: StringHelper.formatPrice(data.price) },
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
