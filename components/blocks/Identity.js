import Router from '../../router';
import Factory from '../factory';

export default class Identity extends HTMLDivElement{

  constructor(data) {
    super();
    this.data = data;
    const factory = new Factory();
    this.setAttribute('tabIndex', '0');

    const image = factory.createElement(
      'avatar',
      { 
        classes: ['photographer-card__img'],
      },
      data.portrait,
    );

    const name = factory.createElement(
      'h2',
      { 
        classes: ['photographer-card__name'],
        textContent: data.name,
      },
    );

    this.redirect = function() {
      const router = new Router();
      router.switchPage(
        router.createPage(
          'photographer',
          data.id,
        )
      );
    };

    this.addEventListener('click', () => this.redirect());
    this.addEventListener('keydown', (event) => {
      if(event.code === 'Enter') this.redirect();
    });


    this.append(
      image,
      name,
    );

  }

  static name = 'photographer-avatar';
  static extends = 'div';

}