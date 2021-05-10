import Factory from './factory';

export default class App extends HTMLDivElement{
  
  constructor() {
    super();
    const factory = new Factory();
    const header = factory.createElement(
      'header', 
      { id: 'main-header', attributes: { role: 'banner' }},
    );
    const main = factory.createElement('main');
    this.appendChild(header);
    this.appendChild(main);
  }

  static name = 'main-app';
  static extends = 'div';

}
