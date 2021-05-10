import Factory from './factory';

class App extends HTMLDivElement{
  
  constructor() {
    super();
    const factory = new Factory();
    const [ header, main ] = factory.createElements([ 'header', 'main' ]);
    this.appendChild(header);
    this.appendChild(main);
  }

}

export default {
  name: 'main-app',
  extend: 'div',
  constructor: App,
};
