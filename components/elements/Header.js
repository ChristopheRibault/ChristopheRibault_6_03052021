import Factory from '../factory';

class Header extends HTMLElement{
  
  constructor() {
    super();
    const factory = new Factory();
    const [logo] = factory.createElements(['logo']);
    this.appendChild(logo);
  }

}

export default {
  name: 'page-header',
  extend: 'header',
  constructor: Header,
};
