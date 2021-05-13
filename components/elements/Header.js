import Factory from '../factory';

export default class Header extends HTMLElement{
  
  constructor() {
    super();
    const factory = new Factory();
    const logo = factory.createElement(
      'logo', 
      { id: 'page-logo', classes: ['page-logo'] },
    );
    const nav = factory.createElement(
      'nav',
      { 
        id: 'main-nav',
        classes: ['main-nav'],
        attributes: { 'aria-label': 'photographer categories' }
      },
    );
    this.append(logo, nav);
  }

  static name = 'page-header';
  static extends = 'header';

}
