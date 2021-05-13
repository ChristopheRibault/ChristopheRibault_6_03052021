import Factory from './factory';

export default class App extends HTMLDivElement{
  
  constructor() {
    super();
    const factory = new Factory();

    const content = factory.createElement(
      'main',
      { id: 'page-content' },
    );

    const home = factory.createElement('homePage');
    content.append(home);

    const header = factory.createElement(
      'header', 
      { id: 'main-header', attributes: { role: 'banner' }},
      // { showNav: page === home },
    );

    this.append(header, content);

  }

  static name = 'main-app';
  static extends = 'div';

}
