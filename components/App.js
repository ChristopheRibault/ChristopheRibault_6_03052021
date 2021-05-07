import Factory from './factory';

class App extends HTMLDivElement{
  
  constructor() {
    super();
    const factory = new Factory();
    const [header] = factory.createElements(['header']);
    this.appendChild(header);
  }

}

export default {
  name: 'main-app',
  extend: 'div',
  constructor: App,
};
